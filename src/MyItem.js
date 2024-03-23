import React from "react";

class Item extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            clicks : 0,
            TotalRemaining :100
        }
    }
    
    clickMe(){
        this.setState({
            clicks : this.state.clicks + 1,
            TotalRemaining : this.state.TotalRemaining -1
        })
    }

render(){
    return(
        <div>
            <h1 onClick = {()=>this.clickMe()}>
                Hello from {this.props.name}
            </h1>
            <spam>{this.state.clicks} is the number of clicks. {this.state.TotalRemaining}</spam>
        </div>
    )
}
}

export default Item;