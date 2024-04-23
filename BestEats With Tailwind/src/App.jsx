
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TopCard from './components/TopCard'
import Food from './components/Food'
import Categories from './components/Categories'

function App() {

  return (
    <>
     {/* <h1 className="text-3xl font-bold underline text-gray-700">
      Hello world!
    </h1> */}
    <Navbar/>
    <Hero/>
    <TopCard/>
    <Food/>
    <Categories/>
    </>
  )
}

export default App
