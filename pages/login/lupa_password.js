import React, { Component } from 'react';
import Link from 'next/link';
import * as Endpoint from '../../service/Endpoint';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const api = Endpoint.BASE_URL;
const backend = Endpoint.BASE_URL_WEB;
const key = Endpoint.KEY_YAYASAN;
class LupaPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            is_guest: false,

            go_back: false,
            go_home: false,
            yayasan: []
        }
    }

    componentDidMount() {
        axios.get(Endpoint.GET_YAYASAN).then(
            res => {
                this.setState({ yayasan: res.data.data });
            }
        )
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    send() {
        const {
            email
        } = this.state

        if (email == null || email == '') {
            alert('Email Tidak Boleh Kosong')
        } else {
            const parameter = {
                "email": email
            }

            axios.post(Endpoint.FORGOT_PASSWORD, parameter).
                then(response => {
                    if (response.data.status == 400) {
                        alert(response.data.message)
                    } else {
                        alert('Email Terkirim, mohon cek email untuk reset password !')
                        this.setState({ go_home: true })
                    }
                }).catch(error => {
                    console.log(error)
                })
        }
    }
    callbackInput = (name, value) => {
        this.setState({ [name]: value })
    }
    guestLogin() {
        cookies.set('is_guest', true);
        this.setState({ is_guest: true })
    }

    render() {
        const {
            email, go_back, go_home, yayasan, is_guest
        } = this.state
        if (is_guest == true) {
            window.location.href = "/"
        }
        if (go_back)
            return <Redirect exact to="/login" />
        else if (go_home)
            return <Redirect exact to="/home" />

        return (
            <div className="base-login">
                <div className="kontener">
                    <div className="login-logo" style={{ flexDirection: 'column' }}>
                        
                    </div>
                    <div className="form-login">
                        <h3 style={{ fontWeight: 'bold' }}>Lupa Password</h3><br />
                        <input type="email" className="form-control lgn-frm" placeholder="Masukkan Email" name="username" value={email} onChange={(e) => this.handleInputChange(e)} /><br />
                        <div style={{ marginTop: '10px', color: 'blue', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Link href="/login/register">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Register</label>
                            </Link>
                            <Link href="/login">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Login</label>
                            </Link>
                        </div>
                       <button type="button" className="btn btn-success" onClick={() => this.send()}>CONTINUE</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default LupaPassword;