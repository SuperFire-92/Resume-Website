import { useNavigate } from 'react-router-dom'
import logo from '/assets/logo.png'
import Media from './Media'

function TopBar() {
    const navigate = useNavigate()
    return (
        <div id='background' className='container'>
            <div>
                <Media src={logo} style={{position: 'absolute', margin: '0px', width: '5.5vw', top: '.5vw'}}/>
            </div>
            <div></div>
            <div id='buttonRow'>
                <button className='button' onClick={() => navigate('/')}>Home</button>
                <button className='button' onClick={() => navigate('/projects')}>Projects</button>
                <button className='button' onClick={() => navigate('jobs')}>Jobs</button>
                
            </div>
        </div>
    )
}

export default TopBar