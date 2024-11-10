document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.onerror = null; // Prevents infinite loop if default image is missing
        this.src = 'images/profiles/default_image.jpg';
        this.alt = "";
    };
});

// Open the lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Show the image in the lightbox
function showImage(src) {
    document.getElementById("lightbox-img").src = src;
}

// Add event listener to all links with data-lightbox attribute
document.querySelectorAll('a[data-lightbox="gallery"]').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        openLightbox();
        showImage(item.href);
    });
});

// Close the lightbox when clicking the close button
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

// Close the lightbox when clicking outside of the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});