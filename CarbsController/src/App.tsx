import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './ui/Layout';
import SearchEngineMainView from './pages/SearchEngine/SearchEngineMainView';
import './custom.css'
import MainCategoriesReports from './pages/MyJourney/MainView'
import { AuthProvider } from './pages/Auth/contexts/AuthContext';

import Dashboard from './pages/Auth/Dashboard'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import PrivateRoute from './pages/Auth/PrivateRoute'
import ForgotPassword from './pages/Auth/ForgotPassword'
import UpdateProfile from './pages/Auth/UpdateProfile';

export default () => {

    return (
        <>
            <Router>
                <AuthProvider>
                    <Layout>
                        <Switch>
                            <Route path='/signup' component={Signup} />
                            <Route path='/login' component={Login} />
                            <Route path='/forgot-password' component={ForgotPassword} />

                            <PrivateRoute path='/find-product' component={SearchEngineMainView} />
                            <PrivateRoute path='/my-journey' component={MainCategoriesReports} />

                            <PrivateRoute path='/dashboard' component={Dashboard} />
                            <PrivateRoute path='/update-profile' component={UpdateProfile} />
                            <PrivateRoute exact path='/' component={SearchEngineMainView} />
                        </Switch>
                    </Layout>
                </AuthProvider>
            </Router>
        </>
    )
}
