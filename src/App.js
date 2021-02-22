import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Panel from './pages/panel';
import Chat from './pages/chat';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/panel' component={ Panel } />
                <Route exact path='/chat' component={ Chat } />
            </Switch>
        </div>
    );
}

export default App;