import "./property.css";

export const Property = ({ name, description, price, image }) => {
    return (
        <div className="property">
            <div className="property__image">
                <img src={image} alt={name} />
            </div>
            <div className="property__info">
                <h3 className="property__name">{name}</h3>
                <p className="property__description">{description}</p>
                <p className="property__price">{price}</p>
            </div>
        </div>
    )
};
