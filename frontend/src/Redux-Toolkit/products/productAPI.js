export function createProductAPI(product){
    return new Promise(async(resolve)=>{
      const response = await fetch('http://localhost:5000/api/product/create/',{
          method:'POST',
          body:JSON.stringify(product),
          headers:{'content-type':'application/json'},
      });
      const data = await response.json()
      resolve({data});
    })
  }

export function fetchProductAPI(){
    return new Promise(async (resolve)=>{
        const response = await fetch('http://localhost:5000/api/product/get');
        const data = await response.json();
        resolve({data});
    })
}