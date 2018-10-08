import React from 'react';
import Container from '../component/container';
import Lan from '../modules/language';
import NoData from '../component/no-data';

export default class extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Container
                    title={Lan.t('about_me')}
                >
                    <NoData/>
                </Container>
            </div>

        );
    }
}