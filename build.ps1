# Build script for Netlify

# Set environment variables
Write-Host "Setting environment variables..."
$env:JEKYLL_ENV = "production"

# Clean up
Write-Host "Cleaning up..."
rm -rf _site
rm -rf .jekyll-cache

# Build the site
Write-Host "Building Jekyll site..."
bundle exec jekyll build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Error "Jekyll build failed"
    exit 1
}

Write-Host "Build completed successfully!"
