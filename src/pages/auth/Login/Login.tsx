import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='w-[100%]'>
      <header className='w-[100%] h-[50px] bg-white' style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <div className='text-center text-[1.5rem] text-blue-700 font-semibold' style={{lineHeight:'3rem'}}>DuyBook</div>
      </header>
      <div className='mt-[100px]'>

        <div className='bg-white w-[400px] m-auto px-[10px] py-[20px] rounded-[10px]' style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
          <h2 className='text-center text-blue-700 font-semibold text-[1.5rem] mb-5'>Login DuyBook</h2>
        <Formik
       initialValues={{ email: '', password: '' }}
      
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <div className='mb-4'>
          
             <Field type="email" name="email"  placeholder="Email" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"
             
             />
           <ErrorMessage name="email" component="div" />
          </div>
          <div className='mb-3'>

            <Field type="password" name="password" placeholder="Mật khẩu" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"/>
           <ErrorMessage name="password" component="div" />
          </div>
          <div className='text-[#3b82f6] text-1rem] mb-3 pl-1'>
            <Link to="#">Quên mật khẩu?</Link>
           </div>
           <button type="submit" className='mb-3 w-[100%] bg-[#3b82f6] text-white h-[40px] text-[1.2rem] rounded-lg'>
             Đăng nhập
           </button>
          <div className='text-center'>
            Bạn chưa có tài khoản? <Link to="" className='text-[#3b82f6]'>Đăng kí ngay</Link>
          </div>
         </Form>
       )}
     </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
