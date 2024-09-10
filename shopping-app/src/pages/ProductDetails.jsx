import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const { productId } = params;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const resData = await res.json();
      setProduct(resData);
    } catch (error) {
      // TODO: redirect to products page
      navigate('/');
      /* setTimeout(() => {
        navigate('/');
      }, 3000); */
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
      <Link to="/products">Products</Link>
      <h1>Product Detail</h1>
      <div className='container'>
        <div className='product' key={product.id}>
          <img src={product.image} width={100} />
          <p className='title'>{product.title}</p>
          <p className='description'>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;

