var React = require("react");
var ReactDOM = require("react-dom");
import {Route, Router, browserHistory, NotFoundRoute, Link} from 'react-router';

// Modules Required
var TodoItem = require("./todoItem");
var InputItem = require("./inputItem");
var About = require("./about");
var Error = require("./error");

// Styles
require("./css/index.css");

//App component
var App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
        <Route path={'*'} component={Error}></Route>
      </Router>
    )
  }
})

//create component
var TodoComponent = React.createClass({
  //initial state of the app
  getInitialState: function(){
    return{
      todos: ["do stuff 1", "do stuff 2", "do stuff 3", "do stuff 4", "do-stuff-5"],
    }
  },

  //render function - this part is where most stuff happens
  render: function(){

    //cycle through todos list using nested component
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} deleteThis={this.deleteThis}/>
      )
    }.bind(this));

    //return the DOM
    return(
      <div id="todo">
        <h1>To-Do App</h1>
        <Link to="/about">About Me</Link>
        <ul>
          {todos}
        </ul>
        <InputItem onAdd={this.onAdd} />
      </div>
    );
  },//end of render

  //Custom Functions
  deleteThis: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    })

    this.setState({
      todos: updatedTodos
    })
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }

})// end of TodoComponent

//render component
ReactDOM.render(<App/>, document.getElementById("todo-wrapper"));
