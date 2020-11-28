import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout';
import Allegro from './pages/Allegro';
import OfferDetailsPage from './pages/ProductDetails/containers/OfferDetailsPage'
import './custom.css'
import MainCategoriesReports from './pages/MyMeals/components/MainCategoriesReports'



export default () => (
    <Layout >
                {/* <Route exact path='/' component={Allegro} /> */}
                <Route path='/wyszukiwarka-produktow' component={Allegro} />
                <Route path='/szczegoly-oferty' component={OfferDetailsPage} />
                <Route path='/raport-kategorii' component={MainCategoriesReports} />
    </Layout>
);
