import React from 'react';

const Footer = () => {
  return (
    <section id="contact">
      <div className="container bg-light">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Lets Get In Touch!</h2>
            <hr className="my-2" />
            <p className="mb-5">Reserve a table and enjoy our fine food!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x mb-3 sr-contact" />
            <p>123-456-6789</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
            <p>
              <a href="mailto:your-email@your-domain.com">contact@restaurantName.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
