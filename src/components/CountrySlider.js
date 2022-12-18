import { useState } from "react";

const CountrySlider = ({ countrySlides, rotateImagePrev, rotateImageNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? countrySlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    rotateImagePrev();
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === countrySlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    rotateImageNext();
  };

  return (
    <div>
      <h3>{countrySlides[currentIndex].h3} </h3>
      <p>{countrySlides[currentIndex].p}</p>

      <button className="button-a" onClick={goToPrev}>
        &larr;
      </button>
      <button className="button-b" onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
};
export default CountrySlider;
