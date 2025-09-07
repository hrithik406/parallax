// document.addEventListener('DOMContentLoaded', () => {
//   const htmlElement = document.getElementById('img');
//   // Set initial background image and properties
//   htmlElement.style.backgroundImage = 'url("src/moon.png")'; // Replace with your image URL
//   htmlElement.style.backgroundSize = '0%'; // Initial scale
//   htmlElement.style.backgroundPosition = 'center';
//   htmlElement.style.backgroundRepeat = 'no-repeat';
//   htmlElement.style.backgroundAttachment = 'fixed'; // Fixed background for smooth effect

//   // Handle scroll event
//   window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
    
//     // Calculate scale based on scroll position (100% to 150% scale)
//     const maxScale = 100; // Maximum scale in percentage
//     const minScale = 150; // Minimum scale in percentage
//     const scrollFraction = scrollPosition / (documentHeight - windowHeight);
//     const scale = minScale + (maxScale - minScale) * scrollFraction;
    
//     // Apply the scale to background-size
//     htmlElement.style.backgroundSize = `${scale}%`;
//   });
// });

window.addEventListener('scroll', function() {
    const image = document.querySelector('#img');
    if (!image) return;

    // Get the scroll position
    const scrollPosition = window.scrollY;
    
    // Define maximum and minimum scale
    const maxScale = 1; // Original size
    const minScale = 0.1; // Minimum size (50% of original)
    
    // Calculate scale based on scroll position (adjust 500 to control shrink speed)
    const scale = Math.max(minScale, maxScale - (scrollPosition / 500));
    
    // Apply the scale transform to the image
    image.style.transform = `scale(${scale})`;
    
    // Optional: Adjust opacity for a fading effect
    // const opacity = Math.max(0.5, 1 - (scrollPosition / 1000));
    // image.style.opacity = opacity;

    
});

// Ensure the image stays centered and transitions smoothly
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('#img');
    if (image) {
        image.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out';
        image.style.transformOrigin = 'center center';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'make-invisible'
    const elements = document.querySelectorAll('.make-invisible');

    // Apply smooth transition to all targeted elements
    elements.forEach(element => {
        element.style.transition = 'opacity 0.2s ease';
    });

    // Handle scroll event
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const startFade = 10; // Scroll position where fading starts
        const endFade = 300; // Scroll position where elements are fully invisible

        elements.forEach(element => {
            if (scrollPosition >= endFade) {
                // Fully invisible
                element.style.opacity = '0';
                element.style.visibility = 'hidden';
            } else if (scrollPosition >= startFade) {
                // Calculate opacity based on scroll position
                const fadeRange = endFade - startFade;
                const opacity = 1 - (scrollPosition - startFade) / fadeRange;
                element.style.opacity = opacity.toFixed(2);
                element.style.visibility = 'visible';
            } else {
                // Fully visible
                element.style.opacity = '1';
                element.style.visibility = 'visible';
            }
        });
    });
});