import React from 'react'
import { Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form'
import { LoginUser } from '../../apicalls/Users';
import { useNavigate } from 'react-router-dom';
import{ ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Loginpage() {
    const navigate=useNavigate()
    const {register, handleSubmit,formState:{errors},}  = useForm();

    const submit=async (data)=>{
        try{
            const response=await LoginUser(data)
            if(response.success){
            toast.success(response.message);
            localStorage.setItem('token', JSON.stringify(response.data));
            setTimeout(()=>{
           navigate('/')
             }, 2000);
           }
            else throw new Error(response.message);
        }catch(err){
          toast.error(err.message);
        }
         
      }



    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid"
                            alt="Phone image"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <Form onSubmit={handleSubmit(submit)} id="form" className="flex flex-col">
                            <Form.Control type="text" {...register("email", {required: true})}  placeholder="e-mail" className="mb-3" />
                            {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                            <Form.Control type="password" {...register("password", { required: true, minLength: 8 })} placeholder="password" className="mb-3" />
                            {errors.password && <span style={{ color: 'red' }}>This fiield required,at least 8 characters </span>}
                      

                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-primary" type="submit">Login</button>

                            </div>
                        </Form>
                        <ToastContainer />
                        <p>create a new account ?<span onClick={()=>{navigate('/signup')}} className='text-primary fs-5 ms-2' style={{ fontWeight: 'bold', cursor: 'pointer'}}>Signup</span></p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Loginpage
