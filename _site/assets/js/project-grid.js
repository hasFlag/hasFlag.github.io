/*
This script initialized the masonry layout.

Dependencies:
* Masonry: https://github.com/desandro/masonry
* Images Loaded: https://github.com/desandro/imagesloaded

Since we load some images, we need to trigger the masonry layout after each image has loaded.
This is done via the "Images Loaded" script.
*/

// Get all project teasers
let projectTeasers = document.querySelectorAll('.project-grid__teaser');

// Set the listener to all images in "projectTeasers", execute Masonry each time an image is loaded.
imagesLoaded(projectTeasers, initializeMasonry);

// Initialize the layout with Masonry
function initializeMasonry() {
    // Set the helper element ".project-grid__gutter-sizer" visible again.
    // It is set to "display: none" for no-js users.
    document.querySelector('.project-grid__gutter-sizer').style.display = "block";

    let msnry = new Masonry( '.project-grid__teaserlist', {
        itemSelector: '.project-grid__teaser',
        columnWidth: '.project-grid__teaser',
        gutter: '.project-grid__gutter-sizer',
        transitionDuration: 0
    });
}