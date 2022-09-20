export async function Fetch_Request(url){
    const data = await fetch(url).then(res=>res.json());    
    return data
};