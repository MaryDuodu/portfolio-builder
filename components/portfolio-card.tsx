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
  >
    •
  </Box>
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
        {props.portfolio.education?.to} and obtained
        {props.portfolio.education?.certificate}
        <br />
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Work Experience
        </Typography>
        <Typography variant="body2">
          work samples
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
