var React = require('react');
var ReactDOM = require('react-dom');
//import {Router, Route, browserHistory, Link} from 'react-router';
require('./css/index.css');
require('./css/materialize.css');
require('./css/task.css');

const Additem = require('./additem');
const TaskItem = require('./task');

class App extends React.Component{
    render(){
      return(
        <div className="row">
            <TodoComp/>
        </div>
      );
    }
};

class TodoComp extends React.Component{
    constructor(){
        super();
        this.state = {todos: ['pick up pizza', 'make dinner', 'meeting at 4']};
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    render(){
        var todos = this.state.todos;
        console.log(todos);
        todos = todos.map(function(item, index){
            return(<TaskItem key={index} task={item} onDelete={this.delete}/>);
        }.bind(this));

        return(
            <div id="todo-list">
                <ul className="collection">{todos}</ul>
                <Additem onAdd={this.add}/>
            </div>
        );
    }

    delete(task){
        var  newTodo = this.state.todos.filter(function(val, index){
            return task !== val;
        });
        this.setState({todos: newTodo});
    }
    add(task){
        var newTodo = this.state.todos;
        newTodo.push(task);
        this.setState({todos: newTodo});
        console.log(this.state.todos);
    }
}

ReactDOM.render(<App />, document.getElementById('todo-container'));
