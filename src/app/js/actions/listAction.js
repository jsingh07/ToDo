//var mongoose = require('mongoose');

export function fetchList(){
    return {
        type: 'FETCH_LIST'
    }
}

export function addTaskToList(task){
    return{
        type: 'ADD_TASK',
        payload: task
    }
}
/*export function createList(){
    return function(dispatch){
        dispatch({type: "NEW_LIST"});
        mongoose.connect('mongodb://jsingh:hello@ds153501.mlab.com:53501/todoredux');
    }
}


export function addToList(){


}

export function delFromList(){


}*/
