import React from 'react';
import {Route} from 'react-router-dom';

// Import views
import Home from '../views/Home';

export default function Routes(){
    return (
        <div className="routes-index">

            <Route exact path="/" render={(props) => <Home {...props} />}/>


        </div>
    )
}
