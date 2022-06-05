import './productForm.css';
import { useState  } from 'react'

const ProductForm = () => {    
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        tags: [],
        quantity: 0,
        unit: '',
        buyPrice: 0,
        sellPrice: 0,
        img: '',
    });

    const [tag, setTag] = useState('')

    const [file, setFile] = useState(null);
    // const [errorFile, setErrorFile] = useState(false);

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value,
        })
    }

    const handleInputTags = (e) => {
        setTag(e.target.value);
    }

    const handleFileUpdate = (e) => {
        setFile(e.target.files[0]);
    }

    const addTag = (e) => {
        e.preventDefault();
        console.log('Add tag');
    }

    const addBrand = (e) => {
        e.preventDefault();
        console.log('Add brand');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        console.log(file);
        // if (!errorFile) {
        //     console.log('sin errores en el archivo');
        // }
    }

    return (<div className="wrapper">
        <form className='form' onSubmit={handleSubmit}> 
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={product.name}  onChange={handleInputChange}/>
            <label htmlFor="brand">Brand</label>
            <input type="text" name='brand' value={product.brand} onChange={handleInputChange} /> <button onClick={addBrand}> Add </button>
            <label htmlFor="tags">Tags</label>
            <input type="text" name='tags' value={tag} onChange={handleInputTags} /> <button onClick={addTag}> Add </button>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" value={product.quantity}  onChange={handleInputChange}/>
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit" value={product.unit} onChange={handleInputChange}>
                <option value="kg">Kg.</option>
                <option value="docenas">Docena</option>
                <option value="unidad">Por Unidad</option>
            </select>
            <label htmlFor="buyPrice">Buy-Price</label>
            <input type="number" name="buyPrice" id="buyPrice" value={product.buyPrice}  onChange={handleInputChange}/>
            <label htmlFor="sellPrice">Sell-Price</label>
            <input type="number" name="sellPrice" id="sellPrice" value={product.sellPrice}  onChange={handleInputChange}/>
            <label htmlFor="productImg">Product Image</label>
            <input type="file" name="productImg" id="productImg" onChange={handleFileUpdate}/>
            <input type="submit" value="Enviar" />
            {/* { errorFile ? <div className="">Error</div>  : null } */}

        </form>
    </div>)
}

export default ProductForm;