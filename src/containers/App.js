import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
class App extends React.Component {
    constructor(){
        super()
        this.state={
        robots:[],/*when we start app this will be empty array */
        searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')/*server that gives users(robots) */
        .then(response=>response.json())
        .then(users=>{this.setState({robots:users})});
    }
    onSearchChange=(event)=> {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots,searchfield}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return(
            /*whenever we write into searchbox this.onSearchBox tells the app that event has occured and calls onSearchChange() with the event 
            and updates searchfield state to whatever input is entered through keyboard.now we can communicate with cardlist */
            <div className="tc">
                <h1 className='f1'> ROBO FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/> 
                    </ErrorBoundry>
                    
                </Scroll>
                
            </div>
            /*cardlist is children of scroll. and scroll can rander it. */
        );
        
    }

}
export default App;