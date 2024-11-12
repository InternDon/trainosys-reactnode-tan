const Card = ({ title, price, imageUrl }) => {
    return (<>
        <div className="cardMain">
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-price">${price}</p>
        </div>
    </>)
}

export default Card