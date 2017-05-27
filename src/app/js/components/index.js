var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from "react-redux"
import store from "../store"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';

//import actions
import { fetchList, delTaskList, addTaskToList } from "../actions/listAction"
//import {addTaskToList} from "../actions/listAction"
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
        this.state = {todos: []};
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    render(){
        var todos = this.props.list;
        if(todos.length > 0){
            todos = todos.map(function(item, index){
                return(<TaskItem key={index} task={item} onDelete={this.delete}/>);
            }.bind(this));
        }

        return(
            <div id="todo-list">
                <ul className="collection">{todos}</ul>
                <Additem onAdd={this.add}/>
            </div>
        );
    }

    delete(task){
        this.props.dispatch(delTaskList(task));
        this.setState({todos: this.props.list});
    }
    add(task){
        this.props.dispatch(addTaskToList(task));
        this.setState({todos: this.props.list});
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('todo-container'));
