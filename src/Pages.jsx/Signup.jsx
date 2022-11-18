  import React ,{useState}from 'react'
  import {  useNavigate } from 'react-router-dom'
  
function Signup() {
    const[form , setForm]=useState({
        email:"",
        password:""
      })
      const navigate=useNavigate()
      function handleChange(e){
        const{value , name}=e.target
        setForm({...form , [name]:value})
        console.log(form);
      }
      function handleSubmit(e){
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp=AIzaSyC2vuaByfU_Z6zC97j6-zx1cN8oUE4xhPk', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        
        .then((resp)=>resp.json())
      
        .then((data)=>{
          console.log(data)
          localStorage.setItem(`kind`,data.idToken)
        })
        .catch((err)=>{
          console.log(err);
        })
        
       
      navigate("/home")
        console.log(form)
        }

  return (
    <>
      <div className="container  shadow">
      <h1 className='text-primary'>SignUp Form</h1>
      <div className="row">
        <div className="col-md-4">
          <form action="">
          <input type="text"
             placeholder='Email'
             className='form-control my-3'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
                      <input type="text"
             placeholder='password'
             className='form-control my-3'
              name='password'
              value={form.password}
              onChange={handleChange}
            />
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
           
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup