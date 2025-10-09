# 🚀 GitHub Deployment Guide for WhaleShark

## Step 1: Prepare Your Repository

### Initialize Git (if not already done)
```bash
cd "/Users/htun_naing_mac/Desktop/Crypto coins/$whaleshark"
git init
```

### Add all files to Git
```bash
git add .
git commit -m "Initial commit: WhaleShark DeFi website with 3D animations"
```

## Step 2: Connect to GitHub

### Option A: Replace Existing Repository
```bash
# Add your existing GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Force push to replace existing content
git push -f origin main
```

### Option B: Create New Repository
```bash
# Create new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/whaleshark.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

### Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Build and Deploy
```bash
# Install gh-pages for deployment
npm install --save-dev gh-pages

# Add deploy script to package.json (already included)
# "deploy": "gh-pages -d build"

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Step 4: Configure Custom Domain

### Add CNAME file
```bash
# Create CNAME file in public folder
echo "yourdomain.com" > public/CNAME
```

### Update package.json homepage
```json
{
  "homepage": "https://yourdomain.com"
}
```

### GitHub Repository Settings
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Custom domain", enter your domain
4. Check "Enforce HTTPS"

### DNS Configuration
Add these DNS records to your domain provider:

**For Apex Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## Step 5: Environment Variables (Optional)

Create `.env` file for environment-specific settings:
```bash
# .env
REACT_APP_SITE_URL=https://yourdomain.com
REACT_APP_TELEGRAM_URL=https://t.me/whaleshark_coin
```

## Step 6: Automated Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## Step 7: Final Steps

1. **Commit and push changes:**
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

2. **Wait for deployment** (usually 5-10 minutes)

3. **Test your site:**
   - GitHub Pages URL: `https://YOUR_USERNAME.github.io/REPO_NAME`
   - Custom domain: `https://yourdomain.com`

## Troubleshooting

### Common Issues:
- **404 Error**: Check if `homepage` in package.json matches your repository name
- **Build Fails**: Ensure all dependencies are installed with `npm install`
- **Custom Domain Not Working**: Verify DNS settings and wait for propagation (up to 24 hours)

### Useful Commands:
```bash
# Check build locally
npm run build
npx serve -s build

# Check deployment status
npm run deploy

# Force rebuild
rm -rf build
npm run build
npm run deploy
```

## Your Deployment URLs:
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/REPO_NAME`
- **Custom Domain**: `https://yourdomain.com`

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name.
