var React = require("react");
import {Link} from "react-router";

require("./css/error.css");

var Error = React.createClass({
  render: function(){
    return(
      <div className="error">
      <h1>404!</h1>
      <p>Where the heck did you come from? <Link to="/"> Go back!</Link></p>
      </div>
    )
  }
})

module.exports = Error;
