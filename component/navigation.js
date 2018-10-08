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
        <li key={item.key} class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-47">
            <Link href={item.ref} replace>
                <a>{item.name}</a>
            </Link>
        </li>)

    const socialLinks = social.map(item =>
        <li key={item.key} class="mx-2">
            <a href={item.ref}>
                <i class={item.name}></i>
            </a>
        </li>
    );

    return (
        <div class="header">
            <div class="row">
                {/*Logo*/}
                <div class="col-9 col-lg-12">
                    <h1 class="header__logo">
                        <a href={Config.DOMAIN} rel="home">{Lan.t('blog_name')}</a>
                    </h1>

                    <div class="header__description font-tiny">{Lan.t('blog_description')}</div>
                </div>

                <div class="col-3 col-lg-0">
                    {/* <label class="off-canvas-toggle" data-toggle="sidebar">
                        <span class="genericon genericon-menu off-canvas-toggle__icon"></span>
                    </label> */}
                    <button type="button" class="button" data-toggle="sidebar">Open Right</button>

                </div>

                <div class="off-canvas-content" id="sidebar">
                    <div class="col-12">
                        {/* <h2 class="screen-reader-text">Primary Navigation</h2> */}
                        <nav class="header__navigation">
                            <ul class="list-bare">
                                {actionLinks}
                            </ul>
                        </nav>
                    </div>
                    <div class="col-12">
                        {/* <h2 class="screen-reader-text">Social Navigation</h2> */}
                        <ul class="header__social-nav list-bare">
                            {socialLinks}
                        </ul>
                    </div>
                </div>

            </div>
        </div>);
}