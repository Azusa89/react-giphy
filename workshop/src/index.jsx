import "../assets/stylesheets/application.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

//functional react component
// const Hello = (props) => {
//   const { greeting, name } = props;
//   return (
//     <h1>
//       {props.greeting} {props.name}
//     </h1>
//   );
// };

//class react component
// class Hello extends React.Component {
//   render() {
//     const { greeting, name } = this.props;
//     return (
//       <h1>
//         {greeting} {name}
//       </h1>
//     );
//   }
// }

const conatiner = document.querySelector("#root");
const root = ReactDOM.createRoot(conatiner);
root.render(<App />);
