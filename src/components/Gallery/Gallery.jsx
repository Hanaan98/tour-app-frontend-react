import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Gallery() {
  const items = Array.from({ length: 10 }).map((_, index) => (
    <img
      key={index}
      src={`https://source.unsplash.com/random/200x${Math.floor(
        Math.random() * (300 - 200 + 1) + 200
      )}`}
      style={{ width: "100%", borderRadius: "8px" }}
    />
  ));

  return (
    <div className="App">
      <h1 className="text-heading font-bold text-4xl mb-8">
        Our Customers Tour Gallery
      </h1>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
      >
        <Masonry columnsCount={3} gutter="20px">
          {items}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;
