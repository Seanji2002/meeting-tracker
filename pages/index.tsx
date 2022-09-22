import sanityClient from "../utils/sanity-client";
import {InferGetServerSidePropsType} from 'next';
import Link from "next/link";
import MeetingCard from "../components/meetingCard";
import {useRouter} from "next/router";
import meetingID from "./[meetingID]";

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const currMeetings = props.meetings
    const router = useRouter()

    const handleRouting = async (meetingID: string) => {
        const detailsPage = "./" + meetingID
        await router.push(detailsPage)
    }

    return (
        <div className="w-screen items-center overflow-hidden">
            <div className="w-screen items-center overflow-hidden">
                {currMeetings.map((meeting) => {
                    return (
                        <MeetingCard key={meeting._id}>
                            <div className="ml-2">
                                <h1 className="font-medium leading-tight text-2xl mt-1 mb-1 text-black-600">
                                    Title:
                                </h1>
                                <p className="text-3xl">{meeting.title} </p>
                                <h1 className="font-medium leading-tight text-2xl mt-1 mb-1 text-black-600">
                                    Time Estimate:
                                </h1>
                                <p className="text-3xl"> {meeting.timeEstimate} minutes</p>
                                <div>
                                    <button onClick={() => handleRouting(meeting._id)}
                                            className="bg-transparent h-1/2 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Details
                                    </button>
                                </div>
                            </div>
                        </MeetingCard>
                    );
                })}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const meetings = await sanityClient.getAll('meeting')

    return {
        props: {meetings},
    }
}

export default Home
