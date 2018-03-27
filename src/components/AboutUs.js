import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-white">{`We've got what you need!`}</h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione mollitia
                molestias saepe est iure veniam iusto, quaerat reiciendis, ipsam quibusdam quam!
                Iure modi neque sunt consequatur! Natus harum voluptates incidunt alias aperiam?
                Obcaecati harum esse aspernatur rerum accusantium dignissimos dicta numquam
                voluptatibus tempore quo ratione quisquam molestias, laudantium expedita!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
