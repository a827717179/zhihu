import React from 'react';
import Router from './router/index'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <Router/>
            </div>
        )
    }
}

export default App;
