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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Router from "next/router";
import React from "react";
import Achievements from "../../components/portfolio/achievements";
import WorkExperience from "../../components/portfolio/work_experience";
import TabPanel from "../../components/tab-panel";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    achievements: {
      institution: string;
      year: number;
      description: string;
      title: string;
    };
    selectedTab: number;
    expanded: string | false;
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
      achievements: {
        institution: "",
        title: "",
        year: 2021,
        description: "",
      },
      selectedTab: 0,
      expanded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleAccordionChange(panel: string, isExpanded: boolean) {
    this.setState({ expanded: isExpanded ? panel : false })
  }

  handleEducationFormChange(event: any, key: string) {
    const ed = this.state.education;
    // @ts-ignore
    ed[key] = event?.target?.value || "";
    this.setState({ education: ed });
  }

  handleAchievementsFormChange(event: any, key: string) {
    const ed = this.state.achievements;
    // @ts-ignore
    ed[key] = event?.target?.value || "";
    this.setState({ achievements: ed });
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
          achievements: this.state.achievements,
          workExperience: this.state.workExperience,
          user: user._id,
        }) as any,
      });

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


                <Accordion expanded={this.state.expanded === 'panel1'}
                  onChange={(event, isExpanded) => this.handleAccordionChange('panel1', isExpanded)}>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Education Experience
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Your education experience related to this portfolio</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ marginLeft: "50px" }}>
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

                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={this.state.expanded === 'panel2'}
                  onChange={(event, isExpanded) => this.handleAccordionChange('panel2', isExpanded)}>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Work Experience
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Your work experience related to this portfolio</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ marginLeft: "50px" }}>
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
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={this.state.expanded === 'panel3'}
                  onChange={(event, isExpanded) => this.handleAccordionChange('panel3', isExpanded)}>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Notable Achievements
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Your notable achievements related to this portfolio</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ marginLeft: "50px" }}>

                    <TextField
                      required
                      id="institution"
                      label="Institution Name"
                      variant="outlined"
                      name="institution"
                      fullWidth
                      margin="normal"
                      value={this.state.achievements.institution}
                      onChange={(e) => {
                        this.handleAchievementsFormChange(e, "institution");
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
                      value={this.state.achievements.title}
                      onChange={(e) => {
                        this.handleAchievementsFormChange(e, "title");
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
                      value={this.state.achievements.year}
                      onChange={(e) => {
                        this.handleAchievementsFormChange(e, "year");
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
                      value={this.state.achievements.description}
                      onChange={(e) => {
                        this.handleAchievementsFormChange(e, "description");
                      }}
                    />

                  </AccordionDetails>
                </Accordion>
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
