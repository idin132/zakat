import react, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as Endpoint from '../../service/Endpoint';

const cookies = new Cookies();

const api = Endpoint.BASE_URL;
const backend = Endpoint.BASE_URL_WEB;
const key = Endpoint.KEY_YAYASAN;
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            fcmToken: cookies.get('fcmToken'),
            is_guest: false,

            go_home: false,
            yayasan: []
        }
    }

    componentDidMount() {
        axios.get(Endpoint.GET_YAYASAN).then(
            res => {
                sessionStorage.setItem("isAdmin", res.data.data.is_biaya_admin)
                this.setState({ yayasan: res.data.data });
            }
        )
    }

    handleInputChange(e) {
        const { name, value } = e.target
        // if (name == "fcmToken") {
        //     this.setState({ [name]: "12321232123213"})
        // } else {
        this.setState({ [name]: value })
        // }
    }

    guestLogin() {
        cookies.set('is_guest', true);
        this.setState({ is_guest: true })
    }

    doLogin() {
        const {
            username, password, fcmToken, go_home
        } = this.state
        // console.log(username, password, fcmToken)

        const parameter = {
            "username": username,
            "password": password,
            "fcmToken": cookies.get('fcmToken'),
            "key_yayasan": Endpoint.KEY_YAYASAN
        }

        axios.post(Endpoint.LOGIN, parameter, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.data.status == 400) {
                alert(response.data.error)
            } else if (response.data.access_token) {
                axios.get(Endpoint.GET_USER, {
                    headers: {
                        'Authorization': response.data.access_token
                    }
                }).then(response2 => {
                    // console.log(response2)
                    cookies.set('username', username);
                    cookies.set('user_id', response2.data.id);
                    cookies.set('accessToken', response.data.access_token);

                    this.setState({ go_home: true })
                }).catch(error => {
                    console.log(error)
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {
            username, password, fcmToken, go_home, is_guest, yayasan
        } = this.state
        let user_id = cookies.get('user_id');
        if (user_id != null) {
            return <Redirect exact to="/dashboard" />
        }
        if (is_guest == true) {
            window.location.href = "/"
        }
        return (
            <div className="base-login">
                <div className="kontener">
                    <div className="login-logo" style={{ flexDirection: 'column' }}>
                    <img style={{ maxWidth: '25vh',maxHeight: '20vh'}} src="/logo_head_zakat.png" alt=""  />

                    </div>
                    <div className="form-login">
                        <h3 style={{ fontWeight: 'bold' }}>Login</h3><br />
                        <input type="text" className="form-control lgn-frm" placeholder="Username atau Email" name="username" value={username} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="password" className="form-control lgn-frm" placeholder="Password" name="password" value={password} onChange={(e) => this.handleInputChange(e)} /><br />
                        <div style={{ display: 'flex', color: 'blue', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                            <Link href="/login/lupa_password">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Lupa Password</label>
                            </Link>
                            <Link href="/login/register">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Register</label>
                            </Link>
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => this.doLogin()}>Login</button>
                        
                    </div>
                </div>
            </div>

        )
    };
}

export default Login;