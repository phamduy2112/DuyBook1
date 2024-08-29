import { DatePicker, Radio, Space } from 'antd';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='w-[100%]'>
    <header className='w-[100%] h-[50px] bg-white' style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
      <div className='text-center text-[1.5rem] text-blue-700 font-semibold' style={{lineHeight:'3rem'}}>DuyBook</div>
    </header>
    <div className='mt-[100px]'>

      <div className='bg-white w-[400px] m-auto px-[10px] py-[20px] rounded-[10px]' style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <h2 className='text-center text-blue-700 font-semibold text-[1.5rem] mb-5'>Register DuyBook</h2>
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
        <div className='mb-3'>
        
           <Field type="email" name="email"  placeholder="Họ tên" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"
           
           />
         <ErrorMessage name="email" component="div" />
        </div>
        <div className='mb-3'>

          <Field type="password" name="password" placeholder="Email" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"/>
         <ErrorMessage name="password" component="div" />
        </div>
        <div className="flex gap-3">
        <div className='mb-3'>

<Field type="password" name="password" placeholder="Mật khẩu" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"/>
<ErrorMessage name="password" component="div" />
</div>
<div className='mb-3'>

<Field type="password" name="password" placeholder="Xác nhận mật khẩu" className="border boder-solid focus:border-blue-500 focus:outline-none w-full h-[45px] rounded-lg px-[15px]"/>
<ErrorMessage name="password" component="div" />
</div>
        </div>
        
        <div className='mb-3'>
        <Space direction="vertical" className='w-[100%]'>
    <DatePicker className="border boder-solid focus:border-blue-500 focus:outline-none w-[100%] h-[45px] rounded-lg px-[15px]"/>
   
  </Space>
        </div>

        <div className='w-[100%] mb-3'>
            <h3 className='mb-1 ml-1'>Gender</h3>
            <Radio.Group className='flex gap-[1%]'>
              <div className='border border-solid border-gray-200 w-[33%] h-[38px] text-center flex items-center rounded-md'>
                 <Radio value={1} className='ml-4 flex justify-between w-[100%]'>
                  <span className='ml-[2.7rem]'>Nam</span>
                 </Radio>
              </div>
              <div className='border border-solid border-gray-200 w-[33%] h-[38px] text-center flex items-center rounded-md'>
                 <Radio value={2} className='ml-4 flex justify-between w-[100%]'>
                  <span className='ml-[2.7rem]'>Nữ</span>
                 </Radio>
              </div>
              <div className='border border-solid border-gray-200 w-[33%] h-[38px] text-center flex items-center rounded-md'>
                 <Radio value={3} className='ml-4 flex justify-between w-[100%]'>
                  <span className=''>Tuỳ chỉnh</span>
                 </Radio>
              </div>
     
    
    
    </Radio.Group>
        </div>
    
         <button type="submit" className='mb-3 w-[100%] bg-[#3b82f6] text-white h-[40px] text-[1.2rem] rounded-lg'>
           Đăng Kí
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

export default Register
