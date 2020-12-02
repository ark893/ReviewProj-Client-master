import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import 'react-table-6/react-table.css'

import './MoviesList.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`



// class UpdateMovie extends Component {
//     updateUser = event => {
//         event.preventDefault()

//         window.location.href = `/movies/update/${this.props.id}`
//     }

//     render() {
//         return <Update onClick={this.updateUser}>Update</Update>
//     }
// }

// class DeleteMovie extends Component {
//     deleteUser = event => {
//         event.preventDefault()

//         if (
//             window.confirm(
//                 `Do you want to delete the movie ${this.props.id} permanently?`,
//             )
//         ) {
//             api.deleteMovieById(this.props.id)
//             window.location.reload()
//         }
//     }

//     render() {
//         return <Delete onClick={this.deleteUser}>Delete</Delete>
//     }
// }


// class links extends Component{
//     render(){
//         return(
//             <React.Component>
//                 <Link to="/"+props.id>
//                  </Link>
//             </React.Component>
//         )
//     }
// }

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.kdideas().then(response => response.json()).then(movies => {
            console.log("movies", movies);
            this.setState({
                movies: movies.data,
            })

            // this.setState({
            //     movies: movies.data.data,
            //     isLoading: false,
            // })
        })
    }

    // function test(response){
    //     //console.log(movies);
    //     return response.json();
    // }
    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        return (
            <div className='Container'>
            <div className="CardHold">
                {
                    //"test"
                    this.state.movies.map((element)=>(
                    <Link to={"/movies/"+element._id} >
                    <div className="Card">

                        <div className="Name">
                            {
                                'Name: '+
                                element.name
                            }
                        </div>
                       <div className="ImgHold"><img className="Toto" src={element.url} /></div>
                        <div className="Name">
                            {
                                'Duration: '+
                                element.duration
                            }
                        </div>
                        </div>
                        </Link>

                    ))
                }

            </div>
            </div>
        )
    }
}



export default MoviesList