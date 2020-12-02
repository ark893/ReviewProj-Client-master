import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            comments: '',
            duration: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const comments = event.target.validity.valid
            ? event.target.value
            : this.state.comments

        this.setState({ comments })
    }

    handleChangeInputTime = async event => {
        const duration = event.target.value
        this.setState({ duration })
    }

    handleUpdateMovie = async () => {
        const { id, name, comments, duration } = this.state
        const arrayComments = comments.split('/')
        const payload = { name, comments:arrayComments, duration }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                name: '',
                comments: '',
                duration: '',
            })
        })
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

    render() {
        const { name, rating, time } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Comments: </Label>
                <InputText
                    type="text"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Duration: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdateMovie}>Update Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate