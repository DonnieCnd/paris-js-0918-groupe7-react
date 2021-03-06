import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const styles = {
  pos: {
    marginBottom: 0
  }
};

class ThanksCard extends Component {
  state = {
    redirect: false,
    back: false
  };

  handleClick = e => {
    localStorage.removeItem("token");
    this.setState({
      redirect: true
    });
  };

  BackFunction = e => {
    this.setState({
      back: true
    });
  };

  render() {
    const { redirect, back } = this.state;

    if (redirect) {
      return <Redirect to="/login" />;
    }

    if (back) {
      return <Redirect to="/login" />;
    }
    return (
      <Card
        className="card"
        style={{
          width: "70%",
          height: "auto",
          alignContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10%",
          marginBottom: "auto"
        }}
      >
        <CardContent className="cardContent">
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(0.7vw + 0.7vh + 0.7vmin)",
              marginTop: "5%"
            }}
          >
            You have completed the survey.
          </Typography>

          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Raleway, sans-serif",
              fontSize: "calc(0.45vw + 0.45vh + 0.45vmin)",
              marginTop: "5%"
            }}
          >
            Thank you for your time and your participation !
          </Typography>

          <div className="button">
          <Button className="button-start-survey"
              onClick={this.handleClick}
              style={{
                backgroundColor: "rgb(186, 28, 58)",
                color: "white",
                fontFamily: "Raleway",
                borderRadius: "15px",
                margin:"0 0 5% 0"
              }}
            >
                <Typography
                  gutterBottom
                  style={{
                    textAlign: "center",
                    alignItems:"center",
                    color: "white",
                    fontSize: "calc(0.4vw + 0.4vh + 0.6vmin)",
                    padding: "8px 30px",
                    fontFamily: "Raleway",
                  }}
                  >
                  SIGN OUT
                </Typography>
              </Button>
            {/* <Button
              variant="contained"
              className="but"
              size="large"
              style={{
                backgroundColor: "rgb(186, 28, 58)",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                marginTop: "5%",
                fontSize: "1.3em",
                fontFamily: "Raleway"
              }}
              onClick={this.handleClick}
            >
              Sign Out
            </Button> */}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ThanksCard);
