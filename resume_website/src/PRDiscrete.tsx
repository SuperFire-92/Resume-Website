import * as Preset from './Presets'

function Discrete()
{
    return (
        <>
            <Preset.SectionHeader title='Discrete Structures' width='85%'/>
            <br/>
            <Preset.ProjectPreset1I_1P title='Mini-Max Algorithm for Tic Tac Toe' date='05/01/2024' github='https://github.com/SuperFire-92/CIS167_FinalProject' image1='/assets/MinMax_Footage.mp4'
            paragraph1={<>For my final project in Discrete Structures, I made a console-based Tic Tac Toe game using C++. The player starts every game by deciding whether or not
            to have the first move. After that, the player will play against an AI, alternating turns. Whoever gets three of their pieces in a row first will win the game.
            The project required the AI to use a mini-max algorithm that would guarantee a win against the player, no matter what moves they choose.</>}/>
        </>
    )
}

export default Discrete