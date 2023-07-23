import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.css';
// import './SimpleSlider.css'; // Import your custom CSS styles for the Slider component

class SimpleSlider extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slider-slide">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Image 1" />
            <div className="slider-content">
            <p>Women Collection 2023</p>
            <h3>New Arrivals</h3>
            <button>Shop Now</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slider-slide">
          <img src="https://img.freepik.com/free-photo/young-handsome-man-street-outfit_1303-19664.jpg" alt="img2" />
            {/* <img src="https://media.istockphoto.com/id/660307016/photo/dude-in-check.jpg?s=612x612&w=0&k=20&c=ojAEpockZCPuKrLXwLtGurOaghGDfmZsVduO-lCnOEE=" alt="Image 2" /> */}
            <div className="slider-content">
            <p>Men Collection 2023</p>
            <h3>New Arrivals</h3>
            <button>Shop Now</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slider-slide">
            <img src="https://img.freepik.com/free-photo/cute-stylish-children_155003-8330.jpg?w=1380&t=st=1690101537~exp=1690102137~hmac=c115befd4fa6fd8f22aad70d10b96ce008dda2f1e548293755c51a95e161ff21" alt="Image 3" />
            <div className="slider-content">
            <p>Kids Collection 2023</p>
            <h3>New Arrivals</h3>
            <button>Shop Now</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
