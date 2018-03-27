import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

const SectionHeader = props => {
  return (
    <div className="section-header d-flex align-items-center flex-column">
      <ContentEditable
        className="section-title"
        href="#page-top"
        html={props.data.title}
        disabled={!props.isAdmin}
        onChange={e => props.handleTextChange(e, "MenuHeader", "title")}
        tagName={"h3"}
      />
      <ContentEditable
        className="section-slogan"
        href="#page-top"
        html={props.data.slogan}
        disabled={!props.isAdmin}
        onChange={e => props.handleTextChange(e, "MenuHeader", "slogan")}
        tagName={"h2"}
      />
      <ContentEditable
        className="section-msg text-center"
        href="#page-top"
        html={props.data.message}
        disabled={!props.isAdmin}
        onChange={e => props.handleTextChange(e, "MenuHeader", "message")}
        tagName={"p"}
      />
    </div>
  );
};

SectionHeader.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    slogan: PropTypes.string,
    message: PropTypes.string
  }),
  isAdmin: PropTypes.bool.isRequired,
  handleTextChange: PropTypes.func
};

export default SectionHeader;
