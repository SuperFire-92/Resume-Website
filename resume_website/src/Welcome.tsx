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
                        {/* Hi! Welcome to my website! I am going to make this paragraph really, really long so that I can see what it would look like if I filled it up.
                        I can't stop typing because I need lines upon lines upon lines of text. It's really terrible how much I need.
                        <br></br><br></br>
                        What does this look like? Aw sick!
                        <br></br><br></br>
                        Can I fit a <a href="https://github.com/">link</a> in here? huge. */}
                        Hi there! Welcome to my website! My name is Nicolaas, and I am a software developer.
                        <br/><br/>
                        Here you can find information about myself and a list of my different coding projects. If you would like to reach out, you can contact me at <a href="mailto:nickdyk21@gmail.com">nickdyk21@gmail.com</a>,
                        and you can find the rest of my projects at <a href="https://github.com/SuperFire-92">github.com/SuperFire-92</a>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Welcome