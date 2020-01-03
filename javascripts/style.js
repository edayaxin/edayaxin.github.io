filterSelection("all")

function filterSelection(c) {
  var x, i, url;

  url=window.location.href;

  if (url.indexOf("index.html")>=0) {
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
    window.open("index.html");
    setCookie("filterDiv", c, 1);
}

function openPage(filename) {
  window.open(filename);
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


// alert(window.location.href.pathname.match(//([^/?#]+)$/i) || [,''])[1];
// var myURL = parseURL(window.location.href)
// alert(myURL.file)
// alert(window.location.href)


