const sharp = require('sharp');
const fs = require('fs');

async function createMinimalistCoverPhoto() {
  try {
    const width = 1640;
    const height = 859;
    
    // Create a minimalist, clean design
    const minimalistSvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Clean gradient -->
          <linearGradient id="cleanBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0f3460;stop-opacity:1" />
          </linearGradient>
          
          <!-- Accent gradient -->
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0099cc;stop-opacity:1" />
          </linearGradient>
          
          <!-- Subtle pattern -->
          <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="rgba(0,255,255,0.1)"/>
          </pattern>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#cleanBg)"/>
        <rect width="100%" height="100%" fill="url(#dotPattern)"/>
        
        <!-- Left accent bar -->
        <rect x="0" y="0" width="8" height="100%" fill="url(#accentGradient)"/>
        
        <!-- Central content area -->
        <rect x="${width*0.2}" y="${height*0.2}" width="${width*0.6}" height="${height*0.6}" rx="20" fill="rgba(0,0,0,0.2)" stroke="rgba(0,255,255,0.3)" stroke-width="2"/>
        
        <!-- Logo area - clean circle -->
        <circle cx="${width/2}" cy="${height/2 - 80}" r="90" fill="rgba(0,255,255,0.05)" stroke="rgba(0,255,255,0.6)" stroke-width="3"/>
        
        <!-- Clean typography -->
        <text x="${width/2}" y="${height/2 + 100}" font-family="Helvetica, Arial, sans-serif" font-size="88" font-weight="800" text-anchor="middle" fill="#ffffff">
          WHALESHARK
        </text>
        
        <!-- Subtitle -->
        <text x="${width/2}" y="${height/2 + 160}" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="400" text-anchor="middle" fill="#b8c5d1">
          The Ocean's Most Powerful Meme Coin
        </text>
        
        <!-- Action text -->
        <text x="${width/2}" y="${height/2 + 220}" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="500" text-anchor="middle" fill="#00ffff">
          🚀 Launching on Pump.fun 🦈
        </text>
        
        <!-- Bottom accent line -->
        <rect x="${width*0.3}" y="${height - 60}" width="${width*0.4}" height="4" fill="url(#accentGradient)" rx="2"/>
        
        <!-- Corner elements -->
        <rect x="${width*0.05}" y="${height*0.05}" width="60" height="4" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.05}" y="${height*0.05}" width="4" height="60" fill="#00ffff" opacity="0.6"/>
        
        <rect x="${width*0.95}" y="${height*0.05}" width="-60" height="4" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.95}" y="${height*0.05}" width="-4" height="60" fill="#00ffff" opacity="0.6"/>
        
        <rect x="${width*0.05}" y="${height*0.95}" width="60" height="-4" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.05}" y="${height*0.95}" width="4" height="-60" fill="#00ffff" opacity="0.6"/>
        
        <rect x="${width*0.95}" y="${height*0.95}" width="-60" height="-4" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.95}" y="${height*0.95}" width="-4" height="-60" fill="#00ffff" opacity="0.6"/>
      </svg>
    `;
    
    // Convert SVG to PNG
    const backgroundBuffer = await sharp(Buffer.from(minimalistSvg))
      .png()
      .toBuffer();
    
    // Load and resize the logo
    const logoBuffer = fs.readFileSync('public/whale-shark-logo.svg');
    const logoResized = await sharp(logoBuffer)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Composite the logo onto the background
    const finalImage = await sharp(backgroundBuffer)
      .composite([{
        input: logoResized,
        top: Math.round((height - 180) / 2) - 80,
        left: Math.round((width - 180) / 2)
      }])
      .png()
      .toBuffer();
    
    // Save the minimalist cover photo
    fs.writeFileSync('facebook-cover-minimalist.png', finalImage);
    
    console.log('✨ Minimalist Facebook cover photo created!');
    console.log('📐 Dimensions: 1640x859 pixels');
    console.log('📁 File: facebook-cover-minimalist.png');
    console.log('✨ Features: Clean design, minimalist approach, professional look');
    
  } catch (error) {
    console.error('Error creating minimalist cover photo:', error);
  }
}

createMinimalistCoverPhoto();
