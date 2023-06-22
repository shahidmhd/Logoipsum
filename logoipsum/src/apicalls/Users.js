import instance from "./axiosinstance";

export const RegisterUser=async(payload)=>{
    try{
        console.log("nn",payload);
        const response= await instance.post('/api/users/signup',payload)
        return response.data
    }catch(err){
        return err.message;
    }
}

export const LoginUser=async(payload)=>{
    try{
        const response = await instance.post('/api/users/login', payload);
         return response.data
    }catch(err){
        return err.message;
    }
}

export const Addtocart=async(payload)=>{
    try{
        const response = await instance.post('/api/users/addtocart', payload);
        console.log(response,"response");
        //  return response.data
        return response.data
    }catch(err){
        return err.message;
    }
}

export const Getproduct=async()=>{
    try{
      const response =await instance.get('/api/users/getproduct')
      return response.data
    }catch(err){
        return err.message;
    }
}

export const getCartCount=async()=>{
    try{
        const response = await instance.get('/api/users/cartCount')
        return response.data
    }catch(err){
        return err.message
    }
}