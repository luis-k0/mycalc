import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// class Button extends React.Component {
//   // handleClick = () => {
//   //   this.props.clickHandler(this.props.name);
//   // };

//   render() {
//     const className = [
//       "component-button",
//       this.props.orange ? "orange" : "",
//       this.props.wide ? "wide" : "",
//     ];

//     return (
//       <div className={className.join(" ").trim()}>
//         <button onClick={() => this.props.clickHandler(this.props.name)}>
//           {this.props.name}
//         </button>
//       </div>
//     );
//   }
// }
const button = props => {
  const className = [
    "component-button",
    props.orange ? "orange" : "",
    props.wide ? "wide" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => props.clickHandler(props.name)}>
        {props.name}
      </button>
    </div>
  );
};
button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default button;
