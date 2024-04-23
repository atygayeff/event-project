import { useEffect, useState } from "react";
import { getEvents } from "../services/events";
import { CmsEvent } from "../types/events";
import { Events } from "../components/events/Events";

export const Index = () => {
    const [events, setEvents] = useState<CmsEvent[]>([]);
    useEffect(() => {
       getEvents().then((r) => {
        console.log(r);
        setEvents(r.data);
       }) 
    }, []);
    return <Events events={events} />;
};
