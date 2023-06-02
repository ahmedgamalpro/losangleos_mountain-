// slider images
var sliderImages = Array.from(document.querySelectorAll('.carousel img'));
var Dots = Array.from(document.querySelectorAll('.dot span'));
var slideCount = sliderImages.length;
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var currentSlide = 1;

next.onclick = nextSlide;
prev.onclick = prevSlide;
theChecker()
function nextSlide(){
    if(next.classList.contains("displed")){
        return false
    }else{
        currentSlide++;
        theChecker();
    }
}
function prevSlide(){
    if(prev.classList.contains("displed")){
        return false
    }else{
        currentSlide--;
        theChecker();
    }
}

// create checker function

function theChecker(){
    
    removeAllAcrive()
    sliderImages[currentSlide - 1].classList.add('active')
    Dots[currentSlide - 1].classList.add('active')
}


// remove all active classes


function removeAllAcrive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active')
    })
    Dots.forEach(function(dot){
        dot.classList.remove('active')
    })
    // check if current slide is frist 
    if(currentSlide == 1){
        //  add displed class to prev button
        prev.classList.add('displed')
    }else{
        // remove displed class to prev button
        prev.classList.remove('displed')
    }

    // check if current class is last
    if(currentSlide == slideCount){
         //  add displed class to next button
            next.classList.add('displed')
        }else{
            // remove displed class to next button
            next.classList.remove('displed')
        }
}