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

class Achievements extends React.Component<
  {},
  {
    institution: string;
    year: number;
    description: string;
    title: string;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      institution: "",
      title: "",
      year: 2021,
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
          achievements: this.state,
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
              Word of the Day
            </Typography>

            <TextField
              required
              id="institution"
              label="Institution Name"
              variant="outlined"
              name="institution"
              fullWidth
              margin="normal"
              value={this.state.institution}
              onChange={(e) => {
                this.setState({ institution: e?.target?.value! });
              }}
            />

            <TextField
              required
              id="title"
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
              margin="normal"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e?.target?.value! });
              }}
            />

            <TextField
              required
              id="year"
              label="Year you received the award"
              variant="outlined"
              name="year"
              fullWidth
              margin="normal"
              type="number"
              value={this.state.year}
              onChange={(e) => {
                this.setState({ year: parseInt(e?.target?.value!) });
              }}
            />

            <TextField
              required
              id="description"
              label="Brief description of the award and why you deserved it"
              variant="outlined"
              name="description"
              fullWidth
              margin="normal"
              type="text"
              multiline
              value={this.state.description}
              onChange={(e) => {
                this.setState({ description: e?.target?.value! });
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

export default Achievements;
