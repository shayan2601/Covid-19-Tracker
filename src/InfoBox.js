import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

const InfoBox = ({ title, cases, active, isRed, total, ...props }) => {
  console.log(title, active);

  return (
    <div className="InfoBox">
      <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
        <CardContent>
          <Typography className="infoBox_title" color="textSecondary">
            {title}
          </Typography>
          <h2 className={`infoBox_cases ${!isRed && "infoBox_cases-green"}`}>
            {cases}
          </h2>
          <Typography className="infoBox_total" color="textSecondary">
            {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
