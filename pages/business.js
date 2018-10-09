import React from 'react';
import Lan from '../modules/language';
import Data from '../data/meta';
import ListCard from '../component/list-card';
import Containter from '../component/container';

export default class extends React.Component {

    render() {
        return (
            <Containter
                title={Lan.t('business_post')}>
                <ListCard
                    getData={(page) => Data.getPostsByCategory('business', page)} />
            </Containter>

        );
    }
}