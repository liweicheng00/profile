import React, {useEffect, useState} from "react";
import codeImage from '../assets/img/image 2.png'
import Frame from "./Frame"
function Carousel() {
    const [translateX, setTranslateX] = useState(0)
    const bars = Array.from({length: 3}, (_, i)=>{
        return (
            <div key={i} className={`h-1 w-10 transition-all duration-700 bg-[${i===translateX ? '#E5C199':'#555555'}] rounded-lg`}/>
        )
    })
    useEffect(()=>{
        const interval = setInterval(()=>{
            let x
            if (translateX < 2){
                x = translateX + 1
            } else {
                x = 0
            }
            setTranslateX(x)
        }, 3000)
        return ()=>clearInterval(interval)
    }, [translateX])
    return (
        <div>
            <Frame>
                <div className={`overflow-hidden`}>
                    <div className={`flex transition-all duration-700`} style={{transform: `translate(${-16*translateX}rem, 0px)`}}>
                        <img className={``} src={codeImage}/>
                        <img src={codeImage}/>
                        <img src={codeImage}/>
                    </div>
                </div>
            </Frame>
            <div className="flex justify-around mt-5">
                {bars}
            </div>
        </div>
    )
}

export default Carousel
