import React from "react";
import "./Button.css";

const Button = ({ typeTarget = false, downloadPDF, link, children }) => {
  return <a className="discover-me" target={typeTarget ? "_blank" : "_self"} href={link} download={downloadPDF}>{children}</a>;
};

export default Button;
