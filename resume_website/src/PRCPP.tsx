import * as Preset from './Presets'

function CPP()
{
    return (
        <>
            <Preset.SectionHeader title='Visual Studio C++' />
            <Preset.ProjectPreset1C_1VI_3P title='Maze Solver' github='https://github.com/SuperFire-92/CIS250_Homework06' special={true} date='5/22/2023' image1='/assets/MazeFinder.png' codeExample='/MazeFinder.txt' language='language-csharp'
            paragraph1={<>This app was my final project to my second C++ class. We were required to build a console app that could solve a maze using a brute force recursion
            function. We then had to show the maze solved from start to finish. The start and finish could be anywhere on the maze, and the algorithm had to work for any provided
            maze.</>}
            paragraph2={<>Here is all of the code used to solve the maze. Here you can find the functions used to read the maze into an array, display the array, and solve the maze.
            The function to solve the maze used recursion to search every possible path from the start to the end. It would prioritize the directions right, down, left, and up in that
            order.</>}
            paragraph3={<>This is the maze after being solved. The path that the algorithm found is marked with arrows, and can be followed from the start at the top left to the end, which
            can be found in the bottom right quadrant.</>}/>
            <br/>
            <Preset.ProjectPreset1C_1VI_3P_M title='Doubly Linked Lists' github='https://github.com/SuperFire-92/CIS250_Homework03' special={false} date='3/13/2023' image1='/assets/DoublyLinked.png' codeExample='/DoublyLinked.txt' language='language-csharp'/>
        </>
    )
}

export default CPP