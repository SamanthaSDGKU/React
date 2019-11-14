// dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import App from './Components/App';
import About from './Components/About';


const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/about" component={About} />
        
    </Switch>
</App>

export default AppRoutes;