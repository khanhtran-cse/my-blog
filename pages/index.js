import React from 'react';
import Lan from '../modules/language';
import Data from '../data/post';
import ListCard from '../component/list-card';

export default class extends React.Component {
  
    render() {
        return (
            <ListCard
                title={Lan.t('blog_name')}
                getData={(page)=>Data.getLatestPosts(page)}/>

        );
    }
}