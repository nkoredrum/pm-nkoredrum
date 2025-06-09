# Post-processing script for Jekyll build

# Set error action preference
$ErrorActionPreference = "Stop"

# Function to log messages
function Write-Log {
    param([string]$Message)
    Write-Host "[Post-Process] $Message"
}

# Verify build directory exists
Write-Log "Verifying build directory"
if (-not (Test-Path "_site")) {
    Write-Error "Build directory '_site' not found"
    exit 1
}

# Clean up unnecessary files
Write-Log "Cleaning up unnecessary files"
Remove-Item -Path "_site\.jekyll-cache" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "_site\.bundle" -Recurse -Force -ErrorAction SilentlyContinue

# Optimize images if imagemagick is available
Write-Log "Checking for image optimization tools"
if (Get-Command "convert" -ErrorAction SilentlyContinue) {
    Write-Log "Optimizing images"
    Get-ChildItem "_site" -Recurse -Filter "*.jpg","*.jpeg","*.png" | ForEach-Object {
        $imagePath = $_.FullName
        try {
            Write-Log "Optimizing $imagePath"
            convert $imagePath -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $imagePath
        } catch {
            Write-Warning "Failed to optimize $imagePath"
        }
    }
}

# Minify CSS and JS
Write-Log "Minifying CSS and JS"
if (Get-Command "uglify-js" -ErrorAction SilentlyContinue) {
    # Minify JavaScript
    Get-ChildItem "_site" -Recurse -Filter "*.js" | ForEach-Object {
        $jsPath = $_.FullName
        try {
            Write-Log "Minifying $jsPath"
            uglify-js $jsPath -o $jsPath --compress --mangle
        } catch {
            Write-Warning "Failed to minify $jsPath"
        }
    }
}

# Create sitemap.xml if not exists
Write-Log "Ensuring sitemap.xml exists"
if (-not (Test-Path "_site/sitemap.xml")) {
    Write-Log "Creating sitemap.xml"
    $sitemap = "<?xml version=""1.0"" encoding=""UTF-8""?>`n<urlset xmlns=""http://www.sitemaps.org/schemas/sitemap/0.9"">`n"
    
    # Add all pages to sitemap
    Get-ChildItem "_site" -Recurse -Filter "*.html" | ForEach-Object {
        $url = $_.FullName.Replace("_site\", "")
        $sitemap += "  <url>`n    <loc>$url</loc>`n    <changefreq>monthly</changefreq>`n    <priority>0.8</priority>`n  </url>`n"
    }
    
    $sitemap += "</urlset>"
    
    $sitemap | Out-File -FilePath "_site/sitemap.xml" -Encoding UTF8
}

Write-Log "Post-processing completed successfully!"
