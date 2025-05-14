import { useNavigate } from 'react-router-dom'
import logo from '/assets/logo.png'
import Media from './Media'

function TopBar() {
    const navigate = useNavigate()
    return (
        <div id='background' className='container'>
            <div>
                <a href='/' onClick={() => navigate('/')}>
                <Media src={logo} style={{position: 'absolute', margin: '0px', width: '5.5vw', top: '.5vw'}}/>
                </a>
            </div>
            <div></div>
            <div id='buttonRow' style={{display: 'flex', flexDirection: 'row'}}>
                <button className='button' onClick={() => navigate('/')}>Home</button>
                <button className='button' onClick={() => navigate('/projects')}>Projects</button>
                <button className='button' onClick={() => navigate('/jobs')}>Jobs</button>
                <div id='dropdown'  style={{position: 'relative', display: 'inline-block'}}>
                    <button className='button'>More</button>
                    <div id='dropdownContent' style={{position: 'absolute', zIndex: '1', paddingTop: '1px'}}>
                        <button className='button' style={{fontSize: '0.8vw'}} onClick={() => navigate('/tictactoe')}>Tic Tac Toe</button>
                        {/*<button className='button' style={{fontSize: '0.8vw'}}>Page 2</button>
                        <button className='button' style={{fontSize: '0.8vw'}}>Page 3</button>*/}
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopBar