
import instance from "./axiosinstance";

export const RegisterUser = async (payload) => {
    try {
        const response = await instance.post('/api/users/signup', payload)
        return response.data
    } catch (err) {
        return err.message;
    }
}

export const LoginUser = async (payload) => {
    try {
        const response = await instance.post('/api/users/login', payload);
        return response.data
    } catch (err) {
        return err.message;
    }
}

export const Addtocart = async (payload) => {
    try {
        const response = await instance.post('/api/users/addtocart', payload);
        return response.data
    } catch (err) {
        return err.message;
    }
}

export const Getproduct = async () => {
    try {
        const response = await instance.get('/api/users/getproduct')
        return response.data
    } catch (err) {
        return err.message;
    }
}

export const getCartCount = async () => {
    try {
        const response = await instance.get('/api/users/cartCount')
        return response.data
    } catch (err) {
        return err.message
    }
}

export const getcartproduct = async () => {
    try {
        const response = await instance.get('/api/users/cartproduct')
        return response.data
    } catch (err) {
        return err.message
    }
}

export const deletecart = async (cartid) => {
    try {
        const response = await instance.get(`/api/users/deletecart/${cartid}`)
        return response.data
    } catch (err) {
        return err.message
    }
}


export const stockupdate = async (ProductId) => {
    try {
        const response = await instance.get(`/api/users/updatestock/${ProductId}`)
        return response.data
    } catch (err) {
        return err.message
    }
}

export const incrementcount = async (ProductId) => {
    try {
        await instance.get(`/api/users/incrementstock/${ProductId}`)
    } catch (err) {
        return err.message
    }
}