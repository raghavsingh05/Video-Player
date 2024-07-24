import { VideoCard } from "./VideoCard"

const Videos = [{
    title: "how to learn MERN in 90 days | Code with me",
    author: "Raghav-live",
    views: "10M",
    timestamp: "10 days ago",
    image: "photo1.jpg",
    thumbimage: "thumb.jpg"
}, {
    title: "how to learn wordpress in 10 days | Code with me",
    author: "Raghav-live",
    views: "10M",
    timestamp: "10 days ago",
    image: "photo1.jpg",
    thumbimage: "thumb.jpg"
}, {
    title: "how to learn Web Developer in 90 days | Code with me",
    author: "Raghav-live",
    views: "10M",
    timestamp: "10 days ago",
    image: "photo1.jpg",
    thumbimage: "thumb.jpg"
}, {
    title: "how to learn video editing | Code with me",
    author: "Raghav-live",
    views: "10M",
    timestamp: "10 days ago",
    image: "photo1.jpg",
    thumbimage: "thumb.jpg"
}]

export const VideoGrid = () => {
    return <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard
                title={video.title}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                image={video.image}
                thumbimage={video.thumbimage}
            ></VideoCard>
        </div>)}
    </div>
}