import React, { ReactFragment, useEffect, useState } from 'react'
import TShirt1 from '../../assets/rock to diamond tshirt.png';
import { Product } from '../../models/product';
import Button from '../Button/Button';

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

  const renderProducts = () => {
    let renderedProducts: JSX.Element[] = [];
    for (const [i, product] of products.entries()) {
      renderedProducts.push(
        <div className={
          // Use index to toggle section background color
          `${ i % 2 != 0 && 'bg-[var(--color-secondary)]'}
            h-screen 
            flex 
            flex-col 
            justify-center
            items-center`}>
          {/* Only add 'Feature Designs' title to the first section */}
          { i == 0 && 
            <h2 className='px-10 py-10 text-6xl font-bold'>Featured Designs</h2>
          }
          <img src={'src/assets/'+product.imageUrl} alt="tshirt1" className='px-10 w-[50rem]'/>
          <p className='mb-10 w-80 text-5xl text-center'>{product.title}</p>
          <Button className='mb-4'>Shop This Design</Button>
          <Button className='mb-4' outline>Learn Its Meaning</Button>
          <Button outline>Accept this challenge</Button>
        </div>
      )
    }

    return renderedProducts;
  }

  return (
    <section className='flex flex-col justify-center items-center'>
      {renderProducts()}
    </section>
  )
}

export default FeaturedDesigns