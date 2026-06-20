'use client';
import { useState } from 'react';
import { joinWaitlist } from '@/lib/supabase';

/**
 * Waitlist email-capture form. Replaces the static <form> in page.tsx with a
 * client component that actually inserts into public.waitlist via the anon
 * Supabase client. Matches the same DOM/classes the design CSS targets:
 *   .waitlist-form (visible by default)
 *   .waitlist-done (shown after success)
 *
 * Magnetic-button pointer tracking is still wired by ClientScripts on
 * elements with [data-magnetic].
 */
export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setError(null);
    const res = await joinWaitlist(email, 'web_marketing_home');
    if (res.ok) {
      setStatus('done');
    } else {
      setError(res.error ?? 'Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="waitlist-done show" role="status" aria-live="polite">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        You&apos;re on the list — watch your inbox.
      </div>
    );
  }

  return (
    <>
      <form className="waitlist-form reveal" data-d="2" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          placeholder="you@school.edu"
          aria-label="School email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          autoComplete="email"
        />
        <button className="btn btn-red" type="submit" data-magnetic disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Joining…' : 'Join waitlist'} <span className="arrow">→</span>
        </button>
      </form>
      {error && (
        <div
          role="alert"
          style={{
            maxWidth: 480,
            margin: '16px auto 0',
            padding: '12px 18px',
            borderRadius: 16,
            background: 'rgba(231,53,44,0.08)',
            border: '1px solid rgba(231,53,44,0.24)',
            color: 'var(--red-deep)',
            fontWeight: 700,
            fontSize: 14,
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}
