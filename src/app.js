// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

class IndecisionApp extends React.Component{
    constructor(){
        super();
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);

        this.state = {
            title: "Indecision App",
            subTitle: "Put your life in the hands of a computer",
            options: []
        }
    }

    handleRemoveOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                }
            })
        }
    }

    render(){
        return( 
            <div>
                <Header title={ this.state.title } subTitle={ this.state.subTitle } />
                <Action handlePick={ this.handlePick } hasOptions={ this.state.options.length > 0 ? true : false}/>
                <Options handleRemoveOptions={ this.handleRemoveOptions } options={ this.state.options } />
                <AddOption handleAddOption={ this.handleAddOption } />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subTitle }</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return(
            <div>
                <button disabled={ !this.props.hasOptions } onClick={this.props.handlePick}>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    render(){
        return (
            <div>
                <button onClick={this.props.handleRemoveOptions }>Remove All</button>
                { this.props.options.map((option, i) => <Option key={i} option={option} />)}
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                { this.props.option }
            </div>
        )
    }
}

class AddOption extends React.Component {
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
        this.setState(() => {
            return {
                errorMessage
            }
        })
        e.target.reset();
        
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))