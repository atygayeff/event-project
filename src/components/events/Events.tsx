import { FC } from "react";
import { CmsEvent } from "../../types/events";
import { CardContent, Grid, Card, CardHeader, CardMedia } from '@mui/material';

type Props = {
    events: CmsEvent[]
}

export const Events: FC<Props> = ({ events }) => {
    return (
        <Grid container spacing={2}>
            {
                events.map((item) => (
                    <Grid key={item.id} item xs={4}>
                        <Card sx={{ height: '100%'}}>
                            <CardHeader title={item.attributes.event_category?.data.attributes.title} />
                            <CardMedia
                            component="img"
                            height="500"
                            image={item.attributes.cover?.data.attributes.url}
                            alt="Paella dish"
                            />
                            <CardContent>{item.attributes.title}, {item.attributes.start_date}</CardContent>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    )
}