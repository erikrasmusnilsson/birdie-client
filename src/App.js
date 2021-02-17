import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={ Home } />
            </Switch>
        </div>
    );
}

export default App;