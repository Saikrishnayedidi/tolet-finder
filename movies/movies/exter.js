import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Exter extends react.Component {
    state = {
        firstName: '',
        showName: false
    }
    inputHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ firstName: updatedName });
        //console.log(updatedName);  
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({
            showName: true
        });
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.onSubmitHandler}>
                    <label>Enter the Name</label>
                    <input type="text"
                        name="firstName" onChange={this.inputHandler} value=
                        {this.state.firstName} />
                    <button type="submit" onClick={this.onSubmitHandler}>Submit</button>
                    {this.state.showName && <p>"FirstName: " {this.state.firstName}</p>}
                </form>
            </div>
        );
    }
}
export default Exter;