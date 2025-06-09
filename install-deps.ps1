# Install Ruby dependencies
Write-Host "Installing Ruby dependencies..."
bundle install

# Install Node dependencies
Write-Host "Installing Node dependencies..."
npm install

# Clean up
Write-Host "Cleaning up..."
rm -rf _site
rm -rf .jekyll-cache
rm -rf .bundle

Write-Host "Dependencies installed successfully!"
