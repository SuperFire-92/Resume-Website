import * as Preset from './Presets'
import { useNavigate } from 'react-router-dom'

function Error()
{
    const navigate = useNavigate();
    
    return(
        <>
        <br/>
        <Preset.SectionHeader title='404: PAGE NOT FOUND'/>
        <br/>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '6vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: 'white', borderStyle: 'solid'}}>
                <h1 className='preset_p' style={{fontSize: '2.5vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto', left: '0', right: '0', top: '0', bottom:'0'}}>
                    Uh oh!
                </h1>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', bottom: '.25vw',}}>
                    Seems like you got lost! Click <a href='./' onClick={() => navigate('/')}>here</a> to return home!
                </p>
            </div>
        </div>
        </>
    )
}

export default Error