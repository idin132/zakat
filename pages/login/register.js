import React, { Component } from 'react';
import Link from 'next/link';
import * as Endpoint from '../../service/Endpoint';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const api = Endpoint.BASE_URL;
const backend = Endpoint.BASE_URL_WEB;
const key = Endpoint.KEY_YAYASAN;
class Daftar extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            nama: '',
            no_telp: '',
            password: '',
            password_confirm: '',
            alamat: '',
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
            username, email, nama, no_telp, password, password_confirm, alamat,
        } = this.state

        if (username == null || username == '') {
            alert('Username Tidak Boleh Kosong')
        } else if (email == null || email == '') {
            alert('Email Tidak Boleh Kosong')
        } else if (nama == null || nama == '') {
            alert('Nama Tidak Boleh Kosong')
        } else if (no_telp == null || no_telp == '') {
            alert('Nomor Telepon Tidak Boleh Kosong')
        } else if (password == null || password == '') {
            alert('Password Tidak Boleh Kosong')
        } else if (password_confirm == null || password_confirm == '') {
            alert('Ketik Ulang Password Tidak Boleh Kosong')
        } else if (password != password_confirm) {
            alert('Password Tidak Sama')
        } else if (alamat == null || alamat == '') {
            alert('Alamat Tidak Boleh Kosong')
        } else if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            const parameter = {
                "username": username,
                "email": email,
                "name": nama,
                "no_telp": no_telp,
                "password": password,
                "alamat": alamat,
                "key_yayasan": Endpoint.KEY_YAYASAN
            }

            axios.post(Endpoint.REGISTER, parameter).
                then(response => {
                    if (response.data.status == 400) {
                        alert(response.data.error)
                    } else {
                        alert('Email Terkirim, mohon cek email untuk reset password !')
                        this.setState({ go_home: true })
                    }
                }).catch(error => {
                    console.log(error)
                })
        } else {
            alert('Email Tidak Valid')
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
            username, email, nama, no_telp, password, password_confirm, alamat, go_back, go_home, yayasan, is_guest
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
                <div className="kontener" style={{ height: 'auto'}}>
                    <div className="login-logo" style={{ flexDirection: 'column', height: 'auto' }}>
                        
                    </div>
 
                    <div className="form-login">
                        <h3 style={{ fontWeight: 'bold' }}>Register</h3><br />
                        <input type="text" className="form-control lgn-frm" placeholder="Masukkan Username" name="username" value={username} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="email" className="form-control lgn-frm" placeholder="Masukkan Email" name="email" value={email} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="text" className="form-control lgn-frm" placeholder="Masukkan Nama" name="nama" value={nama} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="number" className="form-control lgn-frm" placeholder="Masukkan No Telp" name="no_telp" value={no_telp} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="password" className="form-control lgn-frm" placeholder="Masukkan Password" name="password" value={password} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="password" className="form-control lgn-frm" placeholder="Ketik Ulang Password" name="password_confirm" value={password_confirm} onChange={(e) => this.handleInputChange(e)} /><br />
                        <input type="text" className="form-control lgn-frm" placeholder="Alamat" name="alamat" value={alamat} onChange={(e) => this.handleInputChange(e)} /><br />
                        <div style={{ marginBottom: '20px', color: 'blue', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Link href="/login/lupa_password">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Lupa Password</label>
                            </Link>
                            <Link href="/login">
                                <label style={{ color: '#65FFDC',cursor: 'pointer'}}>Login</label>
                            </Link>
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => this.send()} style={{ marginBottom : '20px', cursor: 'pointer', color : 'rgb(175 175 175)' }}>CONTINUE</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Daftar;