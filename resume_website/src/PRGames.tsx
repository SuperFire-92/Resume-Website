import * as Preset from './Presets'
import RPG_Combat from '/assets/RPG_Combat.mp4'
import RPG_Puzzle from '/assets/RPG_Puzzle.mp4'
import RPG_Code from '/RPG_Code.txt'

function GameDev()
{
    return (
        <>
            <Preset.SectionHeader title='Unity Game Development' width='85%'></Preset.SectionHeader>
            <br/>
            <Preset.ProjectPreset1C_2I_3P title='RPG Game - UNDERWORLDR' date='12/11/2023' github={"https://github.com/Ludidas/CIS267_FinalProject"} special={true} codeExample={RPG_Code} language='language-csharp' image2={RPG_Combat} image3={RPG_Puzzle}
            paragraph1={<>UNDERWORLDR is an RPG game that I worked on with a group of four other people using Unity. It was my final project for my game development class,
            and was also featured in the <a href='https://www.monroeccc.edu/news/2024/media-advisory-mccc-student-honors-symposium-images-reveal-on-418' target='_blank'>Monroe County Community College Student Honors Symposium</a>.
            We spent forty days on this project, and it includes combat, puzzles, and dialogue with characters.
            I spent most of my time working on the player, including the controls for him, the way he moves, and how he interacts with the game's world.</>}
            paragraph2={<>Here is the game script that deals with controlling every aspect of the player, from movement to combat and everywhere in between. This is the script I put the most work into, and also the longest script in the game.
            I spent countless hours working on it, adding code and keeping it organized. Each part of it is sorted into several different categories, such as Movement, Camera, Animations, and many others.
            These categories each have all of the functions relevant to their description.</>}
            paragraph3={<>These are some examples of the combat and different puzzles that can be found in the game. The game has three different weapons, one ranged weapon and two melee weapons.
            Two of the weapons are kept locked away from the player until they complete two of the game's dungeons. The puzzles can be found in all three dungeons, and they each contain
            different unique puzzles.</>}/>
            <br/>
            <Preset.ProjectPreset1C_1I_3P title='JunkWare' date='01/28/2024' github='https://github.com/SuperFire-92/GGJ-2024-MCCC-Minigames' special={true} codeExample='/Minigames_Code.txt' language='language-csharp' image1='assets/Minigames_Footage.mp4'
            paragraph1={<>Junkware is a game I made with a team of ten people for the <a href='https://globalgamejam.org/jam-sites/2024/monroecountycommunitycollege' target='_blank'>2024 Global Game Jam</a>.
            We only had forty-eight hours to make the game from start to finish. The theme of the game
            that year was comedy, so my team and I built a fast paced game made up of short minigames, all of which had humorous themes to them.</>}
            paragraph2={<>Here is the code that keeps track of all of the major game components, such as the score and switching between minigames. As I prefer to build the backend of these games,
            I worked heavily on this part, and did my best to keep it compact and simple. It connects all of the games together, and has a lot less code than the RPG Game and my 2D Runner, and was very
            easy to implement between all of the games.</>}
            paragraph3={<>Here you can see some gameplay of the different minigames. Each game lasts for about 5-10 seconds, and has a very simple control scheme. If you complete the game in the alloted time,
            you get a point and continue playing. If you fail, you lose one of your five lives, and do not gain a point. Every person on our team made at least one minigame, so each game has it's own style and personality.</>}/>
            <br/>
            <Preset.ProjectPreset1I_2P title="2D Runner - UnderBounce" date='10/24/2023' github={'https://github.com/SuperFire-92/CIS267_Homework01'} image1='/assets/Runner_Gameplay.mp4'
            paragraph1={<>UnderBounce is a 2D endless runner game that I made in the first half of my game development class. It took about a month of work, and was my first real project using Unity.
            The project had a few simple requirements. The game must be able to be played indefinitely, there must be three different enemies or obstacles, and three different items which modify the player
            in some way.</>}
            paragraph2={<>Here you can see some gameplay. The game has three powerups, a slowdown ability which can slow down time, bullets which can be used to destroy enemies and obstacles,
            and a shield which can save the player from one hit. There are also two enemies and one obstacle. There is a moving enemie, which slowly falls to block your path. There is a fast enemy,
            which quickly falls at you to catch you off gaurd. There is a cliff, which is connected to the wall and does not move in any special way. The game progressively gets harder the longer you play, as more and more enemies will spawn.</>}/>
        </>
    )
}

export default GameDev