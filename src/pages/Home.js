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
                    <PropertyCard {...{...exampleProps, id: 1}}/>
                    <PropertyCard {...{...exampleProps, id: 2}}/>
                    <PropertyCard {...{...exampleProps, id: 3}}/>
                    <PropertyCard {...{...exampleProps, id: 4}}/>
                    <PropertyCard {...{...exampleProps, id: 5}}/>
                    <PropertyCard {...{...exampleProps, id: 6}}/>
                </CardList>
            </Container>
                
        </div>
    );
}