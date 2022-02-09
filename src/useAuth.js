import {useEffect, useState} from 'react';
import axios from "axios";

export default function UseAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {

        axios
            .post('https://spauthtest.herokuapp.com/login', {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
            })
            .catch((err) => {
                // window.location = "/"
            })
            .finally(() => {
                window.history.pushState({}, null, "/")
            })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return

        const intervalRefreshToken = setInterval(() => {
            axios
                .post('https://spauthtest.herokuapp.com/refresh', {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch((err) => {
                    window.location = "/"
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(intervalRefreshToken);

    }, [refreshToken, expiresIn])


    return accessToken
}

