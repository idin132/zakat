import Head from 'next/head'
import React from 'react'
import Header from '../component/Header'
import * as Endpoint from '../service/Endpoint'



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
    } = this.state;

    return (
      <>

        <Header />

      </>
    )
  }
}
export default Dashboard;