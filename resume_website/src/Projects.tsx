import { useState } from 'react'
import './Projects.css'
import { SectionHeader, ProjectPreset1C_2I_3P, ProjectPreset1I_2I_3P, ProjectPreset3I_3P } from './Presets'
import template from '/assets/template.png'
import GameDev from './PRGames'
import AppDev from './PRAndroid'

function Projects()
{
    return (
        <>
            <br></br>
            <ProjectPreset3I_3P title='[TEMPLATE TITLE]' github={"https://www.github.com"} special={false} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/>
            <br></br>
            <ProjectPreset1I_2I_3P title='[TEMPLATE TITLE]' github={"https://www.github.com"} special={true} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/>
            <SectionHeader title='College Projects' description='These projects are from all of the classes I took in college, sorted by the classes.' height='5vw'></SectionHeader>
            <GameDev></GameDev>
            <AppDev></AppDev>
            <br></br>
        </>
    )
}

export default Projects