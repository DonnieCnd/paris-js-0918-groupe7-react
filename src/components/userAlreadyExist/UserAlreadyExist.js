import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Material UI dependencies
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class UserAlreadyExist extends Component {
  state = {
    redirect: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Grid
          container
          className="gridthanks"
          style={{
            backgroundColor: "rgb(125, 146, 177)",
            position: "absolute",
            minHeight: "100%"
          }}
        >
          <Card
            className="card"
            style={{
              width: "35%",
              maxHeight: "70%",
              alignContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10%",
              marginBottom: "auto",
              borderRadius: "10px"
            }}
          >
            <CardContent className="cardContent">
              <Typography
                gutterBottom
                style={{
                  fontFamily: "Raleway, sans-serif",
                  marginTop: "5%",
                  marginLeft: "1%",
                  fontSize: "calc(1vw + 1vh + 0.8vmin)"
                }}
              >
                Error during your Sign Up
              </Typography>

              <p>User already exist! Please Login.</p>

              <div className="form-data">
                <Button
                  onClick={this.handleClick}
                  className="BtnSend"
                  type="submit"
                  value="Login"
                  style={{
                    backgroundColor: "rgb(186, 28, 58)",
                    color: "white",
                    fontFamily: "Raleway",
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    gutterBottom
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                      padding: "8px 30px",
                      fontFamily: "Raleway",
                    }}
                  >
                    Login
                  </Typography>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default UserAlreadyExist;
