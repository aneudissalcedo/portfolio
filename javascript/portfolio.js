// // Paths to the corresponding website pages
// var defaultPage = "https://aneudissalcedo.github.io/portfolio";
// var index = "https://aneudissalcedo.github.io/portfolio/index.html";
// var about = "https://aneudissalcedo.github.io/portfolio/pages/about.html";
// var contact = "https://aneudissalcedo.github.io/portfolio/pages/contact.html";
// var project_01 = "https://aneudissalcedo.github.io/portfolio/pages/project_01.html";
// var project_02 = "https://aneudissalcedo.github.io/portfolio/pages/project_02.html";
// var project_03 = "https://aneudissalcedo.github.io/portfolio/pages/project_03.html";

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

document.getElementById("highlightLink").style.color = "#20a58e";
// Highlight the link of the current page
// switch(window.location.href)
// {
//     case defaultPage:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;
//     case index:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     case about:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     case contact:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     case project_01:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     case project_02:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     case project_03:
//         document.getElementById("highlightLink").style.color = "#20a58e";
//         break;

//     default:
//         console.log("Current page not found!");
//         break;
// }



























