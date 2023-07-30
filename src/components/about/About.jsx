import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About</h1>
      </div>
      <div className="about-container">
        <div className="our-story">
          <div className="info1">
            <h2>Our Story</h2>
            <p>
              At Trendy Threads, our story is one of passion, style, and
              inspiration. We began this journey with a vision to create a
              one-stop destination for fashion enthusiasts seeking the latest
              trends and timeless classics. With an unwavering commitment to
              quality and customer satisfaction, we strive to bring you the
              finest selection of clothing that reflects your unique personality
              and elevates your style game. Our journey started with a small
              team of fashion enthusiasts who shared a common love for all
              things trendy and chic. Over time, we have grown into a vibrant
              community of like-minded individuals, each contributing their
              expertise and creativity to curate a diverse collection that
              caters to every taste and occasion. We believe that fashion is not
              just about clothes; it's an expression of self, a statement of
              individuality. That's why, at Trendy Threads, we carefully
              handpick each piece, ensuring that it exudes the perfect blend of
              elegance and comfort. From sophisticated office wear to casual
              street styles, our range has something for everyone. As we
              continue to evolve, our commitment to sustainability and ethical
              practices remains unwavering. We strive to collaborate with brands
              that share our values and are dedicated to making a positive
              impact on the fashion industry and the planet. Join us on this
              exciting fashion journey and discover your own unique style with
              Trendy Threads. We are here to inspire, empower, and make every
              step of your fashion experience a delightful one.
            </p>
          </div>
          <div className="pic">
            <img
              id="pic1"
              src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="our-mission">
          <div className="pic">
            <img
              id="pic2"
              src="	https://preview.colorlib.com/theme/cozastore/images/about-02.jpg"
              alt="img"
            />
          </div>
          <div className="info2">
            <h2>Our Mission</h2>
            <p>
              At Trendy Threads, we are on a mission to redefine fashion with
              purpose. Our commitment goes beyond just offering stylish
              clothing; we believe in promoting sustainable fashion practices,
              empowering individuality, and making a positive impact. Through
              curating collections from brands that prioritize ethical sourcing
              and eco-friendly materials, we aim to reduce our ecological
              footprint and contribute to a more sustainable future for the
              fashion industry. We celebrate diversity and uniqueness,
              encouraging our customers to express themselves confidently
              through their fashion choices. With every purchase, you become a
              part of our mission to give back and support meaningful causes.
              Together, let's create a world where fashion is not only a
              reflection of style but also a catalyst for positive change. Join
              us in redefining fashion with purpose at Trendy Threads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
