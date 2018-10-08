import Config from '../config';
import Lan from '../modules/language'
import Link from 'next/link'

const actions = [
    { key: 'home', name: Lan.t('home'), ref: Config.PATH.HOME },
    { key: 'about', name: Lan.t('about'), ref: Config.PATH.ABOUT },
    { key: 'technical', name: Lan.t('technical'), ref: Config.PATH.TECHNICAL },
    { key: 'business', name: Lan.t('business'), ref: Config.PATH.BUSINESS },
];

const social = [
    { key: 'facebook', name: 'fa fa-facebook-official', ref: 'https://fb.com/quockhanhdev' },
    { key: 'github', name: 'fa fa-github', ref: "https://github.com/khanhtrancse" }
]

export default () => {
    const actionLinks = actions.map(item =>
        <Link key={item.key} href={item.ref}>
            <a className="menu-item my-2">{item.name}</a>
        </Link>)

    const socialLinks = social.map(item =>
        <a key={item.key} className="mx-2" href={item.ref}>
            <i className={item.name}></i>
        </a>
    );

    return (
        <div className="sidebar">
            <div className="col-12 side-bar-center">
                {/*Logo*/}
                <div className="d-flex flex-column">
                    <h5 className="mx-auto">
                        <a className="blog-name" href={Config.PATH.HOME}>{Lan.t('blog_name')}</a>
                    </h5>

                    <div className="blog-description mx-auto">{Lan.t('blog_description')}</div>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                    <div>
                    {actionLinks}
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-row justify-content-center">
                    {socialLinks}
                </div>
            </div>
        </div>);
}