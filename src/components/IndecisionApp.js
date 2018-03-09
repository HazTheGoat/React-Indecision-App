import React from 'react';
import AddOption from './addoption';
import Option from './option';
import Options from './options';
import Header from './header';
import Action from './action';
import OptionModal from './optionmodal';

class IndecisionApp extends React.Component {
    state = {
        title: "Indecision App",
        subTitle: "Put your life in the hands of a computer",
        options: this.props.options,
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem("options"));
            if (options) {
                this.setState(() => ({options: options}))
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Update localstorage
        if (this.state.options.length != prevState.options.length) {
            this.updateOptionsLocalStorage()
        }

    }

    updateOptionsLocalStorage = () => {
        const options = JSON.stringify(this.state.options);
        localStorage.setItem("options", options);
    }

    handleRemoveOption = (e) => {
        this.setState((prevState) => ({
            options: prevState
                .options
                .filter((option, i) => i != e)
        }))
    }

    handleRemoveAll = () => {
        this.setState(() => ({options: []}))
    }

    handlePick = () => {
        const pick = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({selectedOption: this.state.options[pick]}))
    }

    handleCloseModal = () => {
        console.log("clicked")
        this.setState(() => ({selectedOption: undefined}))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This value already exists';
        } else {
            this.setState((prevState) => ({
                options: prevState
                    .options
                    .concat([option])
            }))
        }
    }

    render() {
        return (
            <div>
                <Header subTitle={this.state.subTitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0
                    ? true
                    : false}/>
                <Options
                    handleRemoveOption={this.handleRemoveOption}
                    handleRemoveAll={this.handleRemoveAll}
                    options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal
                    handleCloseModal={this.handleCloseModal}
                    selectedOption={this.state.selectedOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;
