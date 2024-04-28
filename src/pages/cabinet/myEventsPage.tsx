import { useEffect, useState } from "react";
import { Events } from "../../components/events/Events";
import { CmsEvent } from "../../types/events";
import { useAuth } from "../../hooks/useAuth";
import { getMyEvents } from "../../services/events";
import { Box, Container } from "@mui/material";
import { Link } from 'react-router-dom';

export const MyEventsPage = () => {
    const [events, setEvents] = useState<CmsEvent[]>([]);

    const { userId } = useAuth();
    useEffect(() => {
        getMyEvents(userId).then((r) => {
            console.log(r);
            setEvents(r.data);
        })
    }, [userId]);

    return (
        <Container>
            <Link to="/cabinet/events/create">Добавить событие</Link>
            <Box mt={'18px'}>
            <Events events={events} />
            </Box>
        </Container>
    )
};

