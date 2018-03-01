class Counter extends React.Component{
    constructor(){
        super();

        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }
    handlePlusOne(){
        console.log("child was clicked")
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <AddOne handlePlusOne={ this.handlePlusOne } />
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

class AddOne extends React.Component{
    constructor(){
        super();
        this.handlePlusOne = this.handlePlusOne.bind(this);
    }

    handlePlusOne(){
        this.props.handlePlusOne();
    }
    
    render(){
        return(
            <button onClick={this.handlePlusOne}>+1</button>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))