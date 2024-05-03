// Registering the ScrollTrigger plugin
 
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
  const imgHolderHeight = window.innerHeight; 

  const totalBodyHeight = contentHolderHeight + imgHolderHeight;

   document.body.style.height = `${totalBodyHeight}px`;
 });

// Animations ..

  ScrollTrigger.create({
    trigger: ".website-content",
    start:"-0.1% top",
    end:"bottom bottom",
    onEnter: ()=> {
      
      gsap.set(".website-content", {position:'absolute', top:"1%"});

    },
    onLeaveBack: ()=> {

      gsap.set(".header", {position:'fixed', top:'50%'});
    } 
    });

    gsap.to(".header .letters:first-child", {
      x: ()=> -innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 2
      }
  });

    gsap.to(".header .letters:last-child", {
      x: ()=> innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 2
      }
  });

window.addEventListener("scroll", (event)=>{
    
    const header = document.querySelector(".header");
    if(window.scrollY >= parseInt(document.body.style.height)/2){
      header.style.display = "none";
      }
     if(window.scrollY < parseInt(document.body.style.height)/2){
      header.style.display = "flex";
       }
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const rowElements = document.querySelectorAll(".row");
console.log(rowElements);
rowElements.forEach((element)=> observer.observe(element));


