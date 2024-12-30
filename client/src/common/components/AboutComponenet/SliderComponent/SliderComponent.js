import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';
import image1 from '../../../../asset/images/cadiayyad.png';
import image2 from '../../../../asset/images/cnrst.jpg';
import image3 from '../../../../asset/images/act2.png';
import image4 from '../../../../asset/images/ocp.png';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300, // Time in milliseconds
    rtl: false, // Change to true if you want right-to-left scroll
  };

  const data = [
    {
      title: 'Group Culture and Musician Education',
      author: 'Daniel H. Pink',
      image: image1,
    },
    {
      title: 'Group Culture and Musician Education',
      author: 'Daniel H. Pink',
      image: image2,
    },
    {
      title: 'Group Culture and Musician Education',
      author: 'Daniel H. Pink',
      image: image3,
    },
    {
      title: 'Group Culture and Musician Education',
      author: 'Daniel H. Pink',
      image: image4,
    },
    {
        title: 'Group Culture and Musician Education',
        author: 'Daniel H. Pink',
        image: image3,
      },
      {
        title: 'Group Culture and Musician Education',
        author: 'Daniel H. Pink',
        image: image4,
      },
  ];

  return (
    <div className="slider-container">
      <h2>Nos partenaires</h2>
       <Slider className='slider' {...settings}>
        {data.map((item, index) => (
          <div className="slider-item" key={index}>
            <div className='partenaire-logo'><img src={item.image} alt={item.title} /></div>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
  
export default SliderComponent;
