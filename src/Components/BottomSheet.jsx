import React, { useState } from "react";
import "../Styles/BottomSheet.css";

const dummyImages = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  url: `https://placekitten.com/200/200?image=${index + 1}`,
}));

const BottomSheet = () => {
  const [sTop, setSTop] = useState(90);
  const [start, setStart] = useState(0);

  let debounceTimeout;

  const handleMouseMove = (event) => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (start > 0) {
        // let totalH = event.target.clientHeight;
        // let y = event.pageY;
        // let per = y / totalH;
        setSTop((event.pageY / 650) * 100);
      }
    }, 40);
  };

  return (
    <div
      className="container"
      onMouseUp={(e) => {
        console.log(start);
        if (start > 0) {
          let totalH = 650;
          let y = e.pageY;
          let per = y / totalH;
          console.log({ y, totalH, per });
          if (per < 0.1) {
            setSTop(1);
          } else if (per < 0.5) {
            setSTop(50);
          } else if (per > 0.5) {
            setSTop(90);
          }
        }
        setStart(0);
      }}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className={"bottom-sheet"} style={{ top: `${sTop}%` }}>
        <div
          className="drag"
          onMouseDown={(e) => {
            setStart(e.clientY);
          }}
        >
          DRAG
        </div>
        <div>
          {dummyImages.map((i) => (
            <img style={{ userSelect: "none" }} key={i.id} src={i.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
