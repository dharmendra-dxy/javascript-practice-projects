const rectangle = document.querySelector("#rectangle");

rectangle.addEventListener("mousemove", function(e){

    let rectLocation = rectangle.getBoundingClientRect();
    // console.log(rectLocation);

    let insideVlaue = Math.floor(e.clientX - rectLocation.left);

    if(insideVlaue < rectLocation.width/2){
        
        // using gsap:
        let redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideVlaue);
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })


    }
    else{
        // using gsap:
        let blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width, 0, 255, insideVlaue);
        
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }

}, false);


// gsap maprange: -> gsap.utils.mapRange(inMin, inMax, outMin, outMax, valueToMap)


rectangle.addEventListener("mouseleave", function(){

    gsap.to(rectangle, {
        backgroundColor: "white",
    })

}, false);