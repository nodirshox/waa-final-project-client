import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../components/card/CardList";
import PropertyCard from "../components/card/PropertyCard";
import { exampleProps } from "../components/card/PropertyCard";

export function Home() {
    const [properties, setProperties] = useState([]);
    const fetchProperties = async () => {
        const result = await axios.get(`http://localhost:8080/api/properties`);
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
                            return (
                                <PropertyCard {...{
                                    ...exampleProps,
                                    id: property.id,
                                    price: property.price,
                                    type: property.type,
                                    listingType: property.listingType,
                                    numberOfRooms: property.numberOfRooms,
                                    address: property.address
                                }} />
                            )
                        })
                    }
                </CardList>
            </Container>

        </div>
    );
}