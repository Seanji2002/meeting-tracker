import {useRouter} from "next/router";
import sanityClient from "../../utils/sanity-client";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";



const Meeting = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const meetingInfo = props.meeting
    const router = useRouter()
    const callDELETE = async () => {
        const targetID = meetingInfo._id

        const response = await fetch('/api/sanityHandler', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id: targetID})
        })
        await router.push('/')
    }

    const navigateUpdate = async () => {
        const updateURL = '/' + meetingInfo._id +'/updateMeeting'
        await router.push(updateURL)
    }
    return (
        <div className="mx-10">
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
                Title:
            </h1>
            <p className="text-2xl">{meetingInfo.title}</p>
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
                Time Estimate:
            </h1>
            <p className="text-2xl">{meetingInfo.timeEstimate} Minutes</p>
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
                Description:
            </h1>
            <p className="text-2xl">{meetingInfo.description}</p>
            <button onClick={navigateUpdate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
            <button onClick={callDELETE} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
    );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const currMeeting = context.params!.meetingID

    const meeting = await sanityClient.get('meeting', String(currMeeting))

    return {
        props: {meeting},
    }
}

export default Meeting;
