var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from "react-redux"
import store from "../store"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';

//import actions
import { fetchList } from "../actions/listAction"
import {addTaskToList} from "../actions/listAction"
import * as actions from "../actions/listAction"


//import {Router, Route, browserHistory, Link} from 'react-router';
//CSS styling mports
require('../../css/index.css');
require('../../css/materialize.css');
require('../../css/task.css');
//Importing different view layers
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
}

@connect((store) => {
    return{
        fetching: store.fetching,
        list: store.list
    };
})
class TodoComp extends React.Component{
    componentWillMount() {
        this.props.dispatch(fetchList())
    }
    constructor(){
        super();
        this.state = {todos: ['pick up pizza', 'make dinner', 'meeting at 4']};
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    render(){
        var todos = this.state.todos;
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
        this.props.dispatch(addTaskToList());
        this.setState({todos: newTodo});
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('todo-container'));
