
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import AryanDetails from './components/AryanDetails/AryanDetails';
import Checkout from './components/Checkout/Checkout';
import RequeirAuth from './components/RequeirAuth/RequeirAuth';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';







function App() {
  return (
    <div className="App">
      
      {/* header ..................................................*/}
       <Header></Header>
      
      {/* header ..................................................*/}



    {/*Router  .......................................................*/}
    <Routes>
    
    <Route path='/' element={<Movies></Movies>}    />
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}    />
    <Route path='/signup' element={<Signup></Signup>}    />
    <Route path='/blog' element={<Movies></Movies>}    />
    <Route path='/question' element={<Question></Question>}    />
    <Route path='/about' element={<About></About>}    />
    <Route path='/checkout' element={
    
   <RequeirAuth>
      <Checkout></Checkout>
   </RequeirAuth>
  
  
  }/>





    <Route path='/service/:serviceId' element={<AryanDetails></AryanDetails>} />
    <Route path='*' element={<NotFound></NotFound>}    />
    </Routes> 
    {/*Router  .......................................................*/}

<Footer></Footer>






    </div>
  );
}

export default App;
