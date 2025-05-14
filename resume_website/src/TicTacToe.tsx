import { useEffect, useState } from 'react';
import * as Preset from "./Presets";
import Media from "./Media";
import Empty from "/assets/TicTacToe_Empty.png";
import X from "/assets/TicTacToe_X.png";
import O from "/assets/TicTacToe_O.png";

function TicTacToe() {
    
    //These four variables are all for managing the board...
    const [board, setBoard] = useState([
        [Empty, Empty, Empty],
        [Empty, Empty, Empty],
        [Empty, Empty, Empty]
    ]);
    const [gameOverFlag, setGameOverFlag] = useState(false);
    //and these two flags are used to ensure checkwin runs after setBoard() properly runs
    const [checkWinPlayerFlag, setCheckWinPlayerFlag] = useState(false);
    const [checkWinAIFlag, setCheckWinAIFlag] = useState(false);
    const WIN_MESSAGE = "You Win!";
    const LOSE_MESSAGE = "You Lose!";
    const TIE_MESSAGE = "It's a Tie!";
    const WAIT_MESSAGE = "Game In Progress";
    const [gameStateMessage, setGameStateMessage] = useState(WAIT_MESSAGE);
    
    
    useEffect(() => {
        if (gameOverFlag)
        {
            let winner = checkWin();
            if (winner == -1)
            {
                //Player is the winner
                setGameStateMessage(WIN_MESSAGE);
            }
            else if (winner == 0)
            {
                //It's a tie
                setGameStateMessage(TIE_MESSAGE);
            }
            else if (winner == 1)
            {
                //AI is the winner
                setGameStateMessage(LOSE_MESSAGE);
            }
        }
        else
        {
            setGameStateMessage(WAIT_MESSAGE);
        }
    }, [gameOverFlag]);
    
    //This effect lets the game properly check if the board is in a win state for the player,
    //and if it isn't it starts the AI's turn
    useEffect(() => {
        if (checkWinPlayerFlag) {
            if (checkWin() == -1 || checkWin() == 0)
            {
                setGameOverFlag(true);
            }
            if (!gameOverFlag)
            {
                var moves = startMiniMax();
                const newBoard = board.map((r, rowIndex) => {
                    return r.map((c, colIndex) => {
                        if (rowIndex === moves[0] && colIndex === moves[1]) {
                            return O;
                        }
                        return c;
                    });
                });
                setBoard(newBoard);
                setCheckWinAIFlag(true);
                setCheckWinPlayerFlag(false);
            }
        }
    }, [checkWinPlayerFlag]);
    
    //This lets the game check if the board is in a win state for the AI.
    useEffect(() => {
        if (checkWinAIFlag) {
            if (checkWin() == 1 || checkWin() == 0)
            {
                setGameOverFlag(true);
            }
        }
        setCheckWinAIFlag(false);
        
    }, [checkWinAIFlag]);
    
    //When the user clicks a spot, place their tile if it's a valid move.
    const handleClick = (row: number, col: number) => {
        if (gameOverFlag)
            return;
        var pass = false;
        const newBoard = board.map((r, rowIndex) => {
            return r.map((c, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    if (c === Empty) {
                        pass = true;
                        return X;
                    }
                }
                return c;
            });
        });
        if (pass)
        {
            setBoard(newBoard);
            setCheckWinPlayerFlag(true);
        }
    };
    
    //Check if there's a win (for the game)
    const checkWin = () => {
        for (let i = -1; i < 2; i = i + 2)
        {
            var check;
            if (i == -1)
                check = X;
            else
                check = O;
            if (board[0][0] == check && board[0][1] == check && board[0][2] == check)
                return i
            if (board[1][0] == check && board[1][1] == check && board[1][2] == check)
                return i
            if (board[2][0] == check && board[2][1] == check && board[2][2] == check)
                return i
            if (board[0][0] == check && board[1][0] == check && board[2][0] == check)
                return i
            if (board[0][1] == check && board[1][1] == check && board[2][1] == check)
                return i
            if (board[0][2] == check && board[1][2] == check && board[2][2] == check)
                return i
            if (board[0][0] == check && board[1][1] == check && board[2][2] == check)
                return i
            if (board[2][0] == check && board[1][1] == check && board[0][2] == check)
                return i
            if (board[0][0] != Empty && board[0][1] != Empty && board[0][2] != Empty && 
                board[1][0] != Empty && board[1][1] != Empty && board[1][2] != Empty && 
                board[2][0] != Empty && board[2][1] != Empty && board[2][2] != Empty)
                return 0;
        }
        return -2;
    }
    
    const startGame = (aiStarts: boolean) => {
        setBoard([[Empty, Empty, Empty], [Empty, Empty, Empty], [Empty, Empty, Empty]]);
        setGameOverFlag(false);
        if (aiStarts)
        {
            setCheckWinPlayerFlag(true);
        }
    }
    
    //MiniMaxing's checkWin (accepts a board instead of using the global board)
    const checkWinMini = (board: string[][]) => {
        for (let i = -1; i < 2; i = i + 2)
        {
            var check;
            if (i == -1)
                check = X;
            else
                check = O;
            if (board[0][0] == check && board[0][1] == check && board[0][2] == check)
                return i;
            if (board[1][0] == check && board[1][1] == check && board[1][2] == check)
                return i;
            if (board[2][0] == check && board[2][1] == check && board[2][2] == check)
                return i;
            if (board[0][0] == check && board[1][0] == check && board[2][0] == check)
                return i;
            if (board[0][1] == check && board[1][1] == check && board[2][1] == check)
                return i;
            if (board[0][2] == check && board[1][2] == check && board[2][2] == check)
                return i;
            if (board[0][0] == check && board[1][1] == check && board[2][2] == check)
                return i;
            if (board[2][0] == check && board[1][1] == check && board[0][2] == check)
                return i;
        }
        if (board[0][0] == Empty || board[0][1] == Empty || board[0][2] == Empty || 
            board[1][0] == Empty || board[1][1] == Empty || board[1][2] == Empty || 
            board[2][0] == Empty || board[2][1] == Empty || board[2][2] == Empty)
            return -2;
        return 0;
    }
    
    //Starts the miniMax algorithm
    const startMiniMax = () => {
        var bestScore = -Infinity;
        var score = -Infinity;
        var copyBoard;
        var moves = [-1,-1];
        for (var r = 0; r < 3; r++)
        {
            for (var c = 0; c < 3; c++)
            {
                copyBoard = board;
                if (copyBoard[r][c] == Empty)
                {
                    //Min max here and get the score
                    //If the score is higher than the best score, set this move to the best score and save the move
                    copyBoard[r][c] = O;
                    score = miniMaxAlg(copyBoard, false);
                    copyBoard[r][c] = Empty;
                    
                    if (score > bestScore)
                    {
                        bestScore = score;
                        moves[0] = r;
                        moves[1] = c;
                    }
                }
            }
        }
        return moves;
    }
    
    //The MiniMax Algorithm
    const miniMaxAlg = (board: string[][], max: boolean) => {
        if (checkWinMini(board) !== -2)
        {
            return checkWinMini(board);
        }
        
        let bestScore = max ? -Infinity : Infinity;
        
        for (var r = 0; r < 3; r++)
        {
            for (var c = 0; c < 3; c++)
            {
                if (board[r][c] == Empty)
                {
                    board[r][c] = max ? O : X;
                    const score = miniMaxAlg(board, !max);
                    board[r][c] = Empty;
                    if (max)
                    {
                        bestScore = Math.max(score, bestScore);
                    }
                    else
                    {
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
        }
        return bestScore;
    }
    
    return (
        <>
        <br/>
        <Preset.SectionHeader title='Tic Tac Toe' width='85%'/>
        <br/>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginLeft: '10vw', marginBottom: '10vw', width: '15vw', height: '15vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: 'white', borderStyle: 'solid'}}>
                <button onClick={() => startGame(false)} className='ticTacToeButton' style={{width: '100%', height: '50%', borderBottom: 'solid white'}}>X Start</button>
                <button onClick={() => startGame(true)} className='ticTacToeButton' style={{width: '100%', height: '50%'}}>O Start</button>
            </div>
            </div>
            <div style={{width: '30%', height: '0%', position: 'relative', backgroundColor: '#1F1F1F'}}>
                <div style={{marginBottom: '-4px'}}>
                    <a onClick={() => handleClick(0, 0)}><Media src={board[0][0]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(0, 1)}><Media src={board[0][1]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(0, 2)}><Media src={board[0][2]} style={{width: '33.33%'}}/></a>
                </div>
                <div style={{marginBottom: '-5px'}}>
                    <a onClick={() => handleClick(1, 0)}><Media src={board[1][0]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(1, 1)}><Media src={board[1][1]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(1, 2)}><Media src={board[1][2]} style={{width: '33.33%'}}/></a>
                </div>
                <div style={{marginBottom: '-4px'}}>
                    <a onClick={() => handleClick(2, 0)}><Media src={board[2][0]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(2, 1)}><Media src={board[2][1]} style={{width: '33.33%'}}/></a>
                    <a onClick={() => handleClick(2, 2)}><Media src={board[2][2]} style={{width: '33.33%'}}/></a>
                </div>
            </div>
            <div style={{width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginRight: '10vw', marginBottom: '10vw', width: '15vw', height: '15vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: 'white', borderStyle: 'solid', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p className='preset_p' style={{fontSize: '2.5vw', margin: 0}}>{gameStateMessage}</p>
            </div>
            </div>
        </div>
        <br/>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '8vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: 'white', borderStyle: 'solid'}}>
            <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', left: '1vw', right: '1vw', top: '1vw', bottom: '1vw'}}>
                    This is a Tic Tac Toe game I made using React. You play against an AI that uses a MiniMax algorithm to guarantee the best moves every time. Click on a square to place your X,
                    and the AI will place their tile after you. Click the X Start button to start or restart the game with you going first, or the O Start button to start the game with the AI going first.
                    Whoever gets 3 in a row first wins. The algorithm the AI uses should ensure that the AI always wins or ties.
                </p>
            </div>
        </div>
        </>
    )
}

export default TicTacToe