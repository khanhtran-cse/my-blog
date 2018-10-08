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
                    title={Lan.t('business_post')}
                >
                    <p>List of business posts</p>
                </Container>
            </div>

        );
    }
}