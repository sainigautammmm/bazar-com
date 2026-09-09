//

import React from "react";
function Slider() {
  return (
    <div
      id="mySlider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {" "}
      {/* Indicators */}{" "}
      <div className="carousel-indicators">
        {" "}
        <button
          type="button"
          data-bs-target="#mySlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>{" "}
        <button
          type="button"
          data-bs-target="#mySlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>{" "}
        <button
          type="button"
          data-bs-target="#mySlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>{" "}
      </div>{" "}
      {/* Slides */}{" "}
      <div className="carousel-inner">
        {" "}
        {/* Slide 1 */}{" "}
        <div className="carousel-item active">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuI-hs2M5Mn1TSWWxWEEAHNeqysLCC8AQ8k3UJQyNgg&s=10"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Shopping"
          />{" "}
        </div>{" "}
        {/* Slide 2 */}{" "}
        <div className="carousel-item">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeB--Y0ZDz9VuXCXfAzh37_8RSm3_0vHqqQg5A1Jojg&s=10"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Online Shopping"
          />{" "}
        </div>{" "}
        {/* Slide 3 */}{" "}
        <div className="carousel-item">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Products"
          />{" "}
        </div>{" "}
      </div>{" "}
      {/* Previous Button */}{" "}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mySlider"
        data-bs-slide="prev"
      >
        {" "}
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>{" "}
        <span className="visually-hidden"> Previous </span>{" "}
      </button>{" "}
      {/* Next Button */}{" "}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mySlider"
        data-bs-slide="next"
      >
        {" "}
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>{" "}
        <span className="visually-hidden"> Next </span>{" "}
      </button>{" "}
    </div>
  );
}
export default Slider;
