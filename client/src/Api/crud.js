import axios from 'axios';

export function create(ProductName, ProductCode, ProductImg, UnitPrice, Quantity, TotalPrice){
    let URL = 'api/v1/createProduct';
    let postBody ={
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImg : ProductImg, 
        UnitPrice: UnitPrice,
        Quantity: Quantity,
        TotalPrice: TotalPrice
      }
    return axios.post(URL , postBody)
        .then((res)=>{
            if(res.status === 200){
                return true;
            }
            else{
                return false;
            }
        })
        .catch(()=>{
            console.log("Error")
            return false;
        });
}

export function read(){
    let URL = 'api/v1/readProduct';
    return axios.get(URL)
        .then((res)=>{
            if(res.status === 200){
                return res.data['data'];
            }
            else{
                return false;
            }
        })
        .catch((err)=>{
            console.log(err)
            return false;
        });
}

export function update(ProductName, ProductCode, ProductImg, UnitPrice, Quantity, TotalPrice){
    let URL = 'api/v1/updateProduct';
    let postBody ={
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImg : ProductImg, 
        UnitPrice: UnitPrice,
        Quantity: Quantity,
        TotalPrice: TotalPrice
      }
    return  axios.post(URL , postBody)
        .then((res)=>{
            if(res.status === 200){
                return true;
            }
            else{
                return false;
            }
        })
        .catch((err)=>{
            console.log(err)
            return false;
        });
}

export function remove(){
    let URL = 'api/v1/deleteProduct';
    return axios.delete(URL)
        .then((res)=>{
            if(res.status === 200){
                return true;
            }
            else{
                return false;
            }
        })
        .catch((err)=>{
            console.log(err)
            return false;
        });
}