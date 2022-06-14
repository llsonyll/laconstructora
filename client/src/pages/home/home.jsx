import NavBar from '../../components/navbar/navbar';
import ProductForm from '../../components/productForm';
import { Routes, Route } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Routes>
        {/* rutas varias (newProduct, productList and others) */}
        <Route path='form' element={<ProductForm />} />
      </Routes>
    </div>
  )
}

export default Home;
