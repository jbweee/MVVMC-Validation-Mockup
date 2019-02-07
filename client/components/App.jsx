import React, {Component} from 'react';
import './styles/App.css';
import Form from './views/Form.jsx';
// import People from './views/People.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     people: [
        //         {
        //             "firstName": "Justin",
        //             "lastName": "Bui",
        //             "middleInitial": "Y",
        //             "email": "abc@123.com",
        //             "age": 24,
        //             "address": "Normal Dr",
        //             "city": "Seattle",
        //             "state": "WA",
        //             "zip": "987654"
        //         }, 
        //         {
        //             "firstName": "Brian",
        //             "lastName": "Lasota",
        //             "middleInitial": "",
        //             "email": "def@456.com",
        //             "age": 42,
        //             "address": "Alright Ave",
        //             "city": "Lynnwood",
        //             "state": "WA",
        //             "zip": "654321"
        //         }
        //     ],
        //};
    }
    
    render() {
        // return (
        //     <div>
        //         <People people={this.state.people}></People>
        //     </div>
        // )
        return (
            <div className='App'>
                <div>
                    <Form />
                </div>
            </div>
        )
    }
}

export default App;