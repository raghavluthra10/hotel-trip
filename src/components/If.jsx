import React from "react";

const If = ({ condition = false, children }) => {
  return condition ? children : null;
};

export default If;
