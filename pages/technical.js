import React from 'react';
import Lan from '../modules/language';
import Data from '../data/meta';
import ListCard from '../component/list-card';
import Container from '../component/container';

export default class extends React.Component {

    render() {
        return (
            <Container
                title={Lan.t('technical_post')}
            >
                <ListCard
                    getData={(page) => Data.getPostsByCategory('technical', page)} />
            </Container>


        );
    }
}