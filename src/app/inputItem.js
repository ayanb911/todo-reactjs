var React = require("react");

//Styles
require("./css/inputItem.css");

var InputComponent = React.createClass({
  render: function(){
    return(
      <form id="todoInput" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter Item" ref="NewItem"></input>
        <input type="submit" value="Add Item"></input>
      </form>
    );
  },
  addItem: function(e){
    e.preventDefault();
    this.props.onAdd(this.refs.NewItem.value);
  }
})

module.exports = InputComponent;
