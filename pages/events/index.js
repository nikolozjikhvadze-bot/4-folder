import { getAllEvents } from "../../helpers/api-utli";
import EventList from "../../components/events/event-list";
import EventSearch from '../../components/events/events-search'
import { Fragment } from "react/jsx-runtime";
import { useRouter } from "next/router";

function AllEventsPage(props) {
    const events = props.events;
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
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