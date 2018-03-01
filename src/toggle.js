class VisibilityToggle extends React.Component{
    constructor(){
        super();

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            showDetails: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleToggleVisibility}>{this.state.showDetails ? 'Hide details' : 'Show details'}</button>
                { this.state.showDetails && <p>Lorem ipsum lera chi bnusem</p> }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))
