import React from 'react'
import "./VideoCards.css"
import Avatar from "@material-ui/core/Avatar";

function VideoCards({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__image" src={image} alt="clone"/>
            <div className="video__info">
                    <Avatar
                        className="videoCard__avatar"
                        alt={channel}
                        src={channelImage}
                    />
                    <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} - {timestamp}
                    </p>
                    </div>                    
            </div>
        </div>
    )
}
export default VideoCards
