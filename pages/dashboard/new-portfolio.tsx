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
import Achievements from "../../components/portfolio/achievements";
import WorkExperience from "../../components/portfolio/work_experience";
import TabPanel from "../../components/tab-panel";

class NewPortfolio extends React.Component<
  {},
  {
    education: {
      school: string;
      from: number;
      to: number;
      degree: string;
      fieldOfStudy: string;
      description: string;
      certificate: string;
    };
    workExperience: {
      company: string;
      from: number;
      to: number;
      position: string;
      role: string;
      description: string;
    };
    selectedTab: number;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      education: {
        school: "",
        from: 2021,
        to: 2022,
        degree: "",
        fieldOfStudy: "",
        certificate: "",
        description: "",
      },
      workExperience: {
        company: "",
        position: "",
        role: "",
        from: 2021,
        to: 2022,
        description: "",
      },
      selectedTab: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEducationFormChange(event: any, key: string) {
    const ed = this.state.education;
    // @ts-ignore
    ed[key] = event?.target?.value || "";
    this.setState({ education: ed });
  }

  handleWorkExperienceFormChange(event: any, key: string) {
    const ed = this.state.workExperience;
    // @ts-ignore
    ed[key] = event?.target?.value || "";
    this.setState({ workExperience: ed });
  }

  async handleSubmit(event: any) {
    event.preventDefault();

    if (typeof window != "undefined") {
      const user = JSON.parse(localStorage.getItem("user")!) as any;

      const resp = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          education: this.state.education,
          user: user._id,
        }) as any,
      });

      const json = await resp.json();
      Router.push("./");

    }
  }

  render() {
    return (
      <Card sx={{ minWidth: 275, height: "max-content" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              centered
              onChange={(event, i: number) => {
                this.setState({ selectedTab: i });
              }}
              value={this.state.selectedTab}
            >
              <Tab label="Education Experience" value={0} />
              <Tab label="Work Experience" value={1} />
              <Tab label="Notable Achievements" value={2} />
            </Tabs>
          </Box>

          <TabPanel value={this.state.selectedTab} index={0}>
            <form onSubmit={this.handleSubmit}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", mb: 5,fontFamily: "Roboto"}}
                  color="text.primary"
                  gutterBottom
                >
                  Education
                </Typography>

                <TextField
                  required
                  id="school"
                  label="School Name"
                  variant="outlined"
                  name="school"
                  fullWidth
                  margin="normal"
                  value={this.state.education.school}
                  onChange={(e) => {
                    this.handleEducationFormChange(e, "school");
                  }}
                />

                <TextField
                  required
                  id="fieldOfStudy"
                  label="Field of Study"
                  variant="outlined"
                  name="fieldOfStudy"
                  fullWidth
                  margin="normal"
                  value={this.state.education.fieldOfStudy}
                  onChange={(e) => {
                    const ed = this.state.education;
                    ed.fieldOfStudy = e?.target?.value || "";
                    this.setState({ education: ed });
                  }}
                />

                <TextField
                  required
                  id="certificate"
                  label="Certificate"
                  variant="outlined"
                  name="certificate"
                  fullWidth
                  margin="normal"
                  value={this.state.education.certificate}
                  onChange={(e) => {
                    const ed = this.state.education;
                    ed.certificate = e?.target?.value || "";
                    this.setState({ education: ed });
                  }}
                />

                <TextField
                  required
                  id="from"
                  label="Year of Admission"
                  variant="outlined"
                  name="from"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={this.state.education.from}
                  onChange={(e) => {
                    const ed = this.state.education;
                    ed.from = parseInt(e?.target?.value!);
                    this.setState({ education: ed });
                  }}
                />

                <TextField
                  required
                  id="to"
                  label="Year of Completion"
                  variant="outlined"
                  name="to"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={this.state.education.to}
                  onChange={(e) => {
                    const ed = this.state.education;
                    ed.to = parseInt(e?.target?.value!);
                    this.setState({ education: ed });
                  }}
                />

                {/* TODO: add work experience forms here  */}
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", mb: 5,fontFamily: "Roboto"}}
                  color="text.primary"
                  gutterBottom
                >
                  Work Experience
                </Typography>

                <TextField
                  required
                  id="company"
                  label="Company Name"
                  variant="outlined"
                  name="company"
                  fullWidth
                  margin="normal"
                  value={this.state.workExperience.company}
                  onChange={(e) => {
                    this.handleWorkExperienceFormChange(e, "company");
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
                  value={this.state.workExperience.position}
                  onChange={(e) => {
                    this.handleWorkExperienceFormChange(e, "position");
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
                  value={this.state.workExperience.role}
                  onChange={(e) => {
                    this.handleWorkExperienceFormChange(e, "role");
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
                  value={this.state.workExperience.from}
                  onChange={(e) => {
                    this.handleWorkExperienceFormChange(e, "from");
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

                  value={this.state.workExperience.to}
                  onChange={(e) => {
                    this.handleWorkExperienceFormChange(e, "to");
                  }}
                />


            </CardContent>




            <CardActions>
              <Button size="small" type="submit">
                Save changes
              </Button>
            </CardActions>
          </form>
        </TabPanel>
        <TabPanel value={this.state.selectedTab} index={1}>
          <WorkExperience />
        </TabPanel>
        <TabPanel value={this.state.selectedTab} index={2}>
          <Achievements />
        </TabPanel>
      </Box>
      </Card >
    );
  }
}

export default NewPortfolio;
