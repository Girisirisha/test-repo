import React, {Component} from "react"

class Welcome extends Component{
render(){
    return <h1>

        {this.props.name} {this.props.heroName}
    </h1>
    // {this.props.children}
}

}

export default Welcome;
