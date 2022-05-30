import {useState} from 'react'
import logo from './logo.svg'
import heroBackground from './assets/img/E086B648-0D42-4816-96B4-34F259AEA8E4_1_201_a 1.png'
import Hero from "./components/Hero";
import './App.css'
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Project from "./components/Project";
import O2 from "./assets/img/mint-introduction-map.d8af2a75.png"
import Oexpo from "./assets/img/oexpo.png"
import Model from "./assets/img/model.png"
import ModelVideo from "./assets/img/oexpo_3d_v2.mp4"
import DynamicBackground from "./components/DynamicBackground";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <section>
                <Hero/>
                {/*<Stack/>*/}
                <AboutMe/>
                <DynamicBackground>
                    <Project src={O2} url={'https://www.o2meta.io/home'} projectName={'O2 META'}
                             description={'NFT Project'}/>
                    <Project src={Oexpo} url={'https://www.oexpo.io/vb/6141d5906e128e325be1127f'} projectName={'OEXPO'}
                             description={'Online 3D Exhibition'}/>
                </DynamicBackground>

                {/*<Project src={Model} video={ModelVideo} projectName={'Oexpo 3D 建模'}*/}
                {/*         description={'Build 3D model with mobile'}/>*/}
            </section>
        </div>


    )
}

export default App
