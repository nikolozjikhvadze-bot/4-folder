import { getAllEvents } from "../../helpers/api-utli";
import EventList from "../../components/events/event-list";
import EventSearch from '../../components/events/events-search'
import { Fragment } from "react/jsx-runtime";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEventsPage(props) {
    const events = props.events;
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <Head>
                <title>All My Events</title>
            </Head>
            <Head>

                <title>All Events</title>
                <meta 
                    name="description"
                    content="Find a lot of great events that allow you to evolve..."
                    key='description'
                />

            </Head>

            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }

}



export default AllEventsPage;