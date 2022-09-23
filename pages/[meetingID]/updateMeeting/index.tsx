import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import sanityClient from "../../../utils/sanity-client";

const NewMeeting = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const meetingInfo = props.meeting

    return (
        <div className="w-full max-w-max">
            <form action="/api/sanityHandler" method="POST" className="w-full ml-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="_id" className="block text-gray-700 text-sm font-bold mb-2">Meeting ID (Read Only):</label>
                    <input type="text" id="_id" name="_id" value={meetingInfo._id} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Meeting Title:</label>
                    <input type="text" id="title" name="title" defaultValue={meetingInfo.title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="timeEstimate" className="block text-gray-700 text-sm font-bold mb-2">Estimated Time:</label>
                    <input type="number" id="timeEstimate" name="timeEstimate" defaultValue={meetingInfo.timeEstimate} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea id="description" defaultValue={meetingInfo.description} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <button type="submit" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Submit</button>
            </form>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const currMeeting = context.query.meetingID

    const meeting = await sanityClient.get('meeting', String(currMeeting))

    return {
        props: {meeting},
    }
}

export default NewMeeting;
