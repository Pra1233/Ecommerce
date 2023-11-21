import React from "react";
import CardList from "./CardList";
import { Button } from "react-bootstrap";

const Main = () => {
  const products = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",
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
            key={item.id}
            id={item.id}
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
