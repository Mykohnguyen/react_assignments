import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import './App.css';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
    state = {
        loading: false,
        persons: [
            { name: 'Michael', location: 'Iowa' },
            { name: 'Chris', location: 'Louisana' },
            { name: 'Peter', location: 'Nevada' },
            { name: 'Jason', location: 'Nevada' },
        ],
    };

    // componentDidMount() {
    //     // 测试 devServer 的代理功能
    //     // fetch('/api/category')
    //     //     .then(resp =>resp.json())
    //     //     .then(res => console.log('here here', res));
    // }

    nameChanged=(event) => {
        this.setState({
            loading: true,
            persons: [
                { name: event.target.value, location: 'Iowa' },
                { name: 'Chris', location: 'Louisana' },
                { name: 'Peter', location: 'Nevada' },
                { name: 'Jason', location: 'Nevada' },
            ],
        });
    }
    eventhandler=() => {
        this.setState({
            loading: true,
            persons: [
                { name: 'Michael', location: 'Iowa' },
                { name: 'Christopher', location: 'Louisana' },
                { name: 'Peter', location: 'Nevada' },
                { name: 'Jason', location: 'Nevada' },
            ],
        });
    }
    render() {
        return (
            <div className="App" >
                <button onClick={this.eventhandler} />
                <UserOutput
                    name={this.state.persons[0].name}
                    location={this.state.persons[0].location} />
                <UserOutput
                    name={this.state.persons[1].name}
                    location={this.state.persons[1].location} />
                <UserOutput
                    name={this.state.persons[2].name}
                    location={this.state.persons[2].location} />
                <UserOutput
                    name={this.state.persons[3].name}
                    location={this.state.persons[3].location} />
                <UserInput
                    changed={this.nameChanged}>{this.state.persons[0].name}
                </UserInput>
            </div>


        );
    }
}

export default App;
