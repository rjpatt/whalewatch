import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/Login';
import DashboardContainer from './containers/DashboardContainer';
import ContainersContainer from './containers/ContainersContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import SettingsContainer from './containers/SettingsContainer';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './ProtectedRoute.jsx';
//import Auth from './Auth.js';
// import listOfContainers from './components/afterLogin/listOfContainers';
// import dashBoard from './components/afterLogin/dashBoard';
// import notification from './components/afterLogin/notification';
import Form from './components/authentication/form'
import './styles.scss';
import AuthApi from './Context.js'

////for drag and drop 
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  const [userId, setUserId] = useState('');
  const [auth, setAuth] = useState(false); 
  console.log('user id within app.jsx', userId)
  const Auth = React.useContext(AuthApi);
 
  return ( 
    
      <DndProvider backend={HTML5Backend}>
      <AuthApi.Provider value = {{value: [auth, setAuth], value2: [userId, setUserId]}}>   
        <Router>
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route exact path="/nav" component={NavBar} />
            <ProtectedRoute exact path="/dashboard" auth={auth} userId = {userId} component={DashboardContainer}/>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/signup"><Form /></Route>
            <ProtectedRoute exact path="/containers"><ContainersContainer userId={userId} /> </ProtectedRoute>
            <ProtectedRoute exact path="/settings"><SettingsContainer userId={userId} /> </ProtectedRoute>
            <ProtectedRoute path="/notification"><NotificationsContainer userId={userId} /> </ProtectedRoute>
            //if user tries to go to any other path that isn't defined
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </AuthApi.Provider>
      </DndProvider>
    
  );
};

export default App;