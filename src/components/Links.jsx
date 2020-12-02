import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    The Review Site
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Movies & TV Shows
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create A Movie Or A TV Show
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links