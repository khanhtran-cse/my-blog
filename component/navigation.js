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
        <div key={item.key}>
            <Link href={item.ref} replace>
                <a>{item.name}</a>
            </Link>
        </div>)

    const socialLinks = social.map(item =>
        <div key={item.key} className="mx-2">
            <a href={item.ref}>
                <i className={item.name}></i>
            </a>
        </div>
    );

    return (
        <nav className="navbar custom-nav fixed-top px-0 py-0">
            <div className="navbar-main col-12 d-flex row px-0 mx-0 py-0 my-0">
                {/*Logo*/}
                <div className="col-9 py-auto my-auto">
                    <h6 className="py-auto my-auto">
                        <a className="blog-name" href={Config.DOMAIN}>{Lan.t('blog_name')}</a>
                    </h6>
                </div>

                <div className="col-3 d-flex flex-row-reverse py-auto my-auto">
                    <a className="menu-button px-3"  data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="collapse col-12 px-0 py-auto my-0" id="navbarToggleExternalContent">
                <hr className="mt-0" />
                <div className="d-flex justify-content-center">
                    <div>
                        {actionLinks}
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-center">
                    {socialLinks}
                </div>
            </div>

        </nav>
    );
}