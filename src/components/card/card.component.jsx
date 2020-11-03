import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import CardBody from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import "./card.styles.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Card() {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <CardBody className={classes.root}>
        {/* <Grid container direction="row" justify="center" alignItems="center"> */}
        <CardMedia
          className={classes.media}
          image="http://i.huffpost.com/gen/749263/original.jpg"
          title="Paella dish"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#dog";
          }}
        />
      </CardBody>
      <div class="lightbox-target" id="dog">
        <img src="http://i.huffpost.com/gen/749263/original.jpg" />
        <a class="lightbox-close" href="#"></a>
      </div>
    </Grid>
  );
}
