import React from "react";

const SelectImg = props => {
  return props.src.map((img, index) => (
    <img
      key={index}
      className="img-fluid col-4 selectImage"
      src={img}
      alt=""
      style={{ cursor: "pointer" }}
      onClick={() => props.selectNewImg(img)}
    />
  ));
};

export default SelectImg;
