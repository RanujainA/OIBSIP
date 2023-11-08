var tl=gsap.timeline();
function time(){
    var a=0;
    setInterval(function(){
        a+=Math.floor(Math.random()*20);
        if(a<100){
            document.querySelector("#loader h1").innerHTML=a + "%";
        }else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a + "%";
        }
    },150);
}
tl.to("#loader h1",{
    scale:2,
    duration:2,
    onStart:time
});
tl.to("#loader",{
    top:"-100vh",
    duration:3
});
tl.from("#nav h1,#nav1 h3",{
    y:-200,
});
tl.from("#nav #images2,#main #img",{
    scale:0,
    rotate:360,
});
tl.from("#main h1",{
    x:-800,
    delay:0.5
});

    