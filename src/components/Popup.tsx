import {useContext, useEffect, useState} from "react";
import {PopupContext} from "./Project";

interface props {
    src: string
    url?: string
    video?: string
}

function Popup(props: props) {
    const {isOpen} = useContext(PopupContext)
    return (
        <div>
            <img className={`rounded-b-2xl my-auto ${isOpen ? 'hidden' : ''}`} src={props.src} alt="popup"/>
            {isOpen && props.url ? <iframe className={`w-[40rem] h-[80vh] rounded-b-2xl flip`} src={props.url}/> : null}
            {isOpen && props.video ?
                <video autoPlay={true}  controls className={`w-[40rem] h-[80vh] rounded-b-2xl flip`} src={props.video}>
                    <source src={props.video} type="video/mp4"/>
                </video> : null}
        </div>
    )
}

export default Popup
