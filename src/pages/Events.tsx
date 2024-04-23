import { useEffect, useState } from "react";
import { getEvents } from "../services/events";
import { CmsEvent } from "../types/events";
import { Events } from "../components/events/Events";
import { useParams } from "react-router-dom";

export const EventsPage = () => {
    const [events, setEvents] = useState<CmsEvent[]>([]);
    const { type } = useParams();
    useEffect(() => {
        getEvents({
            sort: type === 'new' ? 'createdAt:desc' : 'votes:desc',
        }).then((r) => {
            setEvents(r.data);
        })
    }, [type])
    return <Events events={events} />;
};
