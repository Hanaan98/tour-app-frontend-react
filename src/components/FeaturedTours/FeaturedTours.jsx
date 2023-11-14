import React from "react";
import TourCard from "../TourCard/TourCard";
import img1 from "../../assets/tour-img01.jpg";
import img2 from "../../assets/tour-img02.jpg";
import img3 from "../../assets/tour-img03.jpg";
import img4 from "../../assets/tour-img04.jpg";
import img5 from "../../assets/tour-img05.jpg";
import img6 from "../../assets/tour-img06.jpg";
import img7 from "../../assets/tour-img07.jpg";
import img8 from "../../assets/tour.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
        centerMode: true,
      },
    },
  ],
};
const toursData = [
  {
    id: 1,
    location: "New York",
    rating: 4.5,
    price: 300,
    desc: "Holmen Lofoten",
    img: img1,
    link: "/tours/1",
  },
  {
    id: 2,
    location: "Indonesia",
    rating: 4.5,
    price: 99,
    desc: "Bali",
    img: img2,
    link: "/tours/1",
  },
  {
    id: 3,
    location: "France",
    rating: 4.5,
    price: 99,
    desc: "Paris",
    img: img3,
    link: "/tours/1",
  },
  {
    id: 4,
    location: "Italy",
    rating: 4.5,
    price: 99,
    desc: "Rome",
    img: img4,
    link: "/tours/1",
  },
  {
    id: 5,
    location: "Japan",
    rating: 4.5,
    price: 99,
    desc: "Tokyo",
    img: img5,
  },
  {
    id: 6,
    location: "Australia",
    rating: 4.5,
    price: 99,
    desc: "Sydney",
    img: img6,
    link: "/tours/1",
  },
  {
    id: 7,
    location: "India",
    rating: 4.5,
    price: 99,
    desc: "New Delhi",
    img: img7,
    link: "/tours/1",
  },
  {
    id: 8,
    location: "Egypt",
    rating: 4.5,
    price: 99,
    desc: "Cairo",
    img: img8,
    link: "/tours/1",
  },
];
const FeaturedTours = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-heading font-bold md:text-4xl mb-8">
        Our Featured Tours
      </h1>
      {/* <div className="flex flex-wrap justify-center  items-center gap-3"> */}
      <Slider {...settings}>
        {toursData.map((tour) => {
          return <TourCard key={tour.id} {...tour} />;
        })}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default FeaturedTours;
