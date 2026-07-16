import Head from "next/head";


import { getFeaturedEvents } from "../helpers/api-utli";
import EventList from "../components/events/event-list";

function HomePage(props) {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <Head>
                <title>Next Js Events</title>
                <meta name="description" content="find a lot of great events that allow you to evolve"></meta>
            </Head>
            <EventList items={props.events}/>
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();


    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}



export default HomePage;