import * as Preset from './Presets'
import GameDev from './PRGames'
import AppDev from './PRAndroid'
import Discrete from './PRDiscrete'
import WebDev from './PRWebDev'
import CPP from './PRCPP'

function Projects()
{
    return (
        <>
            {/* <br></br>
            <ProjectPreset3I_3P title='[TEMPLATE TITLE]' github={"https://www.github.com"} special={false} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/>
            <br></br>
            <ProjectPreset1I_2I_3P title='[TEMPLATE TITLE]' github={"https://www.github.com"} special={true} image1={template} image2={template} image3={template}
            paragraph1='[EXAMPLE TEXT 1 THAT ALSO HAPPENS TO BE VERY VERY LONG SO LONG IT JUST KEEPS GOING WOOHOO OH]'
            paragraph2='[EXAMPLE TEXT 2 THAT IS ALSO SUPER DUPER LONG HOLY MOLY IT JUST KEEPS GOING AND GOING AND GOING]'
            paragraph3='[EXAMPLE TEXT 3 THAT IS NOT QUITE AS LONG OH DEAR OK]'/> */}
            <br/>
            <Preset.SectionHeader title='Projects' description='Here you can find a full list of all of the projects that I have been part of developing.' height='5vw'/>
            <br/>
            <Preset.SectionHeader title='College Projects' description='These projects are from all of the classes I took in college, sorted by class.' height='5vw' width='90%'/>
            <br/>
            <GameDev/>
            <br/>
            <AppDev/>
            <br/>
            <Discrete/>
            <br/>
            <WebDev/>
            <br/>
            <CPP/>
            <br></br>
        </>
    )
}

export default Projects