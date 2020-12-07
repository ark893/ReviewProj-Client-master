import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Logo2 from './Logo2'
import Logo3 from './Logo3'
import Links from './Links'

import './link.css'

// const Container = styled.div.attrs({
//     className: 'container',
// })``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <div className = 'container'>
                <Nav>
                    <div className = 'icon'>
                        <Logo />
                    
                        <div className = 'name'>
                            {
                                'The Review Site'
                            }
                        </div>
                    </div>
                    
                    <div className= 'icon'>
                        <Logo2/>
                    
                        <div className = 'name'>
                            {
                                'Movies List'
                            }
                        </div>
                    </div>
                    <div className = 'icon'>
                        <Logo3/>
                    
                        <div className = 'name'>
                            {
                                'Create Entry'
                            }
                        </div>
                    </div>
                    <Links />
                </Nav>
            </div>
        )
    }
}

export default NavBar