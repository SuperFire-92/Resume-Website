import * as Preset from './Presets'
import App_Handyman from '/assets/Handyman_Footage.mp4'
import Handyman_Code from '/Handyman_Code.txt'

function AppDev()
{
    return (
        <>
            <Preset.SectionHeader title='Mobile App Development'/>
            <Preset.ProjectPreset1C_1VI_3P title='Handyman App' date='12/10/2023' github='https://github.com/SuperFire-92/CIS183_FinalProject' codeExample={Handyman_Code} language='language-java' special={true} image1={App_Handyman}
            paragraph1={<>The Handyman App was my final project in my Mobile App Development class. I worked with a graphic designer to build an app using Java and MySQL that would allow
            users to make calls to a handyman, and that handyman to be able to see all of the information about the call. The project required a database with full CRUD,
            so the users are able to make, modify, and delete accounts. It also allows any regular user to make and delete their own calls, and any handyman
            to delete any calls made to them.</>}
            paragraph2={<>This is the code handling the entire MySQL database. Near the top there is a function called onCreate, which handles building the entire database.
            There are four tables. Users which holds all users, Jobs which just holds a list of all possible jobs, HandymanJobs which affiliates handymen with their selected jobs
            that they will perform, and HandymanCalls which stores all calls made by users to their affiliated handymen.</>}
            paragraph3={<>Here you can see the general layout of the app. When logging into the app, you can either log in as a user or a handyman. If you log in as a handyman,
            you can change details about yourself and view all of your calls. If you log in as a user, you can make calls to handymen for any service you may need. Both types of logins
            have a page to change any account details as well.</>}/>
        </>
    )
}

export default AppDev