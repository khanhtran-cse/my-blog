import React from 'react';
import Head from 'next/head';
import Navigation from '../component/navigation'
import SideBar from '../component/sidebar'
import Config from '../config';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // console.log(props);
        const noData = !props.children || props.children == {} || props.children.length == 0;
        this.state = { isLoading: noData };
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        const noData = !nextProps.children || nextProps.children == {} ||
            nextProps.children.length == 0;
        this.setState({ isLoading: noData });
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

                    <link rel="stylesheet" href={Config.PATH.STATIC + '/css/custom.css'} />

                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                </Head>

                <SideBar />

                <Navigation />
                <div className="main pt-3">
                    {this.state.isLoading ?
                        <div className="loader d-flex justify-content-center align-items-center">
                            <div className="lds-heart"><div></div></div>
                        </div>
                        :
                        this.props.children}
                </div >


            </div>
        )
    }
}