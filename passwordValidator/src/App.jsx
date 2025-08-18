import { useEffect, useState } from 'react'
import validator from 'validator'

function App() {
  const [errorMessage,setErrormessage] = useState('')
  const [password,setPassword] = useState('')
  const [pop,setPop]= useState('')

  const popMessage = ()=>{
      setPop("✅ Submit Successfully")
  }
  
  useEffect(()=>{
     if(validator.isStrongPassword(
        password,{
          minLength: 8,
          minUppercase: 1,
          minLowercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        }
     )){
       setErrormessage("✅ Strong Password")
     }else{
        setErrormessage("❌ Not a Strong Password");
     }
  }, [password])   // <-- fixed small typo: [password] not [[password]]

  return (
    <div className="bg-amber-300 max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Password Validator</h1>
        <div className="flex flex-col gap-3 w-full">
          <input 
            type="text" 
            placeholder="Type your password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {
            errorMessage && (
              <p className={`font-semibold ${errorMessage.includes("Strong") ? "text-green-600" : "text-red-600"}`}>
                {errorMessage}
              </p>
            )
          }
          <button 
            onClick={popMessage} 
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Validate
          </button>
          <h1 className="text-lg font-medium text-green-700">{pop}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
