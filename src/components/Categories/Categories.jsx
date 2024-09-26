import React from 'react'
import '../assets/data'
import Caticon from '../category-icon/Caticon'
import './categories.css'
import data from '../assets/data'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Categories = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%"}}
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
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='categories'>
      <h1>What Do You want To eat?!</h1>
      <div className='food_icon'>
        <Slider {...sliderSettings}>
          {data.map((item, i) => {
            return <Caticon id={item.id} name={item.name} image={item.image} category={item.category} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Categories
