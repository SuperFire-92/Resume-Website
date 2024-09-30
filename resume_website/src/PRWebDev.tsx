import * as Preset from './Presets'

function WebDev()
{
    return (
        <>
            <Preset.SectionHeader title='Website Development' width='85%'/>
            <br/>
            <Preset.ProjectPreset1I_1P_M title='Click Counter' date='12/11/2023' github='https://github.com/SuperFire-92/CIS212_Homework03' special={true} image1='/assets/ClickCounter.png'
            paragraph1={<>This website was my final project in my web development class. I had to make an app that would count the number of clicks a user could
            do within a matter of five seconds, and then show them how many clicks per second the user averaged. It also required a login system, so every user would
            have their own account stored in a database. Using that same system, I also was able to store high scores, and show them on a leaderboard.</>}/>
            <br/>
            <Preset.ProjectPreset1I_1P title='Animal Food Blog' date='11/12/2023' github='https://github.com/SuperFire-92/CIS212_Homework02' special={false} image1='/assets/FoodBlog.png'
            paragraph1={<>This project required me to build a blog website. I chose the theme for the website to be "Animal Food Recipes", where animals could
            post blogs showing their interesting recipes. The user is able to type and post blogs using a TinyMCE text editor on the site. The site does not connect
            to a database, so no posts would be saved outside of the user's session.</>}/>
        </>
    )
}

export default WebDev