import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Card,
  Typography,
  TextField,
} from "@mui/material";
import Router from "next/router";
import React from "react";

class CreateAccount extends React.Component<
  {},
  { email: string; password: string; fullName: string }
> {
  constructor(props: any) {
    super(props);

    this.state = { email: "", password: "", fullName: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    const resp = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        fullName: this.state.fullName,
      }) as any,
    });

    const json = await resp.json();
    if (typeof window != "undefined" && json.loggedIn == true) {
      localStorage.setItem("user", JSON.stringify(json));
      Router.push("/dashboard");
    }
  }

  render() {
    return (
      <Card sx={{ minWidth: 275, height: "max-content" }}>
        <form onSubmit={this.handleSubmit}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <h4> Create Account to Join now!</h4>
            </Typography>

            <TextField
              required
              id="full-name"
              label="Full Name"
              variant="outlined"
              name="fullName"
              fullWidth
              margin="normal"
              value={this.state.fullName}
              onChange={(e) => {
                this.setState({ fullName: e?.target?.value || "" });
              }}
            />

            <TextField
              required
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              fullWidth
              margin="normal"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e?.target?.value || "" });
              }}
            />

            <TextField
              required
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              fullWidth
              margin="normal"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e?.target?.value || "" });
              }}
            />
          </CardContent>

          <CardActions>
            <Button size="small" type="submit">
              Create Account
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default CreateAccount;
