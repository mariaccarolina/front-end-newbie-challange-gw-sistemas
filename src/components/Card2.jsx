import "../css/Card2.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Card2({
  img = 'https://reqres.in/img/faces/7-image.jpg',
  name = 'Maria',
  email = 'maria@gmail.com',
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Avatar
        alt="Remy Sharp"
        src={img}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="body2">{email}</Typography>
      </CardContent>
    </Card>
  );
}

export default Card2;
