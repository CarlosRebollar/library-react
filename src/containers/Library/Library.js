import React, { Component } from 'react';

import PublicLibrary from '../PublicLibrary/PublicLibrary'
import NavbarItems from '../../components/Navigation/NavigationItems/navigationItems';

class Library extends Component {
    state = {
        navItems: [
            { link: '/', text: 'Home' },
            { link: '/catalog', text: 'Catalog' },
            { link: '/contact', text: 'Contact' }
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