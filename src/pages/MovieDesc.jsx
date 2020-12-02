import React, { Component } from 'react'
import api from '../api'
import './MovieDesc.css'

export default class MovieDesc extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            comments: '',
            duration: '',
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            comments: movie.data.data.comments,
            duration: movie.data.data.duration
        })
    }
//hi

    render(){
        const {name, comments, duration} = this.state;
        console.log(name, comments, duration);
        return(
            <div className='Container'>
            {
                <div className='DescHold'>
                    {
                    'Description: '
                        + comments
                    }
                </div>
            }
            </div>
        )
    }
}

