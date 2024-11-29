import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
function Post({id, title, delPost}) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={() => delPost(id)}>X</button>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?siq=${id}`} />
        </div>
    )
}

Post.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default Post