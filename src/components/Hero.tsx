import heroBackground from '../assets/img/E086B648-0D42-4816-96B4-34F259AEA8E4_1_201_a 1.png'
import codeImage from '../assets/img/image 2.png'
import Frame from './Frame'
import Carousel from './Carousel'

function Hero() {
    return (
        <div className="bg-cover bg-top h-[60vh] bg-hero-img flex flex-row flex-wrap items-center justify-center
        p-10 sm:px-20 lg:px-32">
            {/*<img className="absolute" src={heroBackground} alt="background"/>*/}
            <div className="basis-1/3 py-5">
                <h1 className="text-3xl text-white text-center">Hello World!</h1>
            </div>
            <div className="basis-1/2 h-1/3 flex items-center justify-center">
                <Carousel/>
            </div>
        </div>
    )
}

export default Hero
