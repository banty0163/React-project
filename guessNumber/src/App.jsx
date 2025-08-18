import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState('');
  const [randomNumber, setRandomnumber] = useState('');
  const [result, setResult] = useState('');
  const [store, setStore] = useState([]);
  const [msg, setMsg] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      setNumber(value);
    }
  }

  useEffect(() => {
    setRandomnumber(Math.floor(Math.random() * 20) + 1)
  }, [])

  const checkGuess = () => {
    setStore((prev) => [...prev, number])

    if (randomNumber === Number(number)) {
      setResult("🎉 You win!")
      setNumber('')
    } else {
      setResult("You lose")
      setNumber('')
      console.log(randomNumber)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 text-white font-sans">
      <h1 className="text-3xl font-bold mb-6">Guess the number between 1 to 20</h1>
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-96 text-center space-y-4">
        <input
          type="text"
          placeholder="Enter number"
          onChange={handleInputChange}
          value={number}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={checkGuess}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
        >
          Check Guess
        </button>

        <h1 className="text-lg font-medium">
          Guessed number: <span className="font-bold">{number}</span>
        </h1>
        <h1 className="text-lg">
          Previous Guesses:{" "}
          <span className="text-indigo-600 font-bold">{store.join(", ")}</span>
        </h1>
        <h1 className="text-xl font-bold">{result}</h1>
        <h1 className="text-red-600">{msg}</h1>

        {/* 👇 Your name (light text) */}
        <p className="text-sm text-gray-400 italic mt-4">@banty0163</p>
      </div>
    </div>
  )
}

export default App;
