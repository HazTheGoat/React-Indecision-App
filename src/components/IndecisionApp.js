import React from 'react';
import AddOption from './addoption';
import Option from './option';
import Options from './options';
import Header from './header';
import Action from './action';

class IndecisionApp extends React.Component{
    constructor(props){
        super();

        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.updateOptionsLocalStorage = this.updateOptionsLocalStorage.bind(this);

        this.state = {
            title: "Indecision App",
            subTitle: "Put your life in the hands of a computer",
            options: props.options
        }
    }

    componentDidMount(){
        try {
            const options = JSON.parse(localStorage.getItem("options"));
            if(options){
                this.setState(() => ({ options: options}))
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState){
        // Update localstorage
        if(this.state.options.length != prevState.options.length){
            this.updateOptionsLocalStorage()
        }
        
    }

    updateOptionsLocalStorage(){
        const options = JSON.stringify(this.state.options);
        localStorage.setItem("options", options);
    }

    handleRemoveOption(e){
        this.setState((prevState) => ({ options: prevState.options.filter((option, i) => i != e)}))
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const pick = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[pick]);
    }

    handleAddOption(option) {
        if(!option){
            return 'Enter a valid value to add';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This value already exists';
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
        }
    }

    render(){
        return( 
            <div>
                <Header subTitle={ this.state.subTitle } />
                <Action handlePick={ this.handlePick } hasOptions={ this.state.options.length > 0 ? true : false}/>
                <Options handleRemoveOption={ this.handleRemoveOption } handleRemoveAll={ this.handleRemoveAll } options={ this.state.options } />
                <AddOption handleAddOption={ this.handleAddOption } />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;
