import React from 'react';
import Head from 'next/head';
import Navigation from '../component/navigation'
import SideBar from '../component/sidebar'

export default class extends React.Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false, }), 1000)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{this.props.title} </title>

                    <meta charset="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                    <link rel="stylesheet" href="/static/css/custom.css" />

                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                </Head>

                <SideBar />

                <Navigation />
                <div class="main">
                    {this.state.isLoading ?
                        <p>Loading</p> :
                        this.props.children}
                </div >


            </div>
        )
    }
}