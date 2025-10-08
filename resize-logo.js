const sharp = require('sharp');
const fs = require('fs');

async function resizeLogo() {
  try {
    // Read the SVG logo
    const inputBuffer = fs.readFileSync('whale-shark-logo.svg');
    
    // Convert SVG to PNG and resize to 400x400 for Facebook
    const outputBuffer = await sharp(inputBuffer)
      .resize(400, 400, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .png()
      .toBuffer();
    
    // Save the resized logo
    fs.writeFileSync('whale-shark-logo-facebook-400x400.png', outputBuffer);
    
    console.log('Successfully created Facebook-optimized logo (400x400)');
    console.log('File saved as: whale-shark-logo-facebook-400x400.png');
    
  } catch (error) {
    console.error('Error resizing logo:', error);
  }
}

resizeLogo();
