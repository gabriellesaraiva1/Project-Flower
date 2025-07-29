import { useState } from 'react'
import Header from "./componentes/Header/Header";
import Homesection from './componentes/Homesection/Homesection';
import AboutSection from './componentes/AboutSection/AboutSection';
import Icons from './componentes/Icons/Icons';
import Products from './componentes/Products/Products';
import Review from './componentes/Review/Review';
import Contact from './componentes/Contact/Contact';
import Footer from './componentes/Footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Homesection/>
        <AboutSection/>
         <Icons/>
         <Products/>
         <Review/>
         <Contact/>
         <Footer/>
        
        
        </div>
    </>
  )


}



export default App;
