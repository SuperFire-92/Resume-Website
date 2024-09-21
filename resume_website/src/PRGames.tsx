import * as Preset from './Presets'
import RPG_Combat from '/assets/RPG_Combat.mp4'
import RPG_Puzzle from '/assets/RPG_Puzzle.mp4'
import RPG_Code from '/RPG_Code.txt'

function GameDev()
{
    return (
        <>
            <Preset.SectionHeader title='Unity Game Development'></Preset.SectionHeader>
            <Preset.ProjectPreset1C_2I_3P title='RPG Game - UNDERWORLDR' date='12/11/2023' github={"https://github.com/Ludidas/CIS267_FinalProject"} special={true} codeExample={RPG_Code} language='language-csharp' image2={RPG_Combat} image3={RPG_Puzzle}
            paragraph1={<>UNDERWORLDR is an RPG game that I worked on with a group of four other people using Unity. It was my final project for my game development class, and it was also featured in the Monroe County Community College Annual Research Symposium.
            We spent forty days on this project, and it includes combat, puzzles, and dialogue with characters.
            I put most of my time working on the player, including the controls for him, the way he moves, and how he interacts with the game's world.</>}
            paragraph2={<>This is the game script that deals with controlling every aspect of the player, from movement to combat and everywhere in between. This is likely the script I put the most work into, and also the longest script in the game.
            I spent countless hours putting it together and keeping it organized. It is vertically sorted into several different categories, such as Movement, Camera, Animations, and many others.</>}
            paragraph3={<>These are examples of the combat and different puzzles that can be found in the game. The game has three different weapons, one ranged weapon and two melee weapons.
            Two of the weapons are kept locked away from the player until they complete two of the game's dungeons. The puzzles can be found in all three dungeons, and all of them contain
            different unique puzzles. There is a small maze, a matching puzzle, a memory puzzle, and more.</>}/>
            <br/>
            <Preset.ProjectPreset1C_1I_3P title='JunkWare' date='01/28/2024' github='https://github.com/SuperFire-92/GGJ-2024-MCCC-Minigames' special={true} codeExample='/Minigames_Code.txt' language='language-csharp' image1='assets/Minigames_Footage.mp4'
            paragraph1={<>Junkware is a game I made with a team of ten people for the <a href='https://globalgamejam.org/jam-sites/2024/monroecountycommunitycollege'>2024 Global Game Jam</a>. The theme of the game
            that year was comedy, so my team and I built a fast paced game made up of short minigames, all of which had funny themes to them.</>}
            paragraph2={<>Here is the code that keeps track of all of the major game components, such as the score and switching between minigames.</>}
            paragraph3={<>test3</>}/>
            <br/>
            <Preset.ProjectPreset1I_2P title="2D Runner - UnderBounce" date='10/24/2023' github={'https://github.com/SuperFire-92/CIS267_Homework01'} image1='/assets/Runner_Gameplay.mp4'
            paragraph1={<>UnderBounce is a 2D endless runner game that I made in the first half of my game development class. It took about a month of work, and was my first real project using Unity.'</>}
            paragraph2={<>Here you can see some gameplay. The game has three powerups, a slowdown ability which can slow down time, bullets which can be used to destroy enemies and obstacles,
            and a shield which can save the player from one hit. The game progressively gets harder the longer you play, as more and more enemies will spawn.</>}/>
        </>
    )
}

export default GameDev