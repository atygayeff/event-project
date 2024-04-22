import { FC } from "react";
import { CmsEvent } from "../../types/events";
import { Grid } from '@mui/material';

type Props = {
    events: CmsEvent[]
}

export const Events: FC<Props> = ({ events }) => {
    return (
    <Grid container spacing={2}>
        {
            events.map((item) => (
                <Grid key={item.id} item xs={4}>
                    {item.attributes.title}
                </Grid>
            ))}
    </Grid>
    )
}