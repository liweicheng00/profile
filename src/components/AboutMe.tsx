import Photo from '../assets/img/CB37D0E3-A001-45C4-A487-01B826F19AC0_1_201_a 1.png'
import LinkIcon from './LInkIcon'
import Stack from './Stack'
import PhotoFrame from './PhotoFrame'
import github from '../assets/img/github.png'
import linkedin from '../assets/img/linkedin.png'
import medium from '../assets/img/medium.png'

interface iconInfo {
    src: string
    url: string
    name: string
}

function AboutMe() {
    const iconsInfo: iconInfo[] = [
        {src: github, url: 'https://github.com/liweicheng00', name: 'github'},
        {src: linkedin, url: 'https://www.linkedin.com/in/liweicheng00/', name: 'linkedin'},
        {src: medium, url: 'https://medium.com/@liweicheng00', name: 'medium'}
    ]
    const iconsRender = iconsInfo.map(info => {
        return (
            <LinkIcon key={info.name} src={info.src} url={info.url}/>
        )
    })

    return (
        <div className="bg-gradient-to-r from-[#555555] to-[#9D9D9D]
        text-white flex-row flex flex-wrap items-center justify-center
        p-10 sm:px-20 lg:px-32">
            <div className="basis-1/3 h-1/3 justify-center">
                <PhotoFrame src={Photo}/>
                <div className='flex justify-center items-center'>
                    {iconsRender}
                </div>
            </div>
            <div className="basis-1/2 py-5">
                <div className="text-center text-3xl font-bold">
                    “Blablablablablablablablabla blablablaalablabla.“
                </div>
                <div className={`text-right pt-10`}>
                    by Leonard Cheng
                </div>
            </div>
        </div>
    )
}

export default AboutMe
