import NavBar from '../../components/navbar/navbar';
import ProductForm from '../../components/productForm';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <NavBar />

      {/* rutas varias (newProduct, productList and others) */}
      <ProductForm /> 
    </div>
  );
}

export default Home;
