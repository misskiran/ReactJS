//App.jsx me components likhte h , run main.jsx se hota h 
 //To make a component App not app
import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/navigation"

const App = () => {
    return(
       <div>
        <Navigation />
        <HeroSection />
       </div> 
    )
};

export default App ;


































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className = 'App'>
//       Hello World

//     </div>
//   )
// }

// export default App
