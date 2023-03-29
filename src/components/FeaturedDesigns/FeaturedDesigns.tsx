import React, { ReactFragment, useEffect, useState } from 'react'
import TShirt1 from '../../assets/rock to diamond tshirt.png';
import { Product } from '../../models/product';

type Props = {}

const FeaturedDesigns = (props: Props) => {

  const [ products, setProducts ] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/data/featuredProducts.json');
      const data = await response.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  // const renderProducts = () => {
  //   return products.map((product) => 
  //     <div></div>
  //   );
  // }

  return (
    <section className='h-screen'>
      <h2>Featured Designs</h2>

      <div className='flex flex-col justify-center items-center'>
        <img src={TShirt1} alt="tshirt1" />
        <p>Title</p>
      </div>
    </section>
  )
}

export default FeaturedDesigns