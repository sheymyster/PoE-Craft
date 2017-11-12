import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNewAffix} from '../actions/index';


class AddModButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.addNewAffix()}>ADD</button>
        );
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addNewAffix: addNewAffix}, dispatch);
}
export default connect(null, matchDispatchToProps)(AddModButton);
