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

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            duration: '',
            comments: '',
            url:''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const comments = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ comments })
    }

    handleChangeInputurl = async event => {
        const url = event.target.validity.valid
            ? event.target.value
            : this.state.url

        this.setState({ url })
    }

    handleChangeInputTime = async event => {
        const duration = event.target.value
        this.setState({ duration })
    }

    handleIncludeMovie = async () => {
        const { name, comments, duration, url } = this.state
        //const arrayComments = comments.split('/')
        const payload = { name, comments, duration, url }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                comments: '',
                duration: '',
                url : '',
            })
        })
    }

    render() {
        const { name, rating, time, url } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>IMAGE URL: </Label>
                <InputText
                    type="text"
                    value={url}
                    onChange={this.handleChangeInputurl}
                />

                <Label>Duration: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert