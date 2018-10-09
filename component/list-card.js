/**
 * List of props:
 * - getData = (page)=>{totalPage: number,data: []}
 * - title: string
 */

import React from 'react';
import Container from '../component/container';
import Lan from '../modules/language';
import PostCard from '../component/post-card';
import NoData from '../component/no-data';

export default class extends React.Component {
    state = {
        page: 1,
        totalPage: 1,
        data: [],
    }

    componentDidMount() {
        this.renderData(1);

    }

    goToNextPage() {
        this.renderData(this.state.page + 1);
    }

    goToPrePage() {
        this.renderData(this.state.page - 1);
    }

    renderData(page) {
        if (!this.props.getData) {
            return;
        }

        const result = this.props.getData(page);

        if (result.data.length <= 0) {
            const noPost = NoData()
            this.setState({
                data: noPost,
                page: 1,
                totalPage: 0
            });
            return;
        }


        //Render post card
        const posts = result.data.map(item => PostCard(item))

        const list = <div key={1} className="col-12 row mx-0">{posts}</div>

        //Render action
        const move = [];
        if (page > 1) {
            move.push(<button className="mx-2" onClick={() => this.goToPrePage()} key={1}>{Lan.t('previous_page')}</button>)
        }
        if (page < result.totalPage) {
            move.push(<button className="mx-2" onClick={() => this.goToNextPage()} key={2}>{Lan.t('next_page')}</button>)
        }
        const moveView = <div key={2} className="col-12 d-flex justify-content-center row mx-0 mb-5">{move}</div>
        // console.log(posts);
        this.setState({ data: [list, moveView], totalPage: result.totalPage, page: page });
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>

        );
    }
}