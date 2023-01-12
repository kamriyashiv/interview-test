
// menu hide show
$(document).ready(()=>{
    
    $('#closeBtn').click(function () {
        $('.menuView').slideUp(500);
        event.stopPropagation();
    })

    $('#menuBTN').click(function () {
        $('.menuView').slideDown(500);
        event.stopPropagation();
    })
});

window.addEventListener('load',()=>{
    aniboxes();    
});

// animation onscroll
window.addEventListener("scroll", aniboxes);
function aniboxes(){
    let AniBox = document.querySelectorAll(".AniBox");    
    for(let i =0; i<AniBox.length;i++){
        let trigerBtn = window.innerHeight /5*4;
        let boxTop = AniBox[i].getBoundingClientRect().top;
        let boxPoint = 150;
        if(boxTop < trigerBtn){
            AniBox[i].classList.add("AniBoxShow");
        }else{
            AniBox[i].classList.remove("AniBoxShow");
        }
    }   
}

//onscroll - Header Sticky
window.onscroll = function() {myFunction()};	
let sticky = headerA.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headerA.classList.add("sticky");
  } else {
    headerA.classList.remove("sticky");
    headerA.style.transition="1s";
  }
}