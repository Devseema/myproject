const slides=document.querySelectorAll('.slide');
var counter=0;
slides.forEach(
    (slide,index)=>{
        // console.log(slide,index);
        slide.style.left = `${index*100}%`
    }
)
// ``=backtics

const goNext = () =>{
 counter++
 //0,1,2,3
 if(counter==slides.length){
    counter=0;
 }
 slideImage()
}
const goPrev = () =>{
    // 4,3,2,1,0
    if(counter<0){
       counter= slides.length-1;
    }
 counter--
 slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide)=>{
            console.log(slide,counter);
            // slide.style.transform = 'transalteX(-${counter * 100}%)'
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}
