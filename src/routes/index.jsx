import React from 'react';
import {Route} from 'react-router-dom';

// Import views
import Home from '../views/Home';
import Settings from '../views/Settings'

export default function Routes(props){

    return (
        <div className="routes-index">

            <Route exact path="/game" render={(router_props) => <Home {...props} {...router_props} />}/>
            <Route exact path="/" render={(router_props) => <Settings {...props} {...router_props} />} />

        </div>
    )
}
