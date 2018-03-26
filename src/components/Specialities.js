import React, { Component } from 'react';
import SpecialitiesImg from './SpecialitiesImg';

class Specialities extends Component {
  state = {
    specials: [
      {
        title: "Greens",
        subtitle: "Delicious Greens",
        src: "../img/greens.jpg"
      },
      {
        title: "Vegs",
        subtitle: "Delicious Vegs",
        src: "../img/vegetables.jpeg"
      },
      {
        title: "Grapes",
        subtitle: "Delicious Grapes",
        src: "../img/grapes.jpg"
      }
    ]
  }

  render() {
    return (
      <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            {this.state.specials.map((special, index) => <SpecialitiesImg key={index} title={special.title} subtitle={special.subtitle} src={special.src} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Specialities;