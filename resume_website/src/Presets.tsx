import { useState } from 'react'
import './Presets.css'

interface SectionHeaderProps {
    title: string;
}

export function SectionHeader({title}: SectionHeaderProps)
{
    return(
        <>
        <br></br>
        <div></div>
        </>
    )
}

interface ProjectPreset1Props {
    title: string;
    github: string;
    image1: string;
    image2: string;
    image3: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
}

//Three 1:1 images, three paragraphs
export function ProjectPreset3_3({title, github, image1, image2, image3, paragraph1, paragraph2, paragraph3} : ProjectPreset1Props) {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '28vw', position: 'relative', backgroundColor: '#1F1F1F'}}>
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <img src={image1} style={{position: 'absolute', left: '2vw', top: '2.2vw', width: '14vw'}}/>
                <img src={image2} style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0', top: '2.2vw', width: '14vw'}}/>
                <img src={image3} style={{position: 'absolute', right: '2vw', top: '2.2vw', width: '14vw'}}/>
                <p className='preset_p' style={{bottom: '.25vw', left:'.25vw', margin: '0', width: '20vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', bottom: '.25vw', width: '24vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '20vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}

interface ProjectPreset2Props {
    title: string;
    github: string;
    image1: string;
    image2: string;
    image3: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
}

//One 1:2 image, two 1:1 images, 3 paragraphs
export function ProjectPreset1_2_3({title, github, image1, image2, image3, paragraph1, paragraph2, paragraph3} : ProjectPreset2Props) {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '38vw', position: 'relative', backgroundColor: '#1F1F1F'}}>
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <img src={image1} style={{position: 'absolute', left: '8vw', top: '2.2vw', width: '14vw', height: '28vw'}}/>
                <img src={image2} style={{position: 'absolute', right: '8vw', top: '2.2vw', width: '14vw'}}/>
                <img src={image3} style={{position: 'absolute', right: '8vw', top: '16.3vw', width: '14vw'}}/>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '4vw', margin: '0', width: '34vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}