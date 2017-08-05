var React = require("react");

//Styles
require("./css/todoItem.css");

//create child component - TodoItem
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className = "item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.deleteItem}> x </span>
        </div>
      </li>
    )
  },

  //Custom Functions
  deleteItem: function(){
    this.props.deleteThis(this.props.item);
  }
})// end of TodoItem


module.exports = TodoItem;
