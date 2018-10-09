import dynamic from 'next/dynamic'

function getDetail(id) {
    try{
        id = parseInt(id);
    } catch(err){
        return null
    }
    switch (id) {
        case 1:
            const Post1 = dynamic(() => import('./post-1'))
            return <Post1 />;
    }

    return null
}

export default {
    getDetail,
}