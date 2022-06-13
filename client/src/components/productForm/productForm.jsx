import './productForm.css';
import { useState  } from 'react'
import InputBox from '../molecules/inputBox/inputBox';

const ProductForm = () => {    
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        quantity: 0,
        unit: null,
        buyPrice: 0,
        sellPrice: 0,
        // tags: [],
        // img: '',
    });

    // const [tag, setTag] = useState('')

    // const [file, setFile] = useState(null);
    // const [errorFile, setErrorFile] = useState(false);

    const handleInputChangeFromEvent = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value,
        })
    }

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.name] : (e.value),
        })
    }

    // const handleInputTags = (e) => {
    //     setTag(e.target.value);
    // }

    // const handleFileUpdate = (e) => {
    //     setFile(e.target.files[0]);
    // }

    // const addTag = (e) => {
    //     e.preventDefault();
    //     console.log('Add tag');
    // }

    // const addBrand = (e) => {
    //     e.preventDefault();
    //     console.log('Add brand');
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        // if (!errorFile) {
        //     console.log('sin errores en el archivo');
        // }
    }

    return (<div className="wrapper">
        <form className='form' onSubmit={handleSubmit}> 
            <InputBox type='text' name='name' inputHandler={handleInputChange} placeholder='Ingrese nombre del producto'/>
            <InputBox type='text' name='brand' inputHandler={handleInputChange} placeholder='Ingrese marca del producto'/>
            <InputBox type='number' name='quantity' inputHandler={handleInputChange}/>
            <InputBox type='number' name='buyPrice' inputHandler={handleInputChange}/>
            <InputBox type='number' name='sellPrice' inputHandler={handleInputChange}/>
            {/* <label htmlFor="brand">Brand</label>
            <input type="text" name='brand' value={product.brand} onChange={handleInputChange} /> <button onClick={addBrand}> Add </button> */}
            {/* <label htmlFor="tags">Tags</label>
            <input type="text" name='tags' value={tag} onChange={handleInputTags} /> <button onClick={addTag}> Add </button> */}
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit" value={product.unit} onChange={handleInputChangeFromEvent}>
                <option value={null}>Seleccione unidad</option>
                <option value="unidad">Por Unidad</option>
                <option value="kilogramo">Kilogramo</option>
                <option value="docena">Docena</option>
                <option value="paquete">Paquete</option>
                <option value="caja">Caja</option>
                {/* <option value="caja">Caja</option> */}
            </select>
            {/* <label htmlFor="productImg">Product Image</label> */}
            {/* <input type="file" name="productImg" id="productImg" onChange={handleFileUpdate}/> */}            
            <input type="submit" value="Enviar" />
            {/* { errorFile ? <div className="">Error</div>  : null } */}

            {/* <div className={true ? 'statusMsg success' : 'statusMsg failure'}> 
                { true ? 'Exito al agregar producto' : 'Error al subir datos'}
            </div> */}
        </form>
    </div>)
}

export default ProductForm;