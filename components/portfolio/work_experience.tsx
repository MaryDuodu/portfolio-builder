import { TabsContext } from "@mui/base";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Card,
  Typography,
  TextField,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import Router from "next/router";
import React from "react";

class WorkExperience extends React.Component<
  {},
  {
    company: string;
    from: number;
    to: number;
    position: string;
    role: string;
    description: string;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      company: "",
      position: "",
      role: "",
      from: 2021,
      to: 2022,
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event: any, key: string) {
    // @ts-ignore
    this.setState({ key: event?.target?.value || "" });
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    if (typeof window != "undefined") {
      const user = JSON.parse(localStorage.getItem("user")!) as any;

      console.log(user);
      const resp = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workExperience: this.state,
          user: user._id,
        }) as any,
      });

      const json = await resp.json();
      console.log(json);
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
              {/* Word of the Day */}
            </Typography>

            <TextField
              required
              id="company"
              label="Company Name"
              variant="outlined"
              name="company"
              fullWidth
              margin="normal"
              value={this.state.company}
              onChange={(e) => {
                this.setState({ company: e?.target?.value! });
              }}
            />

            <TextField
              required
              id="position"
              label="Position"
              variant="outlined"
              name="position"
              fullWidth
              margin="normal"
              value={this.state.position}
              onChange={(e) => {
                this.setState({ position: e?.target?.value! });
              }}
            />

            <TextField
              required
              id="role"
              label="Role"
              variant="outlined"
              name="role"
              fullWidth
              margin="normal"
              multiline
              value={this.state.role}
              onChange={(e) => {
                this.setState({ role: e?.target?.value! });
              }}
            />

            <TextField
              required
              id="from"
              label="Year you joined the company"
              variant="outlined"
              name="from"
              fullWidth
              margin="normal"
              type="number"
              value={this.state.from}
              onChange={(e) => {
                this.setState({ from: parseInt(e?.target?.value!) });
              }}
            />

            <TextField
              required
              id="to"
              label="Year you left the company"
              variant="outlined"
              name="to"
              fullWidth
              margin="normal"
              type="number"
              value={this.state.to}
              onChange={(e) => {
                this.setState({ from: parseInt(e?.target?.value!) });
              }}
            />
          </CardContent>

          <CardActions>
            <Button size="small" type="submit">
              Save Changes
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default WorkExperience;
