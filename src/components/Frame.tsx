import React, {cloneElement, createRef, useContext, useEffect, useRef, useState} from "react";
import {PopupContext} from "./Project";
import CSS from 'csstype';

interface props {
    children: React.ReactNode;
    canFlip?: boolean
}

function Frame(props: props) {
    const {isOpen, setOpen} = useContext(PopupContext)
    const [transition, setTransition] = useState(`w-64`)

    useEffect(() => {
        console.log('use effect', isOpen)
        if (isOpen) {
            setTransition(`flip-move w-[40rem] h-[80vh] `)
        } else {
            setTransition(`w-64`)
        }
    }, [isOpen])

    const creatDefaultDots = () => {
        return (
            Array.from({length: 3}, (_, i) => {
                return (
                    <div key={i}
                         className="rounded-full bg-[#E5C199] w-3 h-3 ml-1 hover:transition-all hover:w-4 hover:h-4"/>
                )
            })
        )
    }
    const creatCloseDot = () => {
        return (
            <div onClick={onCloseDotClick}
                 className="rounded-full bg-fuchsia-200 w-3 h-3 ml-1 hover:transition-all hover:w-4 hover:h-4"/>
        )
    }
    const onDivClick = () => {
        if (props.canFlip && !isOpen) setOpen(true)
    }
    const onCloseDotClick = () => {
        if (props.canFlip && isOpen) setOpen(false)
    }
    const openStyle: CSS.Properties = {'zIndex': 100}
    const closeStyle: CSS.Properties = {'zIndex': 0}
    return (
        <div
            onClick={onDivClick}
            style={isOpen ? openStyle : closeStyle}
            className={`transition-all block bg-slate-300/60 backdrop-blur-md rounded-2xl duration-700 ${transition}`}>
            <div className="flex flex-row pl-3 h-8 items-center justify-start overflow-hidden">
                {isOpen ? creatCloseDot() : creatDefaultDots()}
            </div>
            {props.children}
        </div>

    )
}

export default Frame
