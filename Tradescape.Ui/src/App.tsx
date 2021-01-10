import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout';
import SearchEngineMainView from './pages/SearchEngine/containers/SearchEngineMainView';
import OfferDetailsPage from './pages/ProductDetails/containers/OfferDetailsPage'
import './custom.css'
import MainCategoriesReports from './pages/MyMeals/components/MainCategoriesReports'
import { AuthProvider } from './pages/Auth/contexts/AuthContext';
import { Container } from 'react-bootstrap';

import Dashboard from './pages/Auth/Dashboard'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import PrivateRoute from './pages/Auth/PrivateRoute'
import ForgotPassword from './pages/Auth/ForgotPassword'
import UpdateProfile from './pages/Auth/UpdateProfile';



export default () => (
    <Layout >
        {/* <Router> */}
            {/* <AuthProvider> */}
                <Switch>
                    {/* <Route exact path='/' component={Allegro} /> */}
                    <Route path='/wyszukiwarka-produktow' component={SearchEngineMainView} />
                    <Route path='/szczegoly-oferty' component={OfferDetailsPage} />
                    <Route path='/raport-kategorii' component={MainCategoriesReports} />
                    <Container
                    className='d-flex align-items-center justify-content-center'
                    style={{ minHeight: '100vh' }}
                    >
                    <div className='w-100' style={{ maxWidth: '400px' }}>
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <PrivateRoute path='/update-profile' component={UpdateProfile} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/login' component={Login} />
                        <Route path='/forgot-password' component={ForgotPassword} />
                    </div>
                    </Container>
                </Switch>
            {/* </AuthProvider> */}
        {/* </Router> */}
    </Layout>
);
