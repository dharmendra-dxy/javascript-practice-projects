window.addEventListener("mousemove", function(e){
    // console.log(e.clientX);

    let rectangle = document.getElementById("rectangle");
    let rWidth = rectangle.getBoundingClientRect().width;

    let xValue = gsap.utils.mapRange(
        0, 
        window.innerWidth,
        100+ rWidth/2,
        window.innerWidth- (100 + rWidth/2) , 
        e.clientX
        );

    gsap.to("#rectangle", {
        left: xValue + "px",
        ease: Power4,
    });

}, false);