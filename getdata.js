export const getData=async(url,FcName)=>{
    const response=await fetch(url)
    const data=await response.json()
    
    FcName(data)
}