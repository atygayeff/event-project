import { FC } from "react";
import { CmsEvent } from "../../types/events";
import { CardContent, Grid, Card, CardHeader, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";

type Props = {
    events: CmsEvent[]
}

export const Events: FC<Props> = ({ events }) => {
    return (
        <Grid container spacing={2}>
            {events.map((item) => (
                <Grid key={item.id} item xs={4}>
                    <Link to={`/events/details/${item.id}`}>
                        <Card sx={{ height: '100%' }}>
                            <CardHeader title={item.attributes.event_category?.data?.attributes.title || ''}
                            />
                            {item.attributes.cover?.data && (
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={item.attributes.cover?.data.attributes.url}
                                    alt="Paella dish"
                                />
                            )}
                            <CardContent> <h2>{item.attributes.title}</h2> <h3> Дата начала {item.attributes.start_date}</h3> <h3> Дата окончания {item.attributes.end_date}</h3> </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}