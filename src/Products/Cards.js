import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SAVED_PRODUCTS } from "../utils/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Cards = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { id, description, category, image, price, title } = props;
  const [state, dispatch] = useStoreContext();
  const {savedProducts} = state

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSaved = (event) => {
    event.preventDefault();

    dispatch({
      type: SAVED_PRODUCTS,
      product: { ...props }
    });
    console.log(savedProducts);
  };


  const date = new Date().toLocaleDateString();
  return (
    <Card className={classes.root} key={id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            JLML
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          price: $ {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Link to="savedProducts/yourProducts" > */}
        <IconButton aria-label="add to favorites" onClick={handleSaved}>
          save to favorite
        </IconButton>
        {/* </Link> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>

          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Cards;
