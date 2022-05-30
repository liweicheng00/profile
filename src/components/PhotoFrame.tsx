interface photo {
    src: string
}
function PhotoFrame(props: photo) {
    const dots = Array.from({ length: 3 }, (_, i) => {
        return (
            <div key={i} className="rounded-full bg-[#E5C199] w-2 h-2 ml-0.5 hover:transition-all hover:w-3 hover:h-3"/>
        )
    })
    return (
        <div className="relative p-2">
            <img className="max-h-64 mx-auto" src={props.src} alt="photo" />
            {/*<div className="absolute top-0 left-8 flex flex-row pt-3 pl-3 h-8 items-center justify-start">*/}
            {/*    {dots}*/}
            {/*</div>*/}
        </div>
    )
}

export default PhotoFrame
