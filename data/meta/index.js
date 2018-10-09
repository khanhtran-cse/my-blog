import Config from '../../config';

function getPostsByPage(data,page){
    const start = (page - 1)*Config.NUMBER_POST_PER_PAGE;
    const end = page*Config.NUMBER_POST_PER_PAGE;
    const totalPage = Math.ceil(data.length/Config.NUMBER_POST_PER_PAGE);
    return {
        totalPage: totalPage,
        data: data.slice(start,end)
    }
}

function getLatestPosts(page){
    return getPostsByPage(data,page);
}

function getPostsByCategory(category,page){
    const cd = data.filter(item=>{
        for(let i = 0;i < item.category.length; i++){
            if(item.category[i] == category){
                return true;
            }
        }
        return false
    });

    return getPostsByPage(cd,page);
}

function getPost(id){
    for(let i=0;i<data.length;i++){
        if(data[i].id == id){
            return data[i];
        }
    }
    return null
}

export default {
    getLatestPosts,
    getPostsByCategory,
    getPost,
}

const data = [
    {
        "id":1,
        "name":"How to make your blog free.",
        "date":1539013138,
        "date_string":"Oct 10 2018",
        "link":'how-to-make-your-blog-free',
        "category":[
            "blog",
            "technical"
        ],
        "image":"http://stellarcode.co/wp-content/uploads/2018/06/1_KqO5C0953HQzafpnBYaTSg.jpeg"
    }
]