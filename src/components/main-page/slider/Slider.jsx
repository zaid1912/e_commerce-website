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
      autoplaySpeed:2500,
      slidesToShow: 1,
      autoplay:true,
      slidesToScroll: 1,
      fade:true,
      cssEase:"linear",
      pauseOnHover: false,
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
          <img src="https://img.freepik.com/free-photo/young-hipster-guy-wearing-glasses-laughing-happily-isolated-white_146671-15549.jpg?w=1380&t=st=1690555359~exp=1690555959~hmac=0ba42db65fb69aacbc603b908413042a3401382129bcce8ef7861e54c192a760" alt="" />
            <div className="slider-content">
            <p>Men Collection 2023</p>
            <h3>New Arrivals</h3>
            <button>Shop Now</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slider-slide">
          <img src="https://img.freepik.com/free-photo/little-girl-posing-school-s-uniform-white-studio-wall_155003-38311.jpg?w=1380&t=st=1690556417~exp=1690557017~hmac=f417aa17e593f43f29c6fc76c680f2948c7720ae798ed052c4a4df8821d6edbe" alt="" />
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
