import React, { Component } from "react";
import base from "../base";
import PropTypes from "prop-types";
import SpecialitiesImg from "./SpecialitiesImg";
import SelectImg from "./SelectImg";

class Specialities extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired
  };

  state = {
    Specialities: [],
    SpecialitiesImgSrc: []
  };

  componentDidMount() {
    this.ref = base.syncState(`/component/Specialities`, {
      context: this,
      state: "Specialities", // which state you want to sync
      isArray: true
    });
    this.ref = base.syncState(`/component/SpecialitiesImgSrc`, {
      context: this,
      state: "SpecialitiesImgSrc", // which state you want to sync
      isArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  imgIsEditable = index => {
    if (this.state.Specialities.find(special => special.editable)) return;
    const Specialities = [...this.state.Specialities];
    Specialities[index].editable = true;
    this.setState({ Specialities });
  };

  selectNewImg = img => {
    const Specialities = [...this.state.Specialities];
    const editableSpecial = Specialities.find(special => special.editable);
    editableSpecial.src = img;
    editableSpecial.editable = false;
    this.setState({ Specialities });
  };

  renderSpecialities = () => {
    if (this.state.Specialities.length === 0) return null;
    return this.state.Specialities.map(
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
            <SelectImg selectNewImg={this.selectNewImg} src={this.state.SpecialitiesImgSrc} />
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
