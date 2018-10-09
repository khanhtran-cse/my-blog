import React from 'react';
import Container from '../component/container';
import Lan from '../modules/language';
import NoData from '../component/no-data';
import url from 'url';
import config from '../config';
import Detail from '../data/detail';
import Data from '../data/meta';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            meta: {},
        }
    }

    componentDidMount() {
        const myUrl = url.parse(window.location.href);

        if (myUrl.pathname == config.PATH.POST) {

            //Get id of target post
            const query = myUrl.search;
            const regex = /id=[0-9]*/g
            const idString = query.match(regex)[0];
            const id = idString.slice(3, idString.length);
            console.log(query);
            console.log('Get information of post has id',id);

            //Get data of target post
            const content = Detail.getDetail(id);
            const meta = Data.getPost(id);

            console.log('data',content,meta);
            if (content && meta) {
                this.setState({
                    meta,
                    content
                })
            } else {
                console.log('error',content,meta);
                this.setState({
                    meta: {name: Lan.t('title_error')},
                    content: null
                })
            }
        }
    }

    render() {
        const title = this.state.meta.name ? this.state.meta.name : Lan.t('default_post_name');
        return (
            <div>
                <Container
                    title={title}
                >
                    {this.state.content}
                </Container>
            </div>

        );
    }
}