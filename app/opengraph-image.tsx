import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'WhatsApp Wizard'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

// Font loading
export const runtime = 'edge'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(135deg, #065f46 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Inter, sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-200px',
          left: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)',
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-250px',
          right: '-250px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%)',
        }} />
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
        }} />
        
        {/* Logo and text container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          zIndex: 10,
          width: '90%',
          maxWidth: '1000px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
            gap: '24px',
          }}>
            {/* Logo */}
           
            {/* Brand name */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '80px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
                lineHeight: '1',
              }}>
                WhatsApp
              </div>
              <div style={{
                fontSize: '80px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: '1',
              }}>
                Wizard
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div style={{
            fontSize: '32px',
            maxWidth: '800px',
            textAlign: 'center',
            color: '#94a3b8',
            marginTop: '24px',
            lineHeight: '1.4',
            padding: '16px 32px',
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          }}>
            Download media, create stickers, and more — all without leaving WhatsApp
          </div>
          
          {/* Feature highlights */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
          }}>
            {['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Twitter'].map((platform) => (
              <div key={platform} style={{
                fontSize: '16px',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '30px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}>
                {platform}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom pattern */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100px',
          background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0) 100%)',
          zIndex: '0',
        }} />
      </div>
    ),
    {
      ...size,
    }
  )
}