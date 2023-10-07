import React from "react";

const Circle = ({ handleClick, appear }) => {
  return (
    <div
      className="circle"
      onClick={() => handleClick(appear)}
      style={{ position: "relative" }}
    >
      {appear ? (
        <img
          src="https://media.giphy.com/media/Qvq1r7r0RnXUZSqrD3/giphy.gif"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Circle;
