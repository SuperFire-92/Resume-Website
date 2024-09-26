import { useNavigate } from 'react-router-dom'
import logo from '/assets/logo.png'

function TopBar() {
    const navigate = useNavigate()
    return (
        <div id='background' className='container'>
            <div className='row'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='row'></div>
            <div className='row' id='buttonRow'>
                <button className='button' onClick={() => navigate('/')}>Home</button>
                <button className='button' onClick={() => navigate('/projects')}>Projects</button>
                <button className='button' onClick={() => navigate('jobs')}>Jobs</button>
                
            </div>
        </div>
    )
}

export default TopBar