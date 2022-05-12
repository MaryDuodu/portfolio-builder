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
  Divider,
} from "@mui/material";
import Router from "next/router";
import React from "react";
import TabPanel from "../../components/tab-panel";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class ViewPortfolio extends React.Component<
  {
    portfolio: any,
  },
  {
    // portfolio: any,
    expanded: false | string
  }
> {

  constructor(props: any) {
    super(props);

    // console.log(this.state.portfolio)
    this.state = {
      // portfolio: {},
      expanded: false
    };
    // console.log(this.state.portfolio)
  }

  handleAccordionChange(panel: string, isExpanded: boolean) {
    this.setState({ expanded: isExpanded ? panel : false })
  }


  render() {
    return (
      <div style={{margin: "10px"}}>
        <Divider />
        <Typography variant="h6" component="div" textAlign="center">
          Education Experience
        </Typography>

        <Divider />

        <Typography mt={2} variant="subtitle1" >
          School Attended:
          {this.props.portfolio.education.school}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Area of Study:
          {this.props.portfolio.education.fieldOfStudy}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Certificated:
          {this.props.portfolio.education.certificate}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Year Started:
          {this.props.portfolio.education.from}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Year Completed:
          {this.props.portfolio.education.to}
        </Typography>

        <Divider />

        <Typography variant="h6" component="div" textAlign="center">
          Work Experience
        </Typography>

        <Divider />

        <Typography mt={2} variant="subtitle1" >
          Organization:
          {this.props.portfolio.workExperience?.company || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Position:
          {this.props.portfolio.workExperience?.position || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Role:
          {this.props.portfolio.workExperience?.role || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Year Joined:
          {this.props.portfolio.workExperience?.from || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Year Left:
          {this.props.portfolio.workExperience?.to || "N/A"}
        </Typography>

        <Divider />

        <Typography variant="h6" component="div" textAlign="center">
          Notable Achievements
        </Typography>

        <Divider />

        <Typography mt={2} variant="subtitle1" >
          Organization:
          {this.props.portfolio.achievements?.institution || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Award Name:
          {this.props.portfolio.achievements?.title || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Year Received:
          {this.props.portfolio.achievements?.year || "N/A"}
        </Typography>

        <Typography mt={2} variant="subtitle1" >
          Brief description of award:
          {this.props.portfolio.achievements?.description || "N/A"}
        </Typography>
      </div>
    );
  }
}

export default ViewPortfolio;
