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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
                border: '4px solid rgba(255, 255, 255, 0.1)',
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M3.9 8.26H2V15.74H3.9V8.26Z" fill="white"/>
                  <path d="M13.25 8.26H11.35V15.74H13.25V13.25H15.16C16.91 13.25 18.32 11.84 18.32 10.09C18.32 8.35 16.91 6.94 15.16 6.94H13.25V8.26ZM15.16 11.94H13.25V8.26H15.16C16.18 8.26 17 9.08 17 10.09C17 11.11 16.18 11.94 15.16 11.94Z" fill="white"/>
                  <path d="M8.1 8.26H4.8V15.74H8.1C10.22 15.74 11.93 13.86 11.93 12C11.93 10.14 10.22 8.26 8.1 8.26ZM8.1 14.42H6.7V9.58H8.1C9.31 9.58 10.35 10.71 10.35 12C10.35 13.29 9.31 14.42 8.1 14.42Z" fill="white"/>
                  <path d="M22 14.7L20.7 13.4V9.7L22 8.4L20.6 7L19.1 8.5C18.45 7.58 17.41 6.94 16.2 6.94H15.16C13.96 6.94 12.91 7.58 12.27 8.5L10.77 7L9.37 8.4L10.67 9.7V13.4L9.37 14.7L10.77 16.1L12.27 14.6C12.92 15.52 13.97 16.16 15.16 16.16H16.2C17.4 16.16 18.45 15.52 19.1 14.6L20.6 16.1L22 14.7ZM16.2 14.84H15.16C13.68 14.84 12.47 13.58 12.47 12C12.47 10.42 13.68 9.16 15.16 9.16H16.2C17.63 9.16 18.79 10.37 18.79 12C18.79 13.63 17.63 14.84 16.2 14.84Z" fill="white"/>
                </svg>
              </div>
              
              {/* Decorative rings around logo */}
              <div style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                borderRadius: '36px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }} />
              <div style={{
                position: 'absolute',
                width: '220px',
                height: '220px',
                borderRadius: '44px',
                border: '1px solid rgba(16, 185, 129, 0.15)',
              }} />
            </div>
            
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