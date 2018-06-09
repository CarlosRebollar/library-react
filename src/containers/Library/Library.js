import React, { Component } from 'react';

import PublicLibrary from '../PublicLibrary/PublicLibrary'
import NavbarItems from '../../components/Navigation/NavigationItems/navigationItems';

class Library extends Component {
    state = {
        navItems: [
            { link: '/library-react/', text: 'Home' },
            { link: '/library-react/catalog', text: 'Catalog' },
            { link: '/library-react/contact', text: 'Contact' }
        ]
    }
    render() {
        return (
            <div>
                <NavbarItems navItems={this.state.navItems} />
                <PublicLibrary/>
            </div>
        );
    }
}

export default Library;