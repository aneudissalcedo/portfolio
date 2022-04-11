// // Paths to the corresponding website pages
var project_01 = "https://aneudissalcedo.github.io/portfolio/pages/project_01.html";
var project_02 = "https://aneudissalcedo.github.io/portfolio/pages/project_02.html";
var project_03 = "https://aneudissalcedo.github.io/portfolio/pages/project_03.html";

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var slides = document.getElementsByClassName("imageBox");
    var dots = document.getElementsByClassName("dot");

    // If n is greater than the length of the array "slides"...
    //...then slideIndex is set to 1
    if (n > slides.length) {slideIndex = 1}; 

    // If n is less than 1, te slideIndex is set to the length of the array "slides"
    if (n < 1) {slideIndex = slides.length};

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (window.location.href == project_01
        || window.location.href == project_02
        || window.location.href == project_03)
    {
        // This displays the image in the slideshow
        slides[slideIndex - 1].style.display = "block";

        // This adds the active styling to the dot associated with the image
        dots[slideIndex - 1].className += " active";
    }

}

// Highlight the link of the current page
document.getElementById("highlightLink").style.color = "#20a58e";


