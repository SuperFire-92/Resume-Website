import * as Preset from "./Presets"

function Welcome() {
    return (
        <>
            <br/>
            <Preset.SectionHeader title='Welcome'/>
            <br/>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '80%', height: '18vw', position: 'relative', backgroundColor: '#1F1F1F', justifyContent: 'center', display: 'flex', border: 'solid white', }}>
                    <p style={{color: 'white', margin: '4px', textAlign: 'center', fontSize: '1.4vw'}}>
                        Hi there! Welcome to my website! My name is Nicolaas, and I am a software developer.
                        <br/><br/>
                        Here you can find information about myself and a list of my different coding projects. If you would like to reach out, you can contact me at <a href="mailto:nickdyk21@gmail.com">nickdyk21@gmail.com</a>,
                        and you can find all of my projects at <a href="https://github.com/SuperFire-92">github.com/SuperFire-92</a>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Welcome