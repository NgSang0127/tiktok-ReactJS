import './GlobalStyles.scss';
import PropTypes from "prop-types";
import React from "react";
function GlobalStyles({ children }) {
    // return React.children.only(children); chỉ nhận 1 prop children duy nhất
    return children;
}
GlobalStyles.propTypes ={
    children:PropTypes.node.isRequired,
}
export default GlobalStyles;
