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
            <a class="menu-item my-2">{item.name}</a>
        </Link>)

    const socialLinks = social.map(item =>
        <a key={item.key} class="mx-2" href={item.ref}>
            <i class={item.name}></i>
        </a>
    );

    return (
        <div class="sidebar">
            <div class="col-12 side-bar-center">
                {/*Logo*/}
                <div class="d-flex flex-column">
                    <h5 class="mx-auto">
                        <a class="blog-name" href={Config.PATH.HOME}>{Lan.t('blog_name')}</a>
                    </h5>

                    <div class="blog-description mx-auto">{Lan.t('blog_description')}</div>
                </div>
                <hr/>
                <div class="d-flex justify-content-center">
                    <div>
                    {actionLinks}
                    </div>
                </div>
                <hr/>
                <div class="d-flex flex-row justify-content-center">
                    {socialLinks}
                </div>
            </div>
        </div>);
}