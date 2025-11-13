const center =  document.getElementById("center");

// Throttling Function
const throttleFunction = (func, delay) => {
     
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        // console.log(now - prev, delay);

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

center.addEventListener("mousemove", throttleFunction((e) => {
        // less repetition code:
        
        let div = document.createElement("div");
        div.classList.add("imagediv");

        // console.log(e.clientX, e.clientY);
        div.style.left = e.clientX+"px" ;
        div.style.top = e.clientY+"px";

        // creating img:
        let img = document.createElement("img");
        img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1685082608788-b531fd972c64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

        div.appendChild(img);
        document.body.appendChild(div);

        // using gsap:
        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: 0.6,
        });

        gsap.to(img, {
            y: "100%",
            delay: 0.6,
            ease: Power2
        });


        // setTimeout for removing div in 3sec:
        setTimeout(function(){
            div.remove();
        }, 3000);

}, 500));


