import React, {Children, Component}from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }

    }
    componentDidCatch(error,info){
        this.setState({hasError:true});/*if there is an error it will show 'Ooops! That is not GOOD....!' */
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooops! That is not GOOD....!</h1>;
        }
        return this.props.children;/*cardlist  */
    }
    
}
export default ErrorBoundry;