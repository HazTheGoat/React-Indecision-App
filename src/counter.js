class Counter extends React.Component{
    constructor(props){
        super();

        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            defaultCount: props.count,
            count: props.count
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
                count: this.state.defaultCount
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

Counter.defaultProps = {
    count: 0
}

const AddOne = (props) => {
    return(
        <button onClick={ props.handlePlusOne }>+1</button>
    )
}

ReactDOM.render(<Counter count={20} />, document.getElementById("app"))