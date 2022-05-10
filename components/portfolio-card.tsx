import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function PortfolioCard(props: { portfolio: any }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Portfolio Summary
        </Typography>
        <Typography variant="h5" component="div">
          Education Experience
        </Typography>
        Attended {props.portfolio.education?.school}
        From {props.portfolio.education?.from} To{" "}
        {props.portfolio.education?.to} and obtained{" "}
        {props.portfolio.education?.certificate}
        <br />
        <Typography variant="h5" component="div">
          Work Experience
        </Typography>
        <br />
        worked in {props.portfolio.Work?.company.name}
        From {props.portfolio.education?.from} To{" "}
        {props.portfolio.education?.to} and obtained{" "}
        {props.portfolio.education?.certificate}
        <br />
        <Typography variant="h5" component="div">
          Notable Experience
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">view</Button>
      </CardActions>
    </Card>
  );
}
