

window.addEventListener('scroll', function() {

    var targetElement = document.getElementById('eligibilitySection');
    var fixedElement = document.getElementById('contact_form');
    var endElement = document.getElementById('faqsSection');
    
    var targetOffset = targetElement.offsetTop;
    var endOffeset = endElement.offsetTop
    console.log("targetOffset",targetOffset,endOffeset);
    console.log("widnow",this.window.scrollY)
  
    if (window.scrollY >= targetOffset-120 && window.scrollY-500 <= endOffeset ) {
        fixedElement.classList.add("fixed");
        fixedElement.classList.add("top-0");
        fixedElement.classList.add("right-11");
        fixedElement.classList.remove("hidden");
        fixedElement.classList.add("block");
    } else  {
        fixedElement.classList.remove("fixed");
        fixedElement.classList.remove("block");
        fixedElement.classList.add("hidden");
        //fixedElement.classList.remove("top-12 right-2");
    }
    
  });


  window.addEventListener("load", function(event) {
    console.log("loaded")
  var loaderDiv = document.getElementById('loaderDiv');

  setTimeout(function(){
    loaderDiv.classList.remove("flex");
  loaderDiv.classList.add("hidden");
  },300);
  
});

 

function questionAnswerHandler(event)
{
    console.log("clicked",event.target.id);
    var currElement = document.getElementById(event.target.id);
    if(currElement.classList.contains("plus"))
    {
        currElement.classList.remove("plus");
        currElement.classList.add("minus");
        currElement.innerHTML ="&#8722;";

        var anwerElement = document.getElementById((event.target.id).replace("question","answer"));
        anwerElement.classList.remove("hidden");
        anwerElement.classList.add("block");



    }
    else if(currElement.classList.contains("minus"))
    {
        currElement.classList.remove("minus");
        currElement.classList.add("plus");
        currElement.innerHTML= "&#65122;";

        
        var anwerElement = document.getElementById((event.target.id).replace("question","answer"));
        anwerElement.classList.remove("block");
        anwerElement.classList.add("hidden");
    }
}