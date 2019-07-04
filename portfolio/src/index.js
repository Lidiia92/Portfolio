import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {library, dom } from '@fortawesome/fontawesome-svg-core';
import {faCircle, faEllipsisH, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

library.add(faGithubSquare, faLinkedin, faCircle, faEllipsisH, faAngleDown, faAngleUp, faReact, faCss3Alt);
dom.watch()

const Root = () => (
    <Router>
        <Switch>
        <Route
            path='/'
            render={(props) => <App {...props} />}
            />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));
