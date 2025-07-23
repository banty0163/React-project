
import './App.css'
import Cards from './Components/Cards'

function App() {
  return (
    <>
      <div className='flex justify-evenly  flex-wrap bg-gray-400'>
        <Cards friendName="Saif" />
        <Cards name="banty" />
        <Cards name="bablu" />
        <Cards name="sujit /Chuchi" />
        <Cards friendName="saurav Sharmila" />
        <Cards friendName="Gaurav Gandu" />
        <Cards friendName="Prince pornstar" />
        <Cards friendName="Ankit" />
        <Cards friendName="Dinesh Chacha" />
        <Cards friendName="Amiruddin chacha" />
      </div>
    </>
  )
}

export default App
