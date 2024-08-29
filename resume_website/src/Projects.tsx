import { useState } from 'react'
import './Projects.css'
import { ProjectPreset3_3, ProjectPreset1_2_3 } from './Presets'
import template from './assets/template.png'

function Projects()
{
    return (
        <>
            <br></br>
            <ProjectPreset3_3 title='[TEMPLATE TITLE]' github={"https://www.github.com"} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/>
            <br></br>
            <ProjectPreset1_2_3 title='[TEMPLATE TITLE]' github={"https://www.github.com"} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/>
            <br></br>
        </>
    )
}

export default Projects