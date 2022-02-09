import React from "react"
import {Container} from "react-bootstrap"

const AUTH = {
    client_id: 'bfe85378212a41e28d75b148ed4136bd',
    response_type: 'code',
    redirect_uri: 'http://localhost:3000',
    scope: 'streaming',

}

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${AUTH.client_id}&response_type=${AUTH.response_type}&redirect_uri=${AUTH.redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{minHeight: "100vh"}}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}
