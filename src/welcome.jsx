import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import App from './App';


class Welcome extends Component {
    render() { 
        return (  
            <div>
                <Router>
                 <Switch>
                    <Route exact path="/Portfolio">
                        <App />
                    </Route>
                </Switch>
            </Router>
            </div>  
        );
    }
}
 
export default Welcome;