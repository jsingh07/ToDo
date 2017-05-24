var React = require('react');
var ReactDom = require('react-dom');


class Task extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render(){
        return(
            <li className="collection-item">
                <div className="task-item">
                    <span className="task-name">{this.props.task}</span>
                    <span className="delete" onClick={this.handleDelete}>x</span>
                </div>
            </li>
        );
    }
    handleDelete(){
        this.props.onDelete(this.props.task)
    }
};


module.exports = Task;
