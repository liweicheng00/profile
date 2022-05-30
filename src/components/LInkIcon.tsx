interface linkInfo {
    src: string
    url: string
}

function LinkIcon(props: linkInfo) {
    console.log(props)

    return (
        <a href={props.url} target="_blank">
            <img className="bg-white rounded-lg w-8 m-2"
                src={props.src} />
        </a>

    )
}

export default LinkIcon