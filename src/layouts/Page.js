import React from "react";

import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const Page = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
