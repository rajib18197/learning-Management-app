import { useEffect, useRef, useState } from "react";
import "./GridLight.css";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

export default function GridLight() {
  const [order, setOrder] = useState([]);
  const [isDeactive, setIsDeactive] = useState(false);

  function handleDeactive() {
    setIsDeactive(true);
    let timer;

    timer = setInterval(() => {
      setOrder((prev) => {
        let newOrder = prev.slice();
        newOrder.pop();
        console.log(11);

        if (newOrder.length === 0) {
          setIsDeactive(false);
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  }

  function handleClick(index) {
    let newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder?.length === config.flat(1).filter(Boolean).length) {
      handleDeactive();
    }
  }

  return (
    <div className="grid-box">
      {config
        .flat(1)
        .map((el, index) =>
          el === 1 ? (
            <Cell
              key={index}
              isDeactive={isDeactive}
              onClick={() => handleClick(index)}
              isClicked={order.includes(index)}
            />
          ) : (
            <span key={index} />
          )
        )}
    </div>
  );
}

function Cell({ isClicked, isDeactive, onClick }) {
  return (
    <button
      className="cell"
      onClick={onClick}
      style={{ background: `${isClicked ? "green" : "white"}` }}
    ></button>
  );
}

// stresfull A Game.
// Reflect A image on my mind of Dan Abramov for borrow an identity that I have the treasure trove of knowledge.
