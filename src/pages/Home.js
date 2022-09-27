import { Container } from "@mui/system";
import CardList from "../components/card/CardList";
import PropertyCard from "../components/card/PropertyCard";
import {exampleProps} from "../components/card/PropertyCard";

export function Home() {
    return (
        <div>
            <div className="home">
                <h1>Home</h1>
            </div>
            <Container>
                <CardList>
                    <PropertyCard {...exampleProps}/>
                    <PropertyCard {...exampleProps}/>
                    <PropertyCard {...exampleProps}/>
                    <PropertyCard {...exampleProps}/>
                    <PropertyCard {...exampleProps}/>
                    <PropertyCard {...exampleProps}/>
                </CardList>
            </Container>
                
        </div>
    );
}