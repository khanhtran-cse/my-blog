import Config from '../config';

export default (post) => {
    return (
        <div key={post.id} className="post-card col-12 col-md-4 col-lg-3 inline-block px-2">
            <a href={Config.PATH.POST + '/' + post.link} className="post-card-image-block mx-auto">
                <div className="post-card-image mx-auto px-auto" style={{ background: `url(${post.image})` }} alt={post.name}></div>
            </a>

            <div className="mb-5">
                <div className="post-card__meta">
                    <div className="post-card-time my-2">{post.date_string}</div>
                </div>

                <h6>
                    <a title={post.name} href={Config.PATH.POST + '/' + post.link}>{post.name}</a>
                </h6>
            </div>

            <hr className="post-card-separator" />
        </div >
    );
}
