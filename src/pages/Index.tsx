import { useEffect } from "react"
import { getEvents } from "../services/events"

export const Index = () => {
    useEffect(() => {
       getEvents().then((r) => {
        console.log(r);
       }) 
    }, [])
    return <h1>Welcome</h1>;
}
