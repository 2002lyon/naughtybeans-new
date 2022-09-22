const counter = document.querySelectorAll('.counter');

counter.forEach(counter =>{
    counter.innerText = "0";

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target');
        
        const c = +counter.innerText;

        const increment = target/1000;
      
        if( c < target) {
            counter.innerText = `${Math.ceil( c + increment)}`;
            setTimeout(updateCounter, 5);
        }
        else{
            counter.innerText = target;
        }
    };
    updateCounter();
});


const mobile = document.querySelector("#mobile");

mobile.onclick = function() {
    const links = document.querySelector(".links");
    links.classList.toggle("active");
        
}

const close = document.querySelector(".close");

close.onclick = function () {

    const links = document.querySelector(".links");
    links.classList.remove("active");
}

document.addEventListener('keydown', function(e){
    const links = document.querySelector(".links");
    if(e.key === 'Escape') {
        if(!links.classList.contains('active')){
            links.classList.remove("active");
            console.log(e.key);
        }
    }

})

window.addEventListener("scroll", function (){ 
    const navbar = document.querySelector("#navigation");
    navbar.classList.toggle("sticky", window.scrollY > 0)
})