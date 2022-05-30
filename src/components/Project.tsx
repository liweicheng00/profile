import PhotoFrame from "./PhotoFrame";
import Photo from "../assets/img/CB37D0E3-A001-45C4-A487-01B826F19AC0_1_201_a 1.png";
import Frame from "./Frame";
import Popup from "./Popup";
import {createContext, useCallback, useContext, useEffect, useState} from "react";

interface ProjectProps {
    projectName: string
    description: string
    src: string
    url?: string
    video?: string
}

interface PopupData {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export const PopupContext = createContext<PopupData>({isOpen: false, setOpen: () => {}})

function usePopupManager(initOpen: boolean): PopupData {
    const [isOpen, setOpen] = useState(initOpen)
    return { isOpen, setOpen }
}
function Project(props: ProjectProps){
    const popupManager: PopupData = usePopupManager(false)
    return (
        <div className="text-white flex-row flex flex-wrap items-center justify-center
            p-10 sm:px-20 lg:px-32">
            <div className="basis-1/3  flex flex-col justify-center">
                <div className={`text-6xl italic font-bold text-center text-[#555555] whitespace-nowrap`}>{props.projectName}</div>
                <div className={`pt-3 text-lg italic text-center text-[#555555]`}>{props.description}</div>
            </div>
            <PopupContext.Provider value={popupManager}>
                <div className="basis-1/2  py-5 flex justify-center">
                    <Frame canFlip={true}>
                        <Popup src={props.src} url={props.url} video={props.video}/>
                    </Frame>
                </div>
            </PopupContext.Provider>

        </div>
    )
}

export default Project
