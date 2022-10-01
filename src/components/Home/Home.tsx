import React from "react";
import NavBar from "../NavBar/NavBar";
import { useHomeStyles } from "./styles";

const HomePage = () => {
  const classes = useHomeStyles();
  return (
    <div className={classes.root}>
    <NavBar/>
    </div>
  );
};

export default HomePage;

//   <div className={classes.content}>
//         <p className={classes.heading}>Begin your journey with Hivedeck</p>
//         {/* <Button
//           onClick={() => navigate("login", "journey_button")}
//           variant="contained"
//           className={classes.btn}
//         >
//           Let&#39;s go
//         </Button> */}
//       </div>
//       <picture>
//         <source srcSet="https://sytbuildr.s3.eu-west-2.amazonaws.com/Landing/begin_journey.png" />
//         <img
//           src="https://sytbuildr.s3.eu-west-2.amazonaws.com/Landing/begin_journey.png"
//           alt=""
//           className={classes.img}
//         />
//       </picture>