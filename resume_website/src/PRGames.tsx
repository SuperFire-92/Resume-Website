import * as Preset from './Presets'
import template from '/assets/template.png'
import RPG_Combat from '/assets/RPG_Combat.gif'
import RPG_Puzzle from '/assets/RPG_Puzzle.gif'
import RPG_Code from '/RPG_Code.txt'

function GameDev()
{
    return (
        <>
            <Preset.SectionHeader title='Unity Game Development'></Preset.SectionHeader>
            <Preset.ProjectPreset1C_2I_3P title='RPG Game - UNDERWORLDR' github={"https://github.com/Ludidas/CIS267_FinalProject"} special={true} codeExample={RPG_Code} language='language-csharp' image2={RPG_Combat} image3={RPG_Puzzle}
            paragraph1={<>UNDERWORLDR is an RPG game that I worked on with a group of four other people using Unity. We spent forty days on this project, and it includes combat, puzzles, and dialogue with characters.
            I put most of my time working on the player, including the controls for him, the way he moves, and how he interacts with the game's world.</>}
            paragraph2={<>This is the game script that deals with controlling every aspect of the player, from movement to combat and everywhere in between. This is likely the script I put the most work into, and also the longest script in the game.
            I spent countless hours putting it together and keeping it organized. It is vertically sorted into several different categories, such as Movement, Camera, Animations, and many others.</>}
            paragraph3={<>These are examples of the combat and different puzzles that can be found in the game. The game has three different weapons, one ranged weapon and two melee weapons.
            Two of the weapons are kept locked away from the player until they complete two of the game's dungeons. The puzzles can be found in all three dungeons, and all of them contain
            different unique puzzles. There is a small maze, a matching puzzle, a memory puzzle, and more.</>}/>
            <br></br>
            <Preset.ProjectPreset1I_2P title="2D Runner - UnderBounce" github={'https://github.com/SuperFire-92/CIS267_Homework01'} image1='/assets/Runner_Gameplay.gif'
            paragraph1={<>UnderBounce is a 2D endless runner game that I made in the first half of my game development class. It took about a month of work, and was my first real project using Unity.'</>}
            paragraph2={<>Here you can see some gameplay. The game has three powerups, a slowdown ability which can slow down time, bullets which can be used to destroy enemies and obstacles,
            and a shield which can save the player from one hit. The game progressively gets harder the longer you play, as more and more enemies will spawn.</>}/>
        </>
    )
}

export default GameDev