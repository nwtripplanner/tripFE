import { Grommet, Header } from 'grommet';
import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }

    render() { 
        return ( 
            <Grommet>
                <Header >
                <a href="link"><navwords>home</navwords></a>
                <a href="link"><navwords>explore</navwords></a>
                <a href="link"><navwords>my trips</navwords></a>
                </Header>
            </Grommet>
         );
    }
}
 
export default NavBar;