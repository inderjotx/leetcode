"use server"

import { google } from 'googleapis'



export async function getYoutubeVideos(problemTitle: string) {


    try {
        const YOUTUBE_API_KEY = process.env.YOUTUBE_API

        const query = `Leetcode ${problemTitle} solution`

        const youtube = google.youtube({
            version: 'v3',
            auth: YOUTUBE_API_KEY,
        });

        const response = await youtube.search.list(
            {
                q: query,
                maxResults: 2,
                part: ['id'],
                type: ["video"]
            })


        if (response.status != 200) throw new Error("Error fething data , response is not 200" + response.statusText)


        return {
            data: response.data.items,

        }

    }


    catch (e) {

        console.log(e)
        if (e instanceof Error) {
            return {
                success: false,
                error: e.message
            }
        }

        else {
            return {
                success: true,
                error: "Unknow error fetching data "
            }

        }
    }

}