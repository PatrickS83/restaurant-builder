import React, { Component } from "react";
import PropTypes from "prop-types";
import SpecialitiesImg from "./SpecialitiesImg";
import SelectImg from "./SelectImg";

class Specialities extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired
  };

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

  renderSpecialities = () => {
    return this.state.specials.map(
      (special, index) =>
        !special.editable ? (
          <SpecialitiesImg
            key={index}
            index={index}
            title={special.title}
            subtitle={special.subtitle}
            src={special.src}
            imgIsEditable={this.imgIsEditable}
            isAdmin={this.props.isAdmin}
          />
        ) : (
          <div key={index} className="col-lg-4 col-sm-6">
            <SelectImg selectNewImg={this.selectNewImg} />
          </div>
        )
    );
  };

  render() {
    return (
      <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">{this.renderSpecialities()}</div>
        </div>
      </section>
    );
  }
}

export default Specialities;
