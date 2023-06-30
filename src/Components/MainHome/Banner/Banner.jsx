import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full max-h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/lego-batman-figure-with-bat-its-head-lego-piece-background_920631-18.jpg?w=360"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.shopdisney.in/media/June/MarvelFranchiseBanner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3IXW6PRxVSVvljgGG_Hcdpsi0XXVV8ITN_VwKN4b9eNJzlgswPg9evMMzmEmFfuLgwk&usqp=CAU"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02XgNVfzF7ze0DD_Ng1rsFxHqPvz8YZAwMLqtmfYNBEJ9g4frhciJltzRj6dumOaeM88&usqp=CAU"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
