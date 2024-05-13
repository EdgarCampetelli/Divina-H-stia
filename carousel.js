const controls = document.querySelectorAll('.control');
let currentItem =0;
const item = document.querySelectorAll('.item');
const maxItem = item.length;

console.log(currentItem)
console.log(maxItem)

controls.forEach(control =>{
    control.addEventListener('click', 
    ()=>{
        const isLeft = control.classList.contains("arrow-left")
        if(isLeft){
            currentItem -= 1
        }else{
            currentItem += 1  
        }
        
        if(currentItem >= maxItem){
            currentItem = 0
        }
        if(currentItem < 0){
            currentItem = maxItem - 1
        }
        
        item.forEach((item)=> item.classList.remove("current-item"));
        item[currentItem].scrollIntoView({
            inline :"center",
            behavior : "smooth",
            block: "nearest"
        })

        item[currentItem].classList.add("current-item")
    })
})


