import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

const AboutUs = props => {
  return (
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {props.isAdmin ? (
              <ContentEditable
                className="section-heading text-white"
                html={props.data.title} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={e => props.handleTextChange(e, "AboutUs", "title")} // handle innerHTML change
                tagName={"h2"}
              />
            ) : (
              <h2 className="section-heading text-white">{props.data.title}</h2>
            )}
            <hr className="light my-4" />
            {props.isAdmin ? (
              <ContentEditable
                className="text-faded mb-4"
                html={props.data.message} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={e => props.handleTextChange(e, "AboutUs", "message")} // handle innerHTML change
                tagName={"p"}
              />
            ) : (
              <p className="text-faded mb-4">{props.data.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string
  }),
  isAdmin: PropTypes.bool,
  handleTextChange: PropTypes.func
};

export default AboutUs;
