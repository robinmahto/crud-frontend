import React, {useState} from 'react'

const Form = () => {
   const [state, setState] = useState({
    username:"",
    email:""
   })

   const handleChange = (e)=>{
      e.preventDefault();
      setState( (prevValue)=>( {...prevValue ,[e.target.name] : e.target.value}))
   }

   const onHandleClick = ()=>{
      setState({
        username:"",
        email:""
       })
      console.log("state: ", state)
   }

  return (
    <div className=' w-3/6 p-5 my-8 flex items-center justify-around'>
      <div className='border-0'>
        <input 
           type="text" 
           name='username'
           value={state.username}
           placeholder='Enter username' 
           className='outline-0	px-4 py-2 bg-transparent border border-2 border-white-500 focus:outline-none text-white  placeholder:text-white rounded'  
           onChange={handleChange}
        />
      </div>
      <div>
      <input 
         type="email" 
         value={state.email}
         name="email"
         placeholder='Enter your email' 
         className='outline-0	px-4 py-2 bg-transparent border border-2 border-white-500 focus:outline-none text-white  placeholder:text-white rounded' 
         onChange={handleChange}
      />
      </div>
      <div>
        <button 
           onClick={onHandleClick}
           className='bg-white px-3 py-2 text-base	rounded	uppercase font-bold hover:bg-cyan-600 hover:text-white hover:duration-300	'>submit</button>
      </div>
    </div>
  )
}

export default Form