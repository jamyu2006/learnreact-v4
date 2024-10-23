import { useEffect, useState } from "react";

function EventComponent(){
    const [message, setMessage] = useState('hello');

    useEffect(()=>{
        const eventSource = new EventSource('http://localhost:3000/events');

        if(typeof(EventSource) !== 'undefined'){
            console.log("EventSource is supported.");
        } else {
            console.log("EventSource is not supported.");
        }

        eventSource.onmessage = event => {
            const eventData = JSON.parse(event.data);
            setMessage(eventData.message);
        }
        return () => eventSource.close();
    }, []);

    return (
        <div>{message}</div>
    )
}

export default EventComponent;

