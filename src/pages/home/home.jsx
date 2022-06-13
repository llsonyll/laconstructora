import NavBar from '../../components/navbar/navbar';
import ProductForm from '../../components/productForm';
import { Routes, Route } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <Routes> 
        <Route path='/home' element={ <NavBar /> }> 
          {/* rutas varias (newProduct, productList and others) */}
          <Route  path='form' element={<ProductForm />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Home;
