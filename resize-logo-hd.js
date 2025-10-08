const sharp = require('sharp');
const fs = require('fs');

async function createHighResLogo() {
  try {
    // Read the SVG logo
    const inputBuffer = fs.readFileSync('public/whale-shark-logo.svg');
    
    // Create multiple high-resolution versions
    const sizes = [
      { size: 400, name: 'facebook-400x400.png', description: 'Facebook standard' },
      { size: 800, name: 'facebook-800x800.png', description: 'Facebook high-res' },
      { size: 1024, name: 'facebook-1024x1024.png', description: 'Facebook ultra high-res' },
      { size: 2048, name: 'facebook-2048x2048.png', description: 'Facebook maximum resolution' }
    ];
    
    for (const { size, name, description } of sizes) {
      const outputBuffer = await sharp(inputBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png({ quality: 100 }) // Maximum quality
        .toBuffer();
      
      fs.writeFileSync(name, outputBuffer);
      console.log(`✅ Created ${name} (${size}x${size}) - ${description}`);
    }
    
    console.log('\n🎉 All high-resolution Facebook logos created successfully!');
    console.log('\nRecommended usage:');
    console.log('- 400x400: Standard Facebook profile');
    console.log('- 800x800: High-resolution displays');
    console.log('- 1024x1024: Ultra high-resolution');
    console.log('- 2048x2048: Maximum Facebook resolution');
    
  } catch (error) {
    console.error('Error creating high-res logos:', error);
  }
}

createHighResLogo();
