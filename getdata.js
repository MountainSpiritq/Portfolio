export const getData=async(render)=>{
    const response=await fetch('https://raw.githubusercontent.com/MountainSpiritq/portfolio_data/main/portfolio.json')
    const data=await response.json()
    
    render(data)
}