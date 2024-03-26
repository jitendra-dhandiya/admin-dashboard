export function createVisitorAPI (visitor){
    return new Promise(async(resolve)=>{
        const response = await fetch('https://admin-dashboard-api-mu.vercel.app/api/visitor/create',{
            method:'POST',
            body:JSON.stringify(visitor),
            headers:{'content-type':'application/json'},
        });
        const data = await response.json()
        resolve({data})
    });
}

export function fetchVisitorAPI(){
    return new Promise(async (resolve)=>{
        const response = await fetch('https://admin-dashboard-api-mu.vercel.app/api/visitor/get');
        const data = await response.json();
        resolve({data});
    })
}
