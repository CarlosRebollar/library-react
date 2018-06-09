import React, { Component } from 'react';

import PublicLibrary from '../PublicLibrary/PublicLibrary'
import NavbarItems from '../../components/Navigation/NavigationItems/navigationItems';

class Library extends Component {
    state = {
        navItems: [
            { link: 'https://carlosrebollar.github.io/library-react/', text: 'Home' },
            { link: 'https://carlosrebollar.github.io/library-react/catalog', text: 'Catalog' },
            { link: 'https://carlosrebollar.github.io/library-react/contact', text: 'Contact' }
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