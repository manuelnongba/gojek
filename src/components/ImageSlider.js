import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <img src={slides[currentIndex].url} alt={slides[currentIndex].title} />
      <button className="slider__btn slider__btn--left" onClick={goToPrev}>
        &larr;
      </button>
      <button className="slider__btn slider__btn--right" onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
};
export default ImageSlider;
