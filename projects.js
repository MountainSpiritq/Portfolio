import {getData} from './getdata.js'


export const renderProjects=()=>{
    console.log('mukodik')
    const url="https://raw.githubusercontent.com/MountainSpiritq/portfolio_data/main/portfolio.json"
    getData(url,renderhtml)

    function renderhtml(data){
        console.log(data)
        data.forEach(e=>{
            document.querySelector('.MyProjects').innerHTML+=`
            <h1 class="mb-4">Project Showcase</h1>
    
            
                <div class="card-body rounded">
                    <img class="projectImg rounded m-2" src="${e.image}" alt="">
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">${e.descr}</p>
                   
                    <a target="_blank" href="${e.hosted}" class="btn btn-primary">View Project</a>
                </div>
            
            `
        })
    }
}