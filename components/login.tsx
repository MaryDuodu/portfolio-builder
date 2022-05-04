import {
  CardContent,
  Card,
  CardActions,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Router from "next/router";
import React from "react";

class Login extends React.Component<{}, { email: string; password: string }> {
  constructor(props: any) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    const resp = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }) as any,
    });

    const json = await resp.json();
    if (typeof window != "undefined" && json.loggedIn == true) {
      localStorage.setItem("user", JSON.stringify(json.data));
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
              <h4> Have an account already? login 👇</h4>
            </Typography>

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
              Login
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default Login;
