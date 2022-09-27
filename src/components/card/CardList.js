import { Grid } from "@mui/material";

const CardList = ({children}) => {

const renderChildren = (children) => children.map(child => (
        <Grid key={child.props.id} item xs={12} sm={6} md={4} padding="15px">
            {child}
        </Grid>
    ));

    return (
        <div className="card-list">
            <Grid container spacing={2}>
                {renderChildren(children)}
            </Grid>
        </div>
    );
}

export default CardList;