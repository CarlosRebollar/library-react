import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Bootstrap 
import Grid from 'react-bootstrap/lib/Grid';

import Home from '../../components/Pages/Home/Home';
import Catalog from '../../components/Pages/Catalog/Catalog';
import Contact from '../../components/Pages/Contact/Contact';

class PublicLibrary extends Component {
    
    render() {
        return (
            <Grid>
                <Switch>
                    <Route path='/library-react/catalog' component={Catalog} />
                    <Route path='/library-react/contact' component={Contact} />
                    <Route path='/library-react/' component={Home}/>
                </Switch>
            </Grid>
        );
    }
}

export default PublicLibrary;