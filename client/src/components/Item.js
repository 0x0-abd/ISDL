import React from 'react'

const Item = (props) => {
    let {title, description, imageUrl} = props;
    console.log(title);
    return (
        <>
            <div className="card text-bg-dark my-3">
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}

export default Item