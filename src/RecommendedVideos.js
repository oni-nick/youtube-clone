import React from 'react'
import './RecommendedVideos.css'
import VideoCards from "./VideoCards"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
            {/* image, title, channel, views, timestamp, channelImage */}
                <VideoCards 
                    image="https://i.ytimg.com/vi/hmnk5OoCDgo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLjWE4zfXY6nWF8eBFhJodvqBkIw"
                    title="5x5로 야무지게 운동했습니다 ^_^ (운동 모티베이션) "
                    channel="말왕TV"
                    views="520,545회"
                    timestamp="2년 전"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3Tmspptc5PpsxThWXQJU8F-2Mux9lg7bjKCWTKcI=s68-c-k-c0x00ffffff-no-rj"
                    
                />
                <VideoCards 
                    image="https://i.ytimg.com/vi/fzGCXoyVwS4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkh2ZL4ygwquukJazFBB7wRGXQKQ"
                    title="8x8 볼륨 미쳤네요;;"
                    channel="말왕TV"
                    views="661,400회"
                    timestamp="1년 전"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnh3Tmspptc5PpsxThWXQJU8F-2Mux9lg7bjKCWTKcI=s68-c-k-c0x00ffffff-no-rj"
                />
                
                <VideoCards 
                    image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                    title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners "
                    channel="Clever Programmer"
                    views="139,046회"
                    timestamp="6개월 전"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
                />
                
                <VideoCards 
                    image="https://i.ytimg.com/vi/tCAt8eEKPDc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKxSFD5O-XoOeFeGDeTvjWrzoe3A"
                    title="Top 5 Programming Languages to Learn in 2020 to Get a Job Without a College Degree"
                    channel="Clever Programmer"
                    views="1,934,513회"
                    timestamp="1년 전"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
                />
            </div>
        </div>
    )
}
 
export default RecommendedVideos
