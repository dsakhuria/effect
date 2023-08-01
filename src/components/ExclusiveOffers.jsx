import { useState } from 'react';

function ExclusiveOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = 4; // Change this value to the total number of slides

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  return (
    <div className="carousel w-full h-[15rem] my-6 rounded-lg sm:w-1/2 sm:h-[30rem] relative overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        <div className="carousel-item relative w-full">
          <img
            src="https://www.junglescout.com/wp-content/uploads/2018/06/makeup-display.png"
            className="w-full"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://worldscholarshipvault.com/wp-content/uploads/2023/01/images-29.jpeg"
            className="w-full"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://sc04.alicdn.com/kf/Haa98409f10774d39aaac882f63aaad47R.jpg"
            className="w-full"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item relative w-full">
          <img
            src="https://lh3.googleusercontent.com/Z5LKF4h_1_uix2KJ5f1tLXcLLLkN_P7gCHSPiSbYBfb8d8dIbt_DU05stfGOJkhd0-Khgnhawvy_QlLpZW8WUip_7NY_fftLMI6w5ZE=h200-rw"
            className="w-full"
            alt="Slide 4"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between">
        <button
          className="btn btn-circle"
          onClick={handlePreviousSlide}
        >
          {"<"}
        </button>
        <button
          className="btn btn-circle"
          onClick={handleNextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ExclusiveOffers;
