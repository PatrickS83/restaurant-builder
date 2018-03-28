import React from "react";
import imgSrc from "../imgDatabase.js";

const SelectImg = props => {
  return imgSrc.map((img, index) => (
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
