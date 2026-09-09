import React from 'react'
import{useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { logoutuseraction } from '../REDUX/ACTION/user';
import { useNavigate } from 'react-router-dom';
import { Toaster,toast} from 'sonner';
import { useEffect } from 'react';
import { EMPTY_USER_FAILURE_MESSAGE } from '../REDUX/Constant/user';
function Logut() {

const isloading = useSelector((state)=>state.myuser.isloading);
const failure = useSelector((state)=>state.myuser.failure);

 const dispatch = useDispatch();
 const navigate  = useNavigate();



  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type:EMPTY_USER_FAILURE_MESSAGE });
    }
  },[failure]);




 const handleButtonclick  = ()=>{
    dispatch(logoutuseraction(navigate));
 }

  return (
   <>
   
   <Toaster richColors position='bottom-right'></Toaster>
      
   <div className='w-100 bg-body-secondary vh-100 d-flex justify-content-center align-item-center'>

<div className='bg-white w-25 boredr px-4 px-5'>


  <h1 className='text-danger text-center mb-5'>Do you want to logout </h1>

  <button  onClick={handleButtonclick} className='btn btn-danger'>
     {isloading ?
     
    (
<div className='spinner-border  text-light ' role='status'>

    <span className='visually-hidden'>Loading...</span>
</div>
    ):(
<span>...Logout</span>
    ) }
  </button>
</div>
  </div>
   </>
  )
}

export default Logut