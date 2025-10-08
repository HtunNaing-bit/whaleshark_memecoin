const sharp = require('sharp');
const fs = require('fs');

async function createFacebookCoverPhoto() {
  try {
    // Facebook cover photo dimensions: 1200x630 (recommended) or 1640x859 (maximum)
    const width = 1640;
    const height = 859;
    
    // Create a beautiful gradient background similar to your website
    const backgroundSvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f0f0f;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#0a1a0a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0f0f0f;stop-opacity:1" />
          </linearGradient>
          <radialGradient id="grid" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:rgba(0,255,255,0.1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
          </radialGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#ff6b9d;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#bg)"/>
        
        <!-- Grid pattern -->
        <defs>
          <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)"/>
        
        <!-- Central logo area with glow effect -->
        <circle cx="${width/2}" cy="${height/2 - 50}" r="120" fill="none" stroke="rgba(0,255,255,0.3)" stroke-width="2"/>
        <circle cx="${width/2}" cy="${height/2 - 50}" r="100" fill="none" stroke="rgba(0,255,255,0.2)" stroke-width="1"/>
        
        <!-- Main title -->
        <text x="${width/2}" y="${height/2 + 100}" font-family="Inter, sans-serif" font-size="72" font-weight="800" text-anchor="middle" fill="url(#textGradient)">
          WHALESHARK
        </text>
        
        <!-- Subtitle -->
        <text x="${width/2}" y="${height/2 + 150}" font-family="Inter, sans-serif" font-size="32" font-weight="600" text-anchor="middle" fill="#b8c5d1">
          The Ocean's Most Powerful Meme Coin
        </text>
        
        <!-- Action text -->
        <text x="${width/2}" y="${height/2 + 220}" font-family="Inter, sans-serif" font-size="24" font-weight="500" text-anchor="middle" fill="#00ffff">
          🚀 Launching on Pump.fun | Join the Pod! 🦈
        </text>
        
        <!-- Decorative elements -->
        <circle cx="${width/2 - 200}" cy="${height/2 - 100}" r="3" fill="rgba(0,255,255,0.6)"/>
        <circle cx="${width/2 + 200}" cy="${height/2 - 100}" r="3" fill="rgba(0,255,255,0.6)"/>
        <circle cx="${width/2 - 300}" cy="${height/2 + 50}" r="2" fill="rgba(0,255,255,0.4)"/>
        <circle cx="${width/2 + 300}" cy="${height/2 + 50}" r="2" fill="rgba(0,255,255,0.4)"/>
        
        <!-- Bottom accent line -->
        <line x1="${width/2 - 300}" y1="${height - 80}" x2="${width/2 + 300}" y2="${height - 80}" stroke="rgba(0,255,255,0.3)" stroke-width="2"/>
      </svg>
    `;
    
    // Convert SVG to PNG
    const backgroundBuffer = await sharp(Buffer.from(backgroundSvg))
      .png()
      .toBuffer();
    
    // Load the logo
    const logoBuffer = fs.readFileSync('public/whale-shark-logo.svg');
    
    // Resize logo to fit nicely in the cover
    const logoResized = await sharp(logoBuffer)
      .resize(200, 200, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Composite the logo onto the background
    const finalImage = await sharp(backgroundBuffer)
      .composite([{
        input: logoResized,
        top: Math.round((height - 200) / 2) - 100,
        left: Math.round((width - 200) / 2)
      }])
      .png()
      .toBuffer();
    
    // Save the cover photo
    fs.writeFileSync('facebook-cover-photo.png', finalImage);
    
    console.log('🎉 Facebook cover photo created successfully!');
    console.log('📐 Dimensions: 1640x859 pixels (Facebook maximum)');
    console.log('📁 File: facebook-cover-photo.png');
    console.log('✨ Features: Beautiful gradient, logo, and branding');
    
  } catch (error) {
    console.error('Error creating cover photo:', error);
  }
}

createFacebookCoverPhoto();
