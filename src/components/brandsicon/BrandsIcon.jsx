import React from 'react'
import './BrandsIcon.css'
import Caticon from '../category-icon/Caticon'
import brand from '../assets/brands'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brandicon from '../brandicon/Brandicon';

const BrandsIcon = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1, 
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='brandicon-container'>
      <h1>Top brands for you</h1>
      <div className="brand-icon">
        <Slider {...sliderSettings}>
        {brand.map((item)=>{
            return <Brandicon id={item.id} name={item.brand} image={item.logo} category={item.brand} />
        })}
        </Slider>
      </div>
    </div>
  )
}

export default BrandsIcon
