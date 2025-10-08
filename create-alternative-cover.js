const sharp = require('sharp');
const fs = require('fs');

async function createAlternativeCoverPhoto() {
  try {
    const width = 1640;
    const height = 859;
    
    // Create a completely different design - more modern and dynamic
    const alternativeSvg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Ocean-inspired gradient -->
          <linearGradient id="oceanBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#001122;stop-opacity:1" />
            <stop offset="25%" style="stop-color:#003366;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#006699;stop-opacity:1" />
            <stop offset="75%" style="stop-color:#003366;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#001122;stop-opacity:1" />
          </linearGradient>
          
          <!-- Wave pattern -->
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgba(0,255,255,0.1);stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgba(0,255,255,0.3);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(0,255,255,0.1);stop-opacity:1" />
          </linearGradient>
          
          <!-- Neon text gradient -->
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00ffff;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00ffff;stop-opacity:1" />
          </linearGradient>
          
          <!-- Glow effect -->
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#oceanBg)"/>
        
        <!-- Wave patterns -->
        <path d="M0,${height*0.3} Q${width*0.25},${height*0.2} ${width*0.5},${height*0.3} T${width},${height*0.3} L${width},${height} L0,${height} Z" fill="url(#waveGradient)" opacity="0.6"/>
        <path d="M0,${height*0.5} Q${width*0.25},${height*0.4} ${width*0.5},${height*0.5} T${width},${height*0.5} L${width},${height} L0,${height} Z" fill="url(#waveGradient)" opacity="0.4"/>
        <path d="M0,${height*0.7} Q${width*0.25},${height*0.6} ${width*0.5},${height*0.7} T${width},${height*0.7} L${width},${height} L0,${height} Z" fill="url(#waveGradient)" opacity="0.3"/>
        
        <!-- Central content area with modern card design -->
        <rect x="${width*0.15}" y="${height*0.15}" width="${width*0.7}" height="${height*0.7}" rx="30" fill="rgba(0,0,0,0.3)" stroke="rgba(0,255,255,0.5)" stroke-width="3"/>
        
        <!-- Logo area with modern frame -->
        <circle cx="${width/2}" cy="${height/2 - 100}" r="80" fill="rgba(0,255,255,0.1)" stroke="rgba(0,255,255,0.8)" stroke-width="4"/>
        <circle cx="${width/2}" cy="${height/2 - 100}" r="60" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        
        <!-- Modern typography -->
        <text x="${width/2}" y="${height/2 + 80}" font-family="Arial, sans-serif" font-size="96" font-weight="900" text-anchor="middle" fill="url(#neonGradient)" filter="url(#glow)">
          WHALESHARK
        </text>
        
        <!-- Subtitle with modern styling -->
        <text x="${width/2}" y="${height/2 + 140}" font-family="Arial, sans-serif" font-size="32" font-weight="600" text-anchor="middle" fill="#ffffff" opacity="0.9">
          THE OCEAN'S MOST POWERFUL MEME COIN
        </text>
        
        <!-- Modern action text -->
        <text x="${width/2}" y="${height/2 + 200}" font-family="Arial, sans-serif" font-size="24" font-weight="500" text-anchor="middle" fill="#00ffff" opacity="0.8">
          🚀 LAUNCHING ON PUMP.FUN 🦈
        </text>
        
        <!-- Modern decorative elements -->
        <rect x="${width*0.1}" y="${height*0.1}" width="4" height="60" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.9}" y="${height*0.1}" width="4" height="60" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.1}" y="${height*0.9}" width="4" height="60" fill="#00ffff" opacity="0.6"/>
        <rect x="${width*0.9}" y="${height*0.9}" width="4" height="60" fill="#00ffff" opacity="0.6"/>
        
        <!-- Corner accents -->
        <polygon points="${width*0.05},${height*0.05} ${width*0.15},${height*0.05} ${width*0.15},${height*0.15}" fill="#00ffff" opacity="0.4"/>
        <polygon points="${width*0.95},${height*0.05} ${width*0.85},${height*0.05} ${width*0.85},${height*0.15}" fill="#00ffff" opacity="0.4"/>
        <polygon points="${width*0.05},${height*0.95} ${width*0.15},${height*0.95} ${width*0.15},${height*0.85}" fill="#00ffff" opacity="0.4"/>
        <polygon points="${width*0.95},${height*0.95} ${width*0.85},${height*0.95} ${width*0.85},${height*0.85}" fill="#00ffff" opacity="0.4"/>
        
        <!-- Floating particles -->
        <circle cx="${width*0.2}" cy="${height*0.3}" r="3" fill="#00ffff" opacity="0.6"/>
        <circle cx="${width*0.8}" cy="${height*0.3}" r="3" fill="#00ffff" opacity="0.6"/>
        <circle cx="${width*0.3}" cy="${height*0.7}" r="2" fill="#ffffff" opacity="0.4"/>
        <circle cx="${width*0.7}" cy="${height*0.7}" r="2" fill="#ffffff" opacity="0.4"/>
        <circle cx="${width*0.1}" cy="${height*0.5}" r="2" fill="#00ffff" opacity="0.5"/>
        <circle cx="${width*0.9}" cy="${height*0.5}" r="2" fill="#00ffff" opacity="0.5"/>
      </svg>
    `;
    
    // Convert SVG to PNG
    const backgroundBuffer = await sharp(Buffer.from(alternativeSvg))
      .png()
      .toBuffer();
    
    // Load and resize the logo
    const logoBuffer = fs.readFileSync('public/whale-shark-logo.svg');
    const logoResized = await sharp(logoBuffer)
      .resize(160, 160, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // Composite the logo onto the background
    const finalImage = await sharp(backgroundBuffer)
      .composite([{
        input: logoResized,
        top: Math.round((height - 160) / 2) - 100,
        left: Math.round((width - 160) / 2)
      }])
      .png()
      .toBuffer();
    
    // Save the alternative cover photo
    fs.writeFileSync('facebook-cover-alternative.png', finalImage);
    
    console.log('🌊 Alternative Facebook cover photo created!');
    console.log('📐 Dimensions: 1640x859 pixels');
    console.log('📁 File: facebook-cover-alternative.png');
    console.log('✨ Features: Ocean theme, modern card design, wave patterns');
    
  } catch (error) {
    console.error('Error creating alternative cover photo:', error);
  }
}

createAlternativeCoverPhoto();
