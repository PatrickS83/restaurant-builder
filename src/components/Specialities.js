import React, { Component } from "react";
import SpecialitiesImg from "./SpecialitiesImg";
import SelectImg from "./SelectImg";

class Specialities extends Component {
  state = {
    specials: [
      {
        title: "Greens",
        subtitle: "Delicious Greens",
        src: "../img/greens.jpg",
        editable: false
      },
      {
        title: "Vegs",
        subtitle: "Delicious Vegs",
        src: "../img/vegetables.jpeg",
        editable: false
      },
      {
        title: "Grapes",
        subtitle: "Delicious Grapes",
        src: "../img/grapes.jpg",
        editable: false
      }
    ]
  };

  imgIsEditable = index => {
    if (this.state.specials.find(special => special.editable)) return;
    const specials = [...this.state.specials];
    specials[index].editable = true;
    this.setState({ specials });
  };

  selectNewImg = img => {
    const specials = [...this.state.specials];
    const editableSpecial = specials.find(special => special.editable);
    editableSpecial.src = img;
    editableSpecial.editable = false;
    this.setState({ specials });
  };

  render() {
    return (
      <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            {this.state.specials.map((special, index) => {
              if (special.editable === false) {
                return (
                  <SpecialitiesImg
                    key={index}
                    index={index}
                    title={special.title}
                    subtitle={special.subtitle}
                    src={special.src}
                    imgIsEditable={this.imgIsEditable}
                  />
                );
              } else {
                return (
                  <div key={index} className="col-lg-4 col-sm-6">
                    <SelectImg selectNewImg={this.selectNewImg} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Specialities;
