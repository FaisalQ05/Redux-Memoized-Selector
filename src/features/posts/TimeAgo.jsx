import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timeStamp }) => {
    let timeAgo = ''
    // console.log("timestamp : ", timeStamp)
    if (timeStamp) {
        const date = parseISO(timeStamp)
        // console.log("date : ", date)
        // console.log("ISo : ", typeof date)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return (
        <span>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo