import axios from "axios"
import React, { useEffect } from 'react'
type Props = {
    title: string
}

const PostHeader = ({ title }: Props) => {
    const [url, setUrl] = React.useState();
    const [description, setDescription] = React.useState();
    const [imageCredit, setImageCredit] = React.useState();
    let today: Date = new Date();
    let date: string = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=CtINyOAdfidFR6Pd63geBXzSvZNyuD1OtktssbMf&date='+date
        useEffect(() => {
        axios.get(nasaUrl).then((response) => {
            setUrl(response.data.url)
            setDescription(response.data.explanation)
            setImageCredit(response.data.copyright)
        })
    });



    return (

        <div>
            <label>Credit: {imageCredit}</label>
            <img
                src={url}
                alt={`Cover Image for ${title}`}

            />              <p>{description}</p>
        </div>
    )
}

export default PostHeader