import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Allegro from './components/Allegro';
import LoginPage from './components/loginAndRegistration/LoginPage'
import OfferDetailsPage from './components/offerDetails/OfferDetailsPage'
import './custom.css'
import MainCategoriesReports from './components/categoriesReports/MainCategoriesReports'



export default () => (
    <Layout >
                {/* <Route exact path='/' component={Allegro} /> */}
                <Route path='/wyszukiwarka-produktow' component={Allegro} />
                <Route path='/szczegoly-oferty' component={OfferDetailsPage} />
                <Route path='/raport-kategorii' component={MainCategoriesReports} />
    </Layout>
);
