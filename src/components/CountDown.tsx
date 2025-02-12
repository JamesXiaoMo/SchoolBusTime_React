import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CountDown() {
  return (
    <Card sx={{ minWidth: { md: 250 }, minHeight: { md: 250 } ,marginTop: }}>
      <CardContent>
        <Typography>校车发车时间</Typography>
      </CardContent>
    </Card>
  );
}