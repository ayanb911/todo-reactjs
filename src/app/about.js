var React = require("react")
import {Link} from "react-router";

require("./css/about.css");

var AboutComponent = React.createClass({
  render: function(){
    return(
      <div className = "about">
      <h1>This is the about me</h1>
      <Link to = "/">Home</Link>
      </div>
    )
  }
})

module.exports = AboutComponent;
