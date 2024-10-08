import * as Preset from './Presets'

function Jobs()
{
    return (
        <>
            <br/>
            <Preset.SectionHeader title='Job History'/>
            <br/>
            <Preset.JobPreset title='Fullfillment Specialist' date={'April 2023 - Current'} company={<><a href='https://sdbullion.com/' target='_blank'>SD Bullion</a></>}
            description1={<>Currently I work in a distribution center for a company called SD Bullion. I work on every part of the shipping line, including picking, placing,
            shipping, and outbound. I have to be very careful when shipping to ensure the customers are receiving the correct products, and ensure that my packages are
            as safe as they can be.</>}/>
            <br/>
            <Preset.JobPreset title='Code Sensei' date={'April 2022 - March 2023'} company={<><a href='https://www.codeninjas.com/' target='_blank'>Code Ninjas</a></>}
            description1={<>For about a year, I worked as a teacher at a franchise called Code Ninjas. We taught kids how to code in a custom game development progrma using JavaScript.
            Kids would come in and work on their assigned coding projects, and my job was to make sure they were staying focused on their tasks, and help guide them if they needed assistance.</>}/>
        </>
    )
}

export default Jobs