import React, {  useEffect, useState } from 'react'
import {  useDispatch, useSelector,  } from 'react-redux'
import{ loginuseraction } from '../REDUX/ACTION/user'
import {useNavigate} from 'react-router-dom'
import {toast, Toaster} from 'sonner'
import { EMPTY_USER_FAILURE_MESSAGE } from '../REDUX/Constant/user'




function Login() {
   const [formData,setFormData] = useState({
    email:'',
    password:'',
   })

   const isloading = useSelector((state)=>state.myuser.isloading);
   const sucess = useSelector((state)=>state.myuser.sucess);
   const failure = useSelector((state)=>state.myuser.failure);

   const dispatch = useDispatch();
   const navigate = useNavigate();


   useEffect(() => {
    if (sucess) {
      toast.success(sucess);
    }
  }, [sucess]);

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: EMPTY_USER_FAILURE_MESSAGE });
    }
  },[failure]);




   const handleFormSubmit = (e) =>{
            e.preventDefault();
            dispatch(loginuseraction(formData,navigate))
   }


  return (


    <div>
    <Toaster richColor position="bottom-right"></Toaster>
    <div className="w-100 bg-body-secondary vh-100 d-flex justify-content-center align-items-center">
      <div className="bg-white w-25 border px-4 py-5">
        <h1 className="text-danger text-center mb-5">
          Login Form
        </h1>
        <form
          className="d-flex flex-column gap-4"
          onSubmit={handleFormSubmit}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: (e.target.value) })
            }
          />
   <input
            className="form-control"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password:(e.target.value) })
            }
          />
          <button className="btn btn-danger">
            {isloading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">loading...</span>
              </div>
            ) : (
              <span>login</span>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login