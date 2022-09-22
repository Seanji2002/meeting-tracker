import {PropsWithChildren} from "react";

const MeetingCard = (props: PropsWithChildren) => {
    return (
            <div className="flex mx-20 mt-5 mb-5 bg-white shadow-xl overflow-hidden">
                <div style={{margin: 20}}>{props.children}</div>
            </div>
    )
}

export default MeetingCard