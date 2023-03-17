import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import apiData from "../apiData/apiData";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ComplexGrid = () => {
  const data = apiData;
  return data.map((item) => {
    return (
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        key={item.url}
        className="marge"
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 230, height: 128 }}>
              <Img alt="complex" src={item.urlToImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  });
};
export default ComplexGrid;
