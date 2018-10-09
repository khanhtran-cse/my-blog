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

                {/*Todo: Content of post here*/}
            </div>
        </div>
    )
}
