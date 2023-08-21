import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Tùy chỉnh CSS cho carousel dọc

const VerticalCarouselSlide = React.forwardRef((props, ref) => {
  const { slides, activeIndex } = props;

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    centerPadding: "0",
    beforeChange: (oldIndex, newIndex) => {
      // Chuyển activeIndex khi thay đổi slide
      props.onSlideChange(newIndex);
    },
  };

  return (
    <Slider ref={ref} {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="vertical-carousel-slide">
          {slide}
        </div>
      ))}
    </Slider>
  );
});

const VerticalCarouselItem = ({ title, onClick, active }) => (
  <div
    className={`vertical-carousel-item ${active ? "active" : ""}`}
    onClick={onClick}
  >
    <img
      className=" w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 mr-2"
      alt=""
      src="/layer-12.svg"
    />
    {title}
  </div>
);

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    slideRef.current.slickGoTo(index); // Đổi slide trong vertical-carousel-slide
  };

  const slides = [
    <div key="slide1">
      <img className="w-full h-full object-cover" alt="" src="/Group-2.svg" />
    </div>,
    <div key="slide2">
      <img className="w-full h-full object-cover" alt="" src="/Group 3.svg" />
    </div>,
    <div key="slide3">
      <img className="w-full h-full object-cover" alt="" src="/Group 4.svg" />
    </div>,
    <div key="slide4">
      <img className="w-full h-full object-cover" alt="" src="/Group 234.png" />
    </div>,
    <div key="slide5">
      <img className="w-full h-full object-cover" alt="" src="/Group 235.svg" />
    </div>,
    <div key="slide6">
      <img className="w-full h-full object-cover" alt="" src="/Group 236.svg" />
    </div>,
    <div key="slide7">
      <img className="w-full h-full object-cover" alt="" src="/Group 237.svg" />
    </div>,
  ];

  const slidesItem = [
    "Xúc sắc",
    "Nhà",
    "Nhân vật",
    "Sổ đỏ",
    "Tiền",
    "Cơ hội",
    "Thử thách",
    // ...Thêm nội dung slide khác
  ];
  return (
    <div className="vertical-carousel-container">
      <div className="vertical-carousel-left">
        <div className="mb-12 text-[2rem]">Những sản phẩm có trong bộ cờ</div>
        {slidesItem.map((slide, index) => (
          <VerticalCarouselItem
            key={index}
            title={slide}
            onClick={() => handleItemClick(index)}
            active={activeIndex === index}
          />
        ))}
      </div>

      <div className="vertical-carousel-right">
        <VerticalCarouselSlide
          ref={slideRef}
          slides={slides}
          activeIndex={activeIndex}
          onSlideChange={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default VerticalCarousel;
