import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './link.css'


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
                <div className='container'>
                {/* <div className = 'names'>
                    {
                        'The Review Site'
                    }
                </div> */}
                <Collapse>
                    <List>
                        <Item>
                            {/* <Link to="/movies/list" className="nav-link">
                                
                                    <div className = 'icon'>
                                        List Movies & TV Shows
                                    </div>
                                 
                            </Link> */}
                        </Item>
                        <Item>
                            {/* <Link to="/movies/create" className="nav-link">
                               
                                    <div className = 'icon'>
                                    Create A Movie Or A TV Show
                                    </div>
                            </Link> */}
                        </Item>
                    </List>
                </Collapse>
                </div>
            </React.Fragment>
        )
    }
}

export default Links