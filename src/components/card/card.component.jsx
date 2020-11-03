import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBody from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
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
          image="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          title="Paella dish"
        />
      </CardBody>
    </Grid>
  );
}
