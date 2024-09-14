import React from 'react'
import Heading from '../Shared/Heading'



import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img6 from '../../assets/product/p-9.jpg'
import Img7 from '../../assets/product/p-7.jpg'
import Img8 from '../../assets/product/p-3.jpg'
import ProductCard from './ProductCard'

const ProductsData=[
  {
    id:1,
    img: Img1,
    title:"Boat Headphone",
    price:"120",
    aosDealy:"0",
  },
  {
    id:2,
    img: Img2,
    title:"Rocky Mountain",
    price:"420",
    aosDealy:"200",
  },
  {
    id:3,
    img: Img3,
    title:"Goggles",
    price:"320",
    aosDealy:"400",
  },
  {
    id:4,
    img: Img4,
    title:"Printed",
    price:"220",
    aosDealy:"600",
  },
  {
    id:5,
    img: Img5,
    title:"Boat Headphone",
    price:"120",
    aosDealy:"0",
  },
  {
    id:6,
    img: Img6,
    title:"Rocky Mountain",
    price:"420",
    aosDealy:"200",
  },
  {
    id:7,
    img: Img7,
    title:"Goggles",
    price:"320",
    aosDealy:"400",
  },
  {
    id:8,
    img: Img8,
    title:"Printed",
    price:"220",
    aosDealy:"400",
  },
] 

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section  */}
        <Heading title="Our Products" 
        subtitle={"Explore Our Products"}
        />
        {/* Body Section  */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  )
}

export default Products
