import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoxBox__title" color="textSecondary">
            {title}
          </Typography>

          <h2 className="infoxBox__cases">{cases}</h2>

          <Typography className="infoxBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
