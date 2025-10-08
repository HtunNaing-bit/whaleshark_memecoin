const sharp = require('sharp');
const fs = require('fs');

async function createPremiumCoverPhoto() {
  try {
    // Facebook cover photo dimensions: 1640x859 (maximum)
    const width = 1640;
    const height = 859;
    
    // Create an even more stunning cover with multiple elements
    const premiumSvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Multiple gradients for depth -->
          <linearGradient id="bgMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f0f0f;stop-opacity:1" />
            <stop offset="30%" style="stop-color:#0a1a0a;stop-opacity:1" />
            <stop offset="70%" style="stop-color:#0f0f0f;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0a0f0a;stop-opacity:1" />
          </linearGradient>
          
          <radialGradient id="glow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" style="stop-color:rgba(0,255,255,0.15);stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgba(0,255,255,0.05);stop-opacity:1" />
            <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
          </radialGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
            <stop offset="25%" style="stop-color:#ff6b9d;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="75%" style="stop-color:#00ff88;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#ff6b9d;stop-opacity:0.6" />
          </linearGradient>
          
          <!-- Grid pattern -->
          <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>
          </pattern>
          
          <!-- Dot pattern -->
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="rgba(0,255,255,0.1)"/>
          </pattern>
        </defs>
        
        <!-- Background layers -->
        <rect width="100%" height="100%" fill="url(#bgMain)"/>
        <rect width="100%" height="100%" fill="url(#glow)"/>
        <rect width="100%" height="100%" fill="url(#gridPattern)"/>
        <rect width="100%" height="100%" fill="url(#dotPattern)"/>
        
        <!-- Central logo area with multiple glow rings -->
        <circle cx="${width/2}" cy="${height/2 - 80}" r="140" fill="none" stroke="rgba(0,255,255,0.2)" stroke-width="1"/>
        <circle cx="${width/2}" cy="${height/2 - 80}" r="120" fill="none" stroke="rgba(0,255,255,0.3)" stroke-width="2"/>
        <circle cx="${width/2}" cy="${height/2 - 80}" r="100" fill="none" stroke="rgba(0,255,255,0.4)" stroke-width="2"/>
        
        <!-- Main title with enhanced styling -->
        <text x="${width/2}" y="${height/2 + 80}" font-family="Inter, sans-serif" font-size="84" font-weight="900" text-anchor="middle" fill="url(#textGradient)" stroke="rgba(0,0,0,0.3)" stroke-width="1">
          WHALESHARK
        </text>
        
        <!-- Subtitle with glow effect -->
        <text x="${width/2}" y="${height/2 + 130}" font-family="Inter, sans-serif" font-size="36" font-weight="700" text-anchor="middle" fill="#b8c5d1" stroke="rgba(0,255,255,0.2)" stroke-width="0.5">
          The Ocean's Most Powerful Meme Coin
        </text>
        
        <!-- Action text with accent -->
        <text x="${width/2}" y="${height/2 + 200}" font-family="Inter, sans-serif" font-size="28" font-weight="600" text-anchor="middle" fill="url(#accentGradient)">
          🚀 Launching on Pump.fun | Join the Pod! 🦈
        </text>
        
        <!-- Decorative elements with animation-like positioning -->
        <circle cx="${width/2 - 250}" cy="${height/2 - 120}" r="4" fill="rgba(0,255,255,0.7)"/>
        <circle cx="${width/2 + 250}" cy="${height/2 - 120}" r="4" fill="rgba(0,255,255,0.7)"/>
        <circle cx="${width/2 - 350}" cy="${height/2 - 20}" r="3" fill="rgba(255,107,157,0.6)"/>
        <circle cx="${width/2 + 350}" cy="${height/2 - 20}" r="3" fill="rgba(255,107,157,0.6)"/>
        <circle cx="${width/2 - 200}" cy="${height/2 + 40}" r="2" fill="rgba(139,92,246,0.5)"/>
        <circle cx="${width/2 + 200}" cy="${height/2 + 40}" r="2" fill="rgba(139,92,246,0.5)"/>
        
        <!-- Bottom accent lines -->
        <line x1="${width/2 - 400}" y1="${height - 100}" x2="${width/2 + 400}" y2="${height - 100}" stroke="rgba(0,255,255,0.4)" stroke-width="3"/>
        <line x1="${width/2 - 300}" y1="${height - 80}" x2="${width/2 + 300}" y2="${height - 80}" stroke="rgba(255,107,157,0.3)" stroke-width="2"/>
        
        <!-- Corner accents -->
        <rect x="50" y="50" width="100" height="2" fill="rgba(0,255,255,0.3)" transform="rotate(45 100 51)"/>
        <rect x="${width-150}" y="50" width="100" height="2" fill="rgba(0,255,255,0.3)" transform="rotate(-45 ${width-100} 51)"/>
        <rect x="50" y="${height-150}" width="100" height="2" fill="rgba(0,255,255,0.3)" transform="rotate(-45 100 ${height-100})"/>
        <rect x="${width-150}" y="${height-150}" width="100" height="2" fill="rgba(0,255,255,0.3)" transform="rotate(45 ${width-100} ${height-100})"/>
      </svg>
    `;
    
    // Convert SVG to PNG
    const backgroundBuffer = await sharp(Buffer.from(premiumSvg))
      .png()
      .toBuffer();
    
    // Load and resize the logo
    const logoBuffer = fs.readFileSync('public/whale-shark-logo.svg');
    const logoResized = await sharp(logoBuffer)
      .resize(240, 240, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Composite the logo onto the background
    const finalImage = await sharp(backgroundBuffer)
      .composite([{
        input: logoResized,
        top: Math.round((height - 240) / 2) - 120,
        left: Math.round((width - 240) / 2)
      }])
      .png()
      .toBuffer();
    
    // Save the premium cover photo
    fs.writeFileSync('facebook-cover-premium.png', finalImage);
    
    console.log('🌟 Premium Facebook cover photo created!');
    console.log('📐 Dimensions: 1640x859 pixels (Facebook maximum)');
    console.log('📁 File: facebook-cover-premium.png');
    console.log('✨ Features: Enhanced gradients, multiple glow effects, decorative elements');
    
  } catch (error) {
    console.error('Error creating premium cover photo:', error);
  }
}

createPremiumCoverPhoto();
