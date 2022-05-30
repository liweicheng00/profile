import Sketch from "react-p5";
import React from "react";
import p5Types from "p5"

import GradientCursor from "../utils/p5/cursor";

interface props {
    children: React.ReactNode
}

function DynamicBackground(props: props) {
    const width: number = window.innerWidth
    const height: number = window.innerHeight + 300

    let cursor: GradientCursor
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.noStroke()
        cursor = new GradientCursor(p5, width, height)
    };

    const draw = (p5: p5Types) => {
        p5.background('#FFFFFF')
        cursor.update(p5.mouseX, p5.mouseY)
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw} style={{"position": 'absolute', 'zIndex': -100}}/>
            {props.children}
        </div>
    )
}

export default DynamicBackground
