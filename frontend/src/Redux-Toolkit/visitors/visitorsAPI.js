export function createVisitorAPI (visitor){
    return new Promise(async(resolve)=>{
        const response = await fetch('http://localhost:5000/api/visitor/create',{
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
        const response = await fetch('http://localhost:5000/api/visitor/get');
        const data = await response.json();
        resolve({data});
    })
}