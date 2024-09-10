import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
    {loading && <p>Loading...</p>}
      <div className='container'>
        {data.map(product => (
          <Link to={`/products/${product.id}`} className='product' key={product.id}>
            <img src={product.image} width={100} />
            <p className='title'>{product.title}</p>
            <p className='description'>{product.description}</p>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Products;

