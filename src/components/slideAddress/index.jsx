import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.7s;
  justify-content: space-between;
  gap: 3rem;
`;

const Slide = styled.div`
  flex: 0 0 33rem;
  height: 35rem;
  margin-right: 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 8px 16px;
  cursor: pointer;
`;

const SlideComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideData = [
    "/Frame 739.png",
    "/Frame 740.png",
    "/Frame 741.png",
    "/Frame 742.png",
    "/Frame 743.png",
    "/Frame 744.png",
    "/Frame 745.png",
    "/Frame 746.png",
    "/Frame 747.png",
    "/Frame 748.png",
    "/Frame 749.png",
    "/Frame 750.png",
    "/Frame 751.png",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 1500);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const totalSlides = slideData.length;
  const slideWidth = 33; // Width of each slide in "rem";
  const slideCountToShow = 3;

  const adjustedIndex = currentIndex % totalSlides;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div>
      <SliderContainer>
        <SlideWrapper
          style={{ transform: `translateX(-${adjustedIndex * slideWidth}rem)` }}
        >
          {slideData
            .concat(slideData.slice(0, slideCountToShow - totalSlides))
            .map((imageSrc, index) => (
              <Slide key={index}>
                <SlideImage alt={`Slide ${index + 1}`} src={imageSrc} />
              </Slide>
            ))}
        </SlideWrapper>
      </SliderContainer>
      {/* <Button onClick={handlePrevClick}>Previous</Button>
      <Button onClick={handleNextClick}>Next</Button> */}
    </div>
  );
};

export default SlideComponent;
