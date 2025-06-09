# Build script for Netlify

# Set environment variables
Write-Host "Setting environment variables..."
$env:JEKYLL_ENV = "production"

# Clean up
Write-Host "Cleaning up..."
Remove-Item -Path _site -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path .jekyll-cache -Recurse -Force -ErrorAction SilentlyContinue

# Build the site
Write-Host "Building Jekyll site..."
try {
    bundle exec jekyll build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Jekyll build failed with exit code $LASTEXITCODE"
        exit 1
    }
} catch {
    Write-Error "An error occurred: $_"
    exit 1
}

Write-Host "Build completed successfully!"
exit 0
