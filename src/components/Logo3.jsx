import React, { Component } from 'react'
import styled from 'styled-components'

import logo2 from '../create_icon.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo3 extends Component {
    render() {
        return (
            <Wrapper href="/movies/create">
                <img src={logo2} width="50" height="50" alt="/movies/create" />
            </Wrapper>
        )
    }
}

export default Logo3