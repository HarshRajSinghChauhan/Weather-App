import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function InfoBox({info}) {
    if (!info) {
        return (
            <div className='infoBox'>
                <h3 style={{ textAlign: "center" }}>Search for a city to see weather</h3>
            </div>
        );
    }
    return (
        <div className='infoBox'>
            <h2>Weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://plus.unsplash.com/premium_vector-1713697646432-eadca1cd5ab3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography>Temperature: {info.temp} °C</Typography>
                    <Typography>Min: {info.tempMin} °C | Max: {info.tempMax} °C</Typography>
                    <Typography>Feels Like: {info.feelsLike} °C</Typography>
                    <Typography>Humidity: {info.humidity}%</Typography>
                    <Typography>Condition: {info.weather}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
