import { Button } from "@mui/material";
import React from "react";
import { useBeginJourneyStyles } from "./styles";

const BeginJourney = () => {
  const classes = useBeginJourneyStyles();
  return (
    <div className={classes.root}>

        {/* <Button
          onClick={() => navigate("login", "journey_button")}
          variant="contained"
          className={classes.btn}
        >
          Let&#39;s go
        </Button> */}
    
      <picture>
        <source srcSet="https://sytbuildr.s3.eu-west-2.amazonaws.com/Landing/begin_journey.png" />
        <img
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/Landing/begin_journey.png"
          alt=""
         
        />
      </picture>
    </div>
  );
};

export default BeginJourney;