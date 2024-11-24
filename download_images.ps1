$imageUrls = @{
    # Project Images
    "images/projects/ecommerce.jpg" = "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200"
    "images/projects/taskmanager.jpg" = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200"
    "images/projects/weather.jpg" = "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200"
    "images/projects/portfolio.jpg" = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200"
    
    # Skills Images
    "images/skills/coding.jpg" = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
    "images/skills/webdev.jpg" = "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200"
    
    # Background Images
    "images/background/hero-bg.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
    "images/background/contact-bg.jpg" = "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1920"
}

foreach ($imagePath in $imageUrls.Keys) {
    $url = $imageUrls[$imagePath]
    $fullPath = Join-Path $PSScriptRoot $imagePath
    
    Write-Host "Downloading: $url to $fullPath"
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.DownloadFile($url, $fullPath)
        Write-Host "Successfully downloaded: $imagePath"
    }
    catch {
        Write-Host "Failed to download: $imagePath"
        Write-Host $_.Exception.Message
    }
}
