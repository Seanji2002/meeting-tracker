import client from "../../utils/client";
import type {NextApiRequest, NextApiHandler, NextApiResponse} from "next";
import {number} from "prop-types";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const doc = req.body
            const currTitle = doc.title
            const currTimeEstimate: Number = +doc.timeEstimate
            const currDescription = doc.description
            const toBeUploaded = {
                _type: 'meeting',
                title: currTitle,
                timeEstimate: currTimeEstimate,
                description: currDescription,
            }

            //case where we need to modify
            if (doc._id != undefined) {
                await client.createOrReplace({
                    ...toBeUploaded,
                    _id: doc._id,
                })

                console.log("Updated Successfully")
            } else {
                const result = await client.create(toBeUploaded)
                console.log("Created Successfully")
            }
            res.redirect("/")
        }
        if (req.method === 'DELETE') {
            const targetID = req.body._id
            const result = await client.delete({query: `*[_id == $currID]`, params: {currID: targetID}})
            console.log("Deleted Successfully")
            res.status(200).json({})
        }
    } catch (e) {
        console.log("error occurred")
        res.status(500).json({})
    }
}

export default handler;