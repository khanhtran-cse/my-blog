import React from 'react';
import Lan from '../modules/language';
import Data from '../data/meta';
import ListCard from '../component/list-card';
import Containter from '../component/container';

export default class extends React.Component {

    render() {
        return (
            <Containter
                title={Lan.t('blog_name')}>
                <ListCard
                    getData={(page) => Data.getLatestPosts(page)} />
            </Containter>

        );
    }
}