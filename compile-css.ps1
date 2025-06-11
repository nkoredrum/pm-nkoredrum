# Compile CSS files
$baseDir = "assets\css"

# Base styles
$baseStyles = @(
    "base\variables.css",
    "base\base.css"
)

# Layout styles
$layoutStyles = @(
    "layout\layout.css"
)

# Component styles
$componentStyles = @(
    "components\button.css",
    "components\card.css",
    "components\form.css"
)

# Page styles
$pageStyles = @(
    "pages\home.css",
    "pages\post.css",
    "pages\contact.css"
)

# Utilities
$utilities = "base\utilities.css"

# Create main.css by combining all styles
$mainCss = @()
$mainCss += $baseStyles
$mainCss += $layoutStyles
$mainCss += $componentStyles
$mainCss += $pageStyles

# Read and combine all files
$cssContent = ""
foreach ($file in $mainCss) {
    $path = Join-Path $baseDir $file
    if (Test-Path $path) {
        $cssContent += Get-Content $path -Raw
        $cssContent += "`n"
    }
}

# Write to main.css
$mainPath = Join-Path $baseDir "main.css"
$cssContent | Set-Content $mainPath -Encoding UTF8

# Copy utilities separately
$utilitiesPath = Join-Path $baseDir $utilities
Copy-Item $utilitiesPath -Destination "$baseDir\utilities.css" -Force
