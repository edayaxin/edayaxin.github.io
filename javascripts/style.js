function filterSelection(c) {
  var x, i, url;

  url=window.location.href;

  if (url.indexOf("index.html")>=0 || url.indexOf(".html")<0) {
    x = document.getElementsByClassName("filterDiv");

    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      // add show to targeted class
      if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }    
    var btnContainer = document.getElementById("menu");
    var btns = btnContainer.getElementsByClassName("menuBtn");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length != 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }

  } 
}

function subFilterSelection(c){
    setCookie("filterDiv", c, 1);
    window.open("index.html", '_self').close();
}

function openPage(filename) {
  // window.open(filename,'_self').close();
  window.open(filename,'_self');

}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
        if (c.indexOf(name)  == 0) {
            return c.substring(name.length, c.length);
         }
    }
    return "";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (slides.length > 0 && dots) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log("debug", slides)
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}

var slideDotIndex = 1;
showDotSlides(slideDotIndex);

// Next/previous controls
function plusDotSlides(n) {
  showDotSlides(slideDotIndex += n);
}

// Thumbnail image controls
function currentDotSlide(n) {
  showDotSlides(slideDotIndex = n);
}

function showDotSlides(n) {
  var i;
  var slides = document.getElementsByClassName("dotSlides");
  var dots = document.getElementsByClassName("dot_dot");

  if (slides.length > 0 && dots) {
    if (n > slides.length) {slideDotIndex = 1}
    if (n < 1) {slideDotIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideDotIndex-1].style.display = "block";
    dots[slideDotIndex-1].className += " active";
  }

}



// alert(window.location.href.pathname.match(//([^/?#]+)$/i) || [,''])[1];
// var myURL = parseURL(window.location.href)
// alert(myURL.file)
// alert(window.location.href)


