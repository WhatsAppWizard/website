import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'WhatsApp Wizard'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #0f172a, #065f46)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '60px',
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '40px',
          gap: '20px'
        }}>
          <div style={{ 
            background: '#10b981', 
            width: '100px', 
            height: '100px', 
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '60px',
            fontWeight: 'bold'
          }}>
            W
          </div>
          <div style={{ 
            fontSize: '72px', 
            fontWeight: 'bold',
            color: 'white' 
          }}>
            WhatsApp Wizard
          </div>
        </div>
        <div style={{ 
          fontSize: '36px', 
          color: '#94a3b8',
          textAlign: 'center',
          marginTop: '24px'
        }}>
          You will never have to leave your WhatsApp
        </div>
      </div>
    ),
  )
}