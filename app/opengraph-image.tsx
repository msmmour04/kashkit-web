import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KashKit — Small loans, made for students.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Dynamic OG image for social sharing. Brand-matched: bone canvas, ink
 * headline, red italic-feel accent clause, compliance line at the bottom.
 * No external fonts — uses system stack to keep the edge function light.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(at 18% 6%, #FAD7C8 0%, transparent 38%), radial-gradient(at 92% 18%, #FEEAD3 0%, transparent 42%), radial-gradient(at 64% 86%, #E5DEF2 0%, transparent 40%), #F4F1EC',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {/* Top row: wordmark + pulse pill */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', color: '#1A1A1A', fontWeight: 800, fontSize: 44, letterSpacing: '-0.04em' }}>
            kashkit<span style={{ color: '#E7352C', marginLeft: 2 }}>·</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 24px',
              background: '#FFFFFF',
              border: '1px solid #E7E2DA',
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 800,
              color: '#1A1A1A',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#E7352C' }} />
            Now onboarding · Texas-licensed
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#1A1A1A', fontSize: 130, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.045em' }}>
            Small loans,
          </div>
          <div
            style={{
              display: 'flex',
              color: '#E7352C',
              fontSize: 130,
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginTop: 4,
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            made for students.
          </div>
          <div style={{ display: 'flex', color: '#6E6B66', fontSize: 30, fontWeight: 500, marginTop: 30, maxWidth: 880 }}>
            Verify your .edu, link your bank, get $25 to $100 in minutes. No hidden fees.
          </div>
        </div>

        {/* Compliance footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#8A867E', fontSize: 20, fontWeight: 700 }}>
          <div style={{ display: 'flex' }}>NMLS #2780724 · OCCC #2780724 · San Antonio, TX</div>
          <div style={{ display: 'flex' }}>kashkit.us</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
