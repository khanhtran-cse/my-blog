import React from 'react';
import Head from 'next/head';
import Navigation from '../component/navigation'
import SideBar from '../component/sidebar'

export default class extends React.Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Head>
                    <title>Trần Quốc Khánh Blog</title>

                    <meta charset="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                    <link rel="stylesheet" href="./static/css/custom.css" />
                   
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                </Head>

                <SideBar />

                <div class="main">

                <div class="modal-search-container">

                    <form class="modal-search" method="get" action="http://stellarcode.co/">
                        <fieldset class="modal-search__fieldset">
                            <div class="row">
                                <div class="column column--center medium-8 large-8">
                                    <input class="modal-search__field" placeholder="type and hit enter" name="s" autofocus="" />
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <div class="icon icon--ei-close icon--s close-search-button modal-search-container__close"></div>

                </div>
                <div id="content" class="site-content">

                    <div class="wrapper">

                        <div class="row row--full">
                            <div class="post-list">

                                <article class="post-card-wrap column medium-6 large-4 post-549 post type-post status-publish format-standard has-post-thumbnail hentry category-front-end">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/549-2/" class="block" title="How to deploy a Node.js application to Amazon Web Services using Docker">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9">
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2018-06-02T09:00:46+00:00">June 2, 2018</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="How to deploy a Node.js application to Amazon Web Services using Docker" href="http://stellarcode.co/549-2/">How to deploy a Node.js application to Amazon Web Services using Docker</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-539 post type-post status-publish format-standard has-post-thumbnail hentry category-notes">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/build-a-react-plus-gatsby-powered-blog-in-10-minutes/" class="block" title="Build a React plus Gatsby Powered Blog in 10&nbsp;minutes">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-12-23T20:30:19+00:00">December 23, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="Build a React plus Gatsby Powered Blog in 10&nbsp;minutes" href="http://stellarcode.co/build-a-react-plus-gatsby-powered-blog-in-10-minutes/">Build a React plus Gatsby Powered Blog in 10&nbsp;minutes</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-535 post type-post status-publish format-standard has-post-thumbnail hentry category-frontend tag-reactjs">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/beginners-guide-to-react-router-4/" class="block" title="Beginner’s Guide to React Router&nbsp;4">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-12-11T00:04:43+00:00">December 11, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="Beginner’s Guide to React Router&nbsp;4" href="http://stellarcode.co/beginners-guide-to-react-router-4/">Beginner’s Guide to React Router&nbsp;4</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-519 post type-post status-publish format-standard has-post-thumbnail hentry category-frontend tag-reactjs">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/build-a-product-hunt-inspired-app-with-react-2/" class="block" title="Build A Product Hunt Inspired App With React">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-09-14T12:31:58+00:00">September 14, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="Build A Product Hunt Inspired App With React" href="http://stellarcode.co/build-a-product-hunt-inspired-app-with-react-2/">Build A Product Hunt Inspired App With React</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-392 post type-post status-publish format-standard has-post-thumbnail hentry category-frontend tag-reactjs">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/react-props-data-flow-validation-children/" class="block" title="React Props: Data flow, validation &amp; children">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-08-30T18:52:02+00:00">August 30, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="React Props: Data flow, validation &amp; children" href="http://stellarcode.co/react-props-data-flow-validation-children/">React Props: Data flow, validation &amp; children</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-377 post type-post status-publish format-standard has-post-thumbnail hentry category-notes">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/javascript-first-principles-2-functions-methods-objects-2/" class="block" title="JavaScript First Principles: #2. Functions, Methods &amp; Objects">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-08-17T08:24:49+00:00">August 17, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="JavaScript First Principles: #2. Functions, Methods &amp; Objects" href="http://stellarcode.co/javascript-first-principles-2-functions-methods-objects-2/">JavaScript First Principles: #2. Functions, Methods &amp; Objects</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-313 post type-post status-publish format-standard has-post-thumbnail hentry category-notes">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/javascript-first-principles-basic-concepts/" class="block" title="JavaScript First Principles: #1. Basic concepts">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-08-03T03:06:29+00:00">August 3, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="JavaScript First Principles: #1. Basic concepts" href="http://stellarcode.co/javascript-first-principles-basic-concepts/">JavaScript First Principles: #1. Basic concepts</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-277 post type-post status-publish format-standard has-post-thumbnail hentry category-notes">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/understanding-javascript-first-principles-introduction/" class="block" title="JavaScript First Principles: #0. Introduction">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-07-12T04:53:39+00:00">July 12, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="JavaScript First Principles: #0. Introduction" href="http://stellarcode.co/understanding-javascript-first-principles-introduction/">JavaScript First Principles: #0. Introduction</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>
                                <article class="post-card-wrap column medium-6 large-4 post-243 post type-post status-publish format-standard has-post-thumbnail hentry category-notes">
                                    <div class="post-card">

                                        <a href="http://stellarcode.co/introducing-the-mern-stack/" class="block" title="Introducing the MERN stack">
                                            <div class="bg-grey post-card__image CoverImage FlexEmbed FlexEmbed--16by9" >
                                                <span title="Featured Post">
                                                    <div class="icon icon--ei-star icon--s post-card--featured__icon"><svg class="icon__cnt"></svg></div>
                                                </span>
                                            </div>
                                        </a>

                                        <div class="post-card__info">
                                            <div class="post-card__meta">
                                                <time class="post-card__meta__date" datetime="2017-07-08T08:20:25+00:00">July 8, 2017</time>
                                            </div>

                                            <h2 class="post-card__title">
                                                <a title="Introducing the MERN stack" href="http://stellarcode.co/introducing-the-mern-stack/">Introducing the MERN stack</a>
                                            </h2>
                                        </div>

                                    </div>
                                </article>    </div>
                        </div>

                        <div class="row row--full">


                            <nav class="navigation posts-navigation" role="navigation">
                                <h2 class="screen-reader-text">Posts navigation</h2>
                                <div class="nav-links"><div class="nav-previous"><a href="http://stellarcode.co/page/2/"><div class="column"><div class="icon icon--ei-chevron-left  pagination__icon"><svg class="icon__cnt"></svg></div> <span class="pagination__text pagination__text--with-icon">Older </span></div></a></div></div>
                            </nav>  </div>

                    </div>


                    <footer class="site-footer">
                        <div class="row row--full">


                            <div class="column large-12">
                                <div class="site-footer__bottom clearfix">
                                    <div class="font-tiny">
                                        Articles written by <a href="http://emmanuelyusufu.com"><u>Emmanuel Yusufu</u></a> © 2017 Stellar Code                          </div>
                                </div>
                            </div>

                        </div>
                    </footer>

                </div>
            </div>
            </div >

        );
    }
}