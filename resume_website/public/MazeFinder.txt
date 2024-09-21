#include "Maze.h"
Maze::Maze()
{

}
//Reads through a text file of a provided name
void Maze::readTextFile(string fileName)
{
	ifstream file;
	string line;

	file.open(fileName);
	if (file)
	{
		//cout << "File Open" << endl;

		int lineCounter = 0;
		getline(file, line);
		//Puts the text file into the maze array
		for (int i = 0; i < 40; i++)
		{
			for (int j = 0; j < 40; j++)
			{
				maze[i][j] = line.at(lineCounter);
				if (line.at(lineCounter) == 'S')
				{
					startPos[0] = i;
					startPos[1] = j;
				}
				lineCounter++;
			}
		}
	}
	else
	{
		//cout << "File Not Found" << endl;
	}
}
//Displays the maze using the assume size of 40
void Maze::displayMaze()
{
	for (int i = 0; i < 40; i++)
	{
		for (int j = 0; j < 40; j++)
		{
			cout << maze[i][j] << " ";
		}
		cout << endl;
	}
}

//A beginning function to start completing the maze (called from main)
bool Maze::completeMaze()
{
	return completeMaze(startPos[0], startPos[1]);
}

//A recursive function to find the solution to the maze
bool Maze::completeMaze(int r, int c)
{
	if (maze[r][c] == 'E')
	{
		return true;
	}
	//turn the current spot into c to avoid other functions from jumping to this spot
	maze[r][c] = 'c';
	
	//start by checking right
	if (c < 39)
	{
		if (maze[r][c + 1] == ' ' || maze[r][c+1] == 'E')
		{
			if (completeMaze(r, c + 1))
			{
				maze[r][c] = '>';
				return true;
			}
		}
	}

	//then down
	if (r < 39)
	{
		if (maze[r + 1][c] == ' ' || maze[r + 1][c] == 'E')
		{
			if (completeMaze(r + 1, c))
			{
				maze[r][c] = 'v';
				return true;
			}
		}
	}

	//then left
	if (c > 0)
	{
		if (maze[r][c - 1] == ' ' || maze[r][c - 1] == 'E')
		{
			if (completeMaze(r, c - 1))
			{
				maze[r][c] = '<';
				return true;
			}
		}
	}

	//then up
	if (r > 0)
	{
		if (maze[r - 1][c] == ' ' || maze[r - 1][c] == 'E')
		{
			if (completeMaze(r - 1, c))
			{
				maze[r][c] = '^';
				return true;
			}
		}
	}

	//if all four directions return false, return false
	maze[r][c] = 'X';
	return false;
}

//A function to wipe all X's from the maze (makes the maze easier to read)
void Maze::clearMistakes()
{
	for (int i = 0; i < 40; i++)
	{
		for (int j = 0; j < 40; j++)
		{
			if (maze[i][j] == 'X')
			{
				maze[i][j] = ' ';
			}
		}
	}
}