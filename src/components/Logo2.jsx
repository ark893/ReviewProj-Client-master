import React, { Component } from 'react'
import styled from 'styled-components'

import logo2 from '../list_icon.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo2 extends Component {
    render() {
        return (
            <Wrapper href="/movies/list">
                <img src={logo2} width="50" height="50" alt="/movies/list" />
            </Wrapper>
        )
    }
}

export default Logo2