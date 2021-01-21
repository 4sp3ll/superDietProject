import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout';
import SearchEngineMainView from './pages/SearchEngine/containers/SearchEngineMainView';
import OfferDetailsPage from './pages/ProductDetails/containers/OfferDetailsPage'
import './custom.css'
import MainCategoriesReports from './pages/MyMeals/components/MainView'
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

                            <PrivateRoute path='/wyszukiwarka-produktow' component={SearchEngineMainView} />
                            <PrivateRoute path='/szczegoly-oferty' component={OfferDetailsPage} />
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
