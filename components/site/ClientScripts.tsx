'use client';
import { useEffect } from 'react';

/**
 * All client-side interactions for the marketing site:
 * - Reset scroll to top on load (clear hash)
 * - Sticky header backdrop toggle on scroll
 * - Mobile drawer open/close + animated hamburger
 * - IntersectionObserver scroll-reveal (with 1.4s safety fallback)
 * - Number count-up
 * - Magnetic-button cursor tracking (clamped ±6px)
 * - FAQ tab switching
 * - Waitlist form (visual confirmation only — wire to a real endpoint later)
 * - Contact form (button flip to "Sent ✓" then reset)
 * - Clone marquee track for seamless loop
 * - prefers-reduced-motion respected throughout
 *
 * Ported from Claude Design's app.js handoff. Same logic, React lifecycle.
 */
export function ClientScripts() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- Always start at top ---- */
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (location.hash) history.replaceState(null, '', location.pathname);
    window.scrollTo(0, 0);

    /* ---- Sticky header backdrop ---- */
    const header = document.querySelector('.site-header') as HTMLElement | null;
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Mobile drawer ---- */
    const burger = document.querySelector('.hamburger') as HTMLButtonElement | null;
    const drawer = document.querySelector('.drawer') as HTMLElement | null;
    const toggleDrawer = (open: boolean) => {
      burger?.classList.toggle('open', open);
      drawer?.classList.toggle('open', open);
      burger?.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const onBurger = () => toggleDrawer(!drawer?.classList.contains('open'));
    burger?.addEventListener('click', onBurger);
    const drawerLinks = drawer?.querySelectorAll('a') ?? [];
    const onDrawerLink = () => toggleDrawer(false);
    drawerLinks.forEach(a => a.addEventListener('click', onDrawerLink));

    /* ---- Scroll reveal ---- */
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    let io: IntersectionObserver | null = null;
    if (reduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(e => e.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        entries => {
          for (const en of entries) {
            if (en.isIntersecting) {
              en.target.classList.add('in');
              io?.unobserve(en.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      revealEls.forEach(e => io!.observe(e));
    }
    // Safety fallback — if the observer never fires (some iframe contexts),
    // force-reveal anything still hidden so content can never get stuck.
    const safetyTimer = window.setTimeout(() => {
      revealEls.forEach(e => { if (!e.classList.contains('in')) e.classList.add('in'); });
    }, 1400);

    /* ---- Count-up ---- */
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const counterTimers: number[] = [];
    counters.forEach(el => {
      const target = parseFloat(el.getAttribute('data-count') ?? '0');
      const suffix = el.getAttribute('data-suffix') ?? '';
      const prefix = el.getAttribute('data-prefix') ?? '';
      if (reduced) { el.textContent = prefix + target + suffix; return; }
      const dur = 1400;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = prefix + val + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      counterTimers.push(window.setTimeout(() => requestAnimationFrame(step), 250));
    });

    /* ---- Magnetic buttons ---- */
    const magnets = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'));
    const magnetCleanup: (() => void)[] = [];
    if (!reduced) {
      magnets.forEach(el => {
        const strength = 0.35;
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          let x = (e.clientX - (r.left + r.width / 2)) * strength;
          let y = (e.clientY - (r.top + r.height / 2)) * strength;
          x = Math.max(-6, Math.min(6, x));
          y = Math.max(-6, Math.min(6, y));
          el.style.transform = `translate(${x}px,${y}px)`;
        };
        const leave = () => { el.style.transform = 'translate(0,0)'; };
        el.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', leave);
        magnetCleanup.push(() => {
          el.removeEventListener('mousemove', move);
          el.removeEventListener('mouseleave', leave);
        });
      });
    }

    /* ---- FAQ tabs ---- */
    const qs = Array.from(document.querySelectorAll<HTMLButtonElement>('.faq-q'));
    const panels = Array.from(document.querySelectorAll<HTMLElement>('.faq-panel'));
    const faqCleanup: (() => void)[] = [];
    qs.forEach(q => {
      const handler = () => {
        const id = q.getAttribute('data-faq');
        qs.forEach(x => x.classList.toggle('active', x === q));
        panels.forEach(p => p.classList.toggle('show', p.getAttribute('data-panel') === id));
      };
      q.addEventListener('click', handler);
      faqCleanup.push(() => q.removeEventListener('click', handler));
    });

    /* ---- Waitlist form is handled by <WaitlistForm /> client component
           (it owns its own state + Supabase insert). No global listener here. ---- */

    /* ---- Contact form (button flip) ---- */
    const cf = document.querySelector('.contact-form') as HTMLFormElement | null;
    let cfResetTimer: number | undefined;
    const onCfSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      if (!cf) return;
      const btn = cf.querySelector<HTMLButtonElement>('button[type=submit]');
      if (!btn) return;
      const orig = btn.innerHTML;
      btn.innerHTML = 'Sent ✓';
      btn.style.background = 'var(--emerald-deep)';
      btn.disabled = true;
      cfResetTimer = window.setTimeout(() => {
        cf.reset();
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 2400);
    };
    cf?.addEventListener('submit', onCfSubmit);

    /* ---- Clone marquee track for seamless loop ---- */
    const track = document.querySelector('.marquee-track') as HTMLElement | null;
    if (track && !track.dataset.cloned) {
      track.innerHTML += track.innerHTML;
      track.dataset.cloned = 'true';
    }

    /* ---- Cleanup on unmount ---- */
    return () => {
      window.removeEventListener('scroll', onScroll);
      burger?.removeEventListener('click', onBurger);
      drawerLinks.forEach(a => a.removeEventListener('click', onDrawerLink));
      io?.disconnect();
      window.clearTimeout(safetyTimer);
      counterTimers.forEach(t => window.clearTimeout(t));
      magnetCleanup.forEach(fn => fn());
      faqCleanup.forEach(fn => fn());
      cf?.removeEventListener('submit', onCfSubmit);
      if (cfResetTimer !== undefined) window.clearTimeout(cfResetTimer);
    };
  }, []);

  return null;
}
