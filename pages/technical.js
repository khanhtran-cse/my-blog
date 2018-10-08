import React from 'react';
import Container from '../component/container';
import Lan from '../modules/language';

export default class extends React.Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Container
                    title={Lan.t('technical_post')}
                >
                    <p>List of technical posts</p>
                </Container>
            </div>

        );
    }
}