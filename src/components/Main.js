import React from "react";
import CardList from "./CardList";
import { Button } from "react-bootstrap";

const Main = () => {
  const products = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <React.Fragment>
      <div className="d-flex   justify-content-evenly flex-wrap">
        {products.map((item) => (
          <CardList
            key={item.title}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
          />
        ))}
      </div>
      <Button variant="success" className="d-block mx-auto mt-5" size="xl">
        Show Cart
      </Button>
    </React.Fragment>
  );
};

export default Main;
