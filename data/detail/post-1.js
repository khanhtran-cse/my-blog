import Meta from '../meta';

export default () => {
    const postMeta = Meta.getPost(1);

    const coverUrl = postMeta.image;
    const name = postMeta.name;
    const date = postMeta.date_string;
    const category = postMeta.category ? postMeta.category : [];
    const cateView = [];
    for (let i = 0; i < category.length; i++) {
        cateView.push(<div key={i} className="post-detail-category mx-1">{category[i]}</div>)
    }

    return (
        <div className="col-12 d-flex flex-column align-items-center">
            <div className="post-cover-image"
                style={{ background: `url(${coverUrl})` }}></div>

            <div className="post-detail">
                <div className="d-flex align-items-center justify-content-center">
                    <h1 className="post-detail-title">{name}</h1>
                </div>
                <div className="col-12 row mx-0 align-items-center justify-content-center mb-3">
                    <div className="post-detail-date mx-1">{date}</div>
                    <div>&mdash;</div>
                    {cateView}
                </div>

                <h3>Table of Contents</h3>
                <ol>
                    <li>Introduction</li>
                    <li>Prerequisites</li>
                    <li>A quick primer on Docker and AWS</li>
                    <li>What we’ll be deploying</li>
                    <li>Creating a Dockerfile</li>
                    <li>Building a docker image</li>
                    <li>Running a docker container</li>
                    <li>Creating the Registry (ECR) and upload the app image to it</li>
                    <li>Creating a new task definition</li>
                    <li>Creating a cluster</li>
                    <li>Creating a service to run it</li>
                    <li>Conclusion</li>
                </ol>
            </div>
        </div>
    )
}
