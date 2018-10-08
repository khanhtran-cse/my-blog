const prefix = process.env.NODE_ENV === 'production' ? '/my-blog':'';

export default {
    PATH: {
        HOME: prefix + '/',
        ABOUT: prefix + '/about',
        TECHNICAL: prefix + '/technical',
        BUSINESS: prefix + '/business',
    }
}