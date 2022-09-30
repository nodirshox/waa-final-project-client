import { Container } from "@mui/system";
import { AxiosClient } from "../axios";
import { useEffect, useState } from "react";
import CardList from "../components/card/CardList";
import PropertyCard from "../components/card/PropertyCard";
import { exampleProps } from "../components/card/PropertyCard";
import { Link } from "react-router-dom";

export function Home() {
    const [properties, setProperties] = useState([]);
    const fetchProperties = async () => {
        const result = await AxiosClient.get("/properties");
        setProperties(result.data.content);
    }
    useEffect(() => {
        fetchProperties();
    }, [])
    return (
        <div>
            <div className="home">
                <h1>Property Portal</h1>
            </div>
            <Container>
                <CardList>
                    {
                        properties.map((property) => {
                            let thumbnail = "https://waa-project.s3.amazonaws.com/1664544328537-no-img-placeholder.png";
                            let thumbnails = property.pictures.filter((img) => img.type === "MAIN");
                            if (thumbnails.length > 0) {
                                thumbnail = thumbnails[0].awsUrl;
                            }
                            return (
                                <Link to={`/properties/${property.id}`} style={{ textDecoration: 'none' }} >
                                    <PropertyCard {...{
                                        ...exampleProps,
                                        id: property.id,
                                        price: property.price,
                                        type: property.type,
                                        listingType: property.listingType,
                                        numberOfRooms: property.numberOfRooms,
                                        address: property.address,
                                        image: thumbnail
                                    }} />
                                </Link>
                            )
                        })
                    }
                </CardList>
            </Container>

        </div>
    );
}