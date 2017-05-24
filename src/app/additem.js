var React = require('react');

require('./css/index.css');

class Additem extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                    <input id="input" type="text" required ref="newTask"/>
                    <input type="submit" value="Submit"/>
            </form>
        );
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newTask.value);
    }
};

module.exports = Additem;
