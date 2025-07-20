import React, { use, useCallback, useEffect, useState,useRef } from 'react'

function App() {

  const [length,setLength]= useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function(){
     let pass = " "
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     
     if(numberAllowed){
      str+="0123456789"
     }
     if(charAllowed){
      str+="!@#$%&*()?:~`?"
     }

     for(let i=0;i<=length;i++){
           const char = Math.floor(Math.random() * str.length)+1
           pass += str.charAt(char)
     }
     setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
   
  useEffect(()=>{
     passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
     <div className='bg-amber-100 max-w-md mx-auto mt-10 rounded-2xl items-center   p-4'>
        <h1 className='text-2xl font-semiboldbold text-center'>Password Generator</h1>

        <div className='bg-amber-50 mx-8 flex justify-between mt-2'>
           <input type="text" 
             placeholder='Password'
             value={password}
             className='outline-none m-2 '
             readOnly
             ref={passwordRef}
           />
           <button
             className='bg-blue-500 w-19 text-center text-white font-bold rounded-md' 
             onClick={copyToClipboard}
              >Copy</button>
        </div>

       <div className=' flex text-center mt-3 justify-between flex-row gap-2 '>
         <div className='flex gap-2 '>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>length:({length})</label>
        </div>

        <div>
           <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            className=''
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
           />
           <label htmlFor="numberInput">  Number</label>
        </div>
        <div>
          <input type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="charInput"> Character</label>
        </div>
       </div>
    </div>
      
    
    </>
  )
}

export default App