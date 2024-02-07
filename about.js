import {motto, panelBackgrounds} from "./aboutImages.js";


export const about=()=>{
    console.log('mukodik')
    motto.split(" ").forEach((word)=>{
        document.querySelector('.panels').innerHTML+=`
        <div class="panel">${word}<div>
        `
        
    })
    
    let panelsList=document.querySelectorAll('.panel')
    panelsList.forEach((obj,index)=>obj.style.backgroundImage=`url(${panelBackgrounds[index]})`)
    document.querySelector('.panels').addEventListener('click', toggleOpen)

    function toggleOpen(event){
        if(!event.target.classList.contains('open')){
            document.querySelectorAll('.panel').forEach((item)=>{item.classList.remove('open')})
            event.target.classList.toggle('open')}
        }
        
}
