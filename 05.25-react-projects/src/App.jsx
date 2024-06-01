import './App.css'
import Accordian from './components/accordian/Index'
import RandomColor from './components/random-color/Index'
import StarRating from './components/star-rating/Index'

function App() {
    return (
    <>
    {/* Accordian component */}
    <Accordian/>
    {/* Random color component */}
    <RandomColor/>
    {/* Star-rating component */}
    <StarRating noOfStars = {15}/>
    </>
    
  )
}

export default App
