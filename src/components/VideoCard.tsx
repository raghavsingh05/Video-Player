

export function VideoCard(props: any) {
    return <div className="p-1 cursor-pointer">
        <img className="rounded-xl" src={props.image} alt="" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2 pr-1">
                <img className="rounded-full " src={props.thumbimage} alt="" />
            </div>
            <div className="col-span-10">
                <div className=" text-sm">
                    {props.title}
                </div>
                <div className=" text-gray-400 text-xs">
                    {props.author}
                </div>
                <div className=" text-gray-400 text-xs">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}