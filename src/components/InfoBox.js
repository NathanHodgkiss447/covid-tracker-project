import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "../InfoBox.css";

function InfoBox({
  title,
  cases,
  active,
  total,
  isRed,
  isGreen,
  isOrange,
  ...props
}) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isGreen && "infoBox--green"} ${isOrange && "infoBox--orange"}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isOrange && "infoBox__cases--orange"
          }`}
        >
          {cases}
        </h2>
        <Typography className={`infoBox__total`} color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
