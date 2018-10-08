const prefix = process.env.NODE_ENV === 'production' ? '/my-blog':'';

export default {
    PATH: {
        HOME: prefix + '/',
        ABOUT: prefix + '/about',
        TECHNICAL: prefix + '/technical',
        BUSINESS: prefix + '/business',
        STATIC: prefix + '/static',
        POST: prefix + '/post'
    },
    NUMBER_POST_PER_PAGE: 8,
}