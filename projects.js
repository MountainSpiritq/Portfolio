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
    
            <div class="card project-card">
                <div class="card-body">
                    <img class="projectImg" src="${e.image}" alt="">
                    <h5 class="card-title">${e.name}</h5>
                    <p class="card-text">${e.descr}</p>
                   
                    <a href="#" class="btn btn-primary">View Project</a>
                </div>
            </div>    
            `
        })
    }
}