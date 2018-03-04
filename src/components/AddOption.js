import React from 'react';

export default class AddOption extends React.Component {
    constructor(){
        super();

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            errorMessage: ''
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const errorMessage = this.props.handleAddOption(option)
        this.setState(() => ({errorMessage}))

        if(!errorMessage){
            e.target.reset();
        }
    }

    render(){
        return (
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button type="submit">Add option</button>
                </form>
            </div>
        )
    }
}
