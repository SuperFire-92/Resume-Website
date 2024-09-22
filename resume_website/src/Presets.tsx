import { useEffect, useState } from 'react' 
//import the language
import CodeDisplay from './CodeDisplay'
import Media from './VidGif'
import Star from '/assets/Star.png'
const BORDER_COLOR = 'white'

function Date(date: string | undefined)
{
    return (
        <>
        <p className='preset_p' style={{left: '2vw', top: '.3vw', margin: '0'}}>{date}</p>
        </>
    )
}

interface SectionHeaderProps {
    title: string;
    description?: string;
    height?: string | undefined;
}

export function SectionHeader({title, description, height}: SectionHeaderProps)
{
    if (height == undefined)
        height = '3.1vw';
    return(
        <>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '100%', height: height, position: 'relative', backgroundColor: '#1F1F1F', borderColor: 'white', borderStyle: 'solid'}}>
                <h1 className='preset_p' style={{fontSize: '2.5vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', marginTop: 'auto', left: '0', right: '0', top: '0', bottom:'0'}}>{title}</h1>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', bottom: '0',}}>{description}</p>
            </div>
        </div>
        </>
    )
}

// interface ProjectPreset3_3_Props {
//     title?: string | undefined;
//     github?: string | undefined;
//     special?: boolean | false;
//     date?: string | undefined;
//     image1?: string | undefined;
//     image2?: string | undefined;
//     image3?: string | undefined;
//     paragraph1?: string | JSX.Element | undefined;
//     paragraph2?: string | JSX.Element | undefined;
//     paragraph3?: string | JSX.Element | undefined;
// }

// //Three 1:1 images, three paragraphs
// export function ProjectPreset3I_3P({title, github, special, image1, image2, image3, paragraph1, paragraph2, paragraph3} : ProjectPreset3_3_Props) {
//     var borderType = (special ? "solid" : "none");
//     var star = (special ? Star : undefined);
//     return (
//         <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//             <div style={{width: '80%', height: '28vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
//                 <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
//                 <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
//                 <a href={github} style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
//                 <Media src={image1} style={{position: 'absolute', left: '2vw', top: '2.2vw', width: '14vw'}}/>
//                 <Media src={image2} style={{position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: '0', right: '0', top: '2.2vw', width: '14vw'}}/>
//                 <Media src={image3} style={{position: 'absolute', right: '2vw', top: '2.2vw', width: '14vw'}}/>
//                 <p className='preset_p' style={{bottom: '.25vw', left:'.25vw', margin: '0', width: '20vw'}}>{paragraph1}</p>
//                 <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', bottom: '.25vw', width: '24vw' }}>{paragraph2}</p>
//                 <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '20vw'}}>{paragraph3}</p>
//             </div>
//         </div>
//     )
// }

// interface ProjectPreset1_2_3_Props {
//     title?: string | undefined;
//     github?: string | undefined;
//     special?: boolean | false;
//     date?: string | undefined;
//     image1?: string | undefined;
//     image2?: string | undefined;
//     image3?: string | undefined;
//     paragraph1?: string | JSX.Element | undefined;
//     paragraph2?: string | JSX.Element | undefined;
//     paragraph3?: string | JSX.Element | undefined;
// }

// //One 1:2 image, two 1:1 images, 3 paragraphs
// export function ProjectPreset1I_2I_3P({title, github, special, image1, image2, image3, paragraph1, paragraph2, paragraph3} : ProjectPreset1_2_3_Props) {
//     var borderType = (special ? "solid" : "none");
//     var star = (special ? Star : undefined);
//     return (
//         <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//             <div style={{width: '80%', height: '44vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
//                 <img src={star} hidden={!special} title='Favorite' alt='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
//                 <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
//                 <a href={github} style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
//                 <Media src={image1} style={{position: 'absolute', left: '8vw', top: '2.2vw', width: '14vw', height: '28vw'}}/>
//                 <Media src={image2} style={{position: 'absolute', right: '8vw', top: '2.2vw', width: '14vw'}}/>
//                 <Media src={image3} style={{position: 'absolute', right: '8vw', top: '16.3vw', width: '14vw'}}/>
//                 <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '4vw', width: '34vw'}}>{paragraph1}</p>
//                 <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
//                 <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
//             </div>
//         </div>
//     )
// }

interface ProjectPreset1_2_Props {
    title?: string | undefined;
    github?: string | undefined;
    special?: boolean | false;
    date?: string | undefined;
    image1?: string | undefined;
    paragraph1?: string | JSX.Element | undefined;
    paragraph2?: string | JSX.Element | undefined;
}

//One 16:9 image, 2 paragraphs
export function ProjectPreset1I_2P({title, github, special, date, image1, paragraph1, paragraph2} : ProjectPreset1_2_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '30vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <Media src={image1} style={{position: 'absolute', left: '3vw', bottom: '2.2vw', width: '30vw', height: '16.875vw'}}/>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '3vw', width: '48vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '4vw', right: '4vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
            </div>
        </div>
    )
}

interface ProjectPreset1C_2I_3P_Props {
    title?: string | undefined;
    github?: string | undefined;
    special?: boolean | false;
    date?: string | undefined;
    codeExample?: string;
    language: 'language-csharp' | 'language-javascript' | 'language-java'
    image2?: string | undefined;
    image3?: string | undefined;
    paragraph1?: string | JSX.Element | undefined;
    paragraph2?: string | JSX.Element | undefined;
    paragraph3?: string | JSX.Element | undefined;
}

//One code box, two 1:1 images, 3 paragraphs
export function ProjectPreset1C_2I_3P({title, github, special, date, codeExample: code, language, image2, image3, paragraph1, paragraph2, paragraph3} : ProjectPreset1C_2I_3P_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    const [codeText, setCodeText] = useState<string>('');
    
    if (code != undefined)
    {
        useEffect(() => {
        fetch(code)
            .then((response) => response.text())
            .then((text) => setCodeText(text))
            .catch((error) => console.error('Error fetching the text file:', error));
        }, []);
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '44vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <CodeDisplay code={codeText} language={language} color='white' position='absolute' left='2vw' top='2.2vw' width='18vw' height='28vw'></CodeDisplay>
                <Media src={image2} style={{position: 'absolute', right: '3vw', top: '2.2vw', width: '16vw'}}/>
                <Media src={image3} style={{position: 'absolute', right: '3vw', top: '18.3vw', width: '16vw'}}/>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '4vw', width: '34vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}

interface ProjectPreset1C_1VI_3P_Props {
    title?: string | undefined;
    github?: string | undefined;
    special?: boolean | false;
    date?: string | undefined;
    codeExample?: string;
    language: 'language-csharp' | 'language-javascript' | 'language-java'
    image1?: string | undefined;
    paragraph1?: string | JSX.Element | undefined;
    paragraph2?: string | JSX.Element | undefined;
    paragraph3?: string | JSX.Element | undefined;
}

//One code box, one 9:16 image, 3 paragraphs
export function ProjectPreset1C_1VI_3P({title, github, special, date, codeExample: code, language, image1, paragraph1, paragraph2, paragraph3} : ProjectPreset1C_1VI_3P_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    const [codeText, setCodeText] = useState<string>('');
    
    if (code != undefined)
    {
        useEffect(() => {
        fetch(code)
            .then((response) => response.text())
            .then((text) => setCodeText(text))
            .catch((error) => console.error('Error fetching the text file:', error));
        }, []);
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '44vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <CodeDisplay code={codeText} language={language} color='white' position='absolute' left='2vw' top='2.2vw' width='18vw' height='28vw'></CodeDisplay>
                <Media src={image1} style={{position: 'absolute', right: '2vw', top: '2.2vw', width: '18vw', height: '32vw'}}/>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '4vw', width: '34vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}

//One code box, one 9:16 image, 3 paragraphs
export function ProjectPreset1C_1VI_3P_M({title, github, special, date, codeExample: code, language, image1, paragraph1, paragraph2, paragraph3} : ProjectPreset1C_1VI_3P_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    const [codeText, setCodeText] = useState<string>('');
    
    if (code != undefined)
    {
        useEffect(() => {
        fetch(code)
            .then((response) => response.text())
            .then((text) => setCodeText(text))
            .catch((error) => console.error('Error fetching the text file:', error));
        }, []);
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '44vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <CodeDisplay code={codeText} language={language} color='white' position='absolute' right='2vw' top='2.2vw' width='18vw' height='28vw'></CodeDisplay>
                <Media src={image1} style={{position: 'absolute', left: '2vw', top: '2.2vw', width: '18vw', height: '32vw'}}/>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '4vw', width: '34vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}

interface ProjectPreset1C_1I_3P_Props {
    title?: string | undefined;
    github?: string | undefined;
    special?: boolean | false;
    date?: string | undefined;
    codeExample?: string;
    language: 'language-csharp' | 'language-javascript' | 'language-java'
    image1?: string | undefined;
    paragraph1?: string | JSX.Element | undefined;
    paragraph2?: string | JSX.Element | undefined;
    paragraph3?: string | JSX.Element | undefined;
}

//One code box, one 16:9 image, 3 paragraphs
export function ProjectPreset1C_1I_3P({title, github, special, date, codeExample: code, language, image1, paragraph1, paragraph2, paragraph3} : ProjectPreset1C_1I_3P_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    const [codeText, setCodeText] = useState<string>('');
    
    if (code != undefined)
    {
        useEffect(() => {
        fetch(code)
            .then((response) => response.text())
            .then((text) => setCodeText(text))
            .catch((error) => console.error('Error fetching the text file:', error));
        }, []);
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '44vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <CodeDisplay code={codeText} language={language} color='white' position='absolute' left='2vw' top='2.2vw' width='24vw' height='28vw'></CodeDisplay>
                <Media src={image1} style={{position: 'absolute', right: '2vw', top: '14.5vw', width: '32vw', height: '18vw'}}/>
                <p className='preset_p' style={{right: '2vw', top: '3vw', width: '48vw'}}>{paragraph1}</p>
                <p className='preset_p' style={{bottom: '.25vw', left: '.25vw', margin: '0', width: '38vw' }}>{paragraph2}</p>
                <p className='preset_p' style={{bottom: '.25vw', right: '.25vw', margin: '0', width: '38vw'}}>{paragraph3}</p>
            </div>
        </div>
    )
}

interface ProjectPreset1_1_Props {
    title?: string | undefined;
    github?: string | undefined;
    special?: boolean | false;
    date?: string | undefined;
    image1?: string | undefined;
    paragraph1?: string | JSX.Element | undefined;
}

//One 16:9 image, 1 paragraph
export function ProjectPreset1I_1P({title, github, special, date, image1, paragraph1} : ProjectPreset1_1_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '24vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <Media src={image1} style={{position: 'absolute', left: '3vw', top: '3.5vw', width: '30vw', height: '16.875vw'}}/>
                <p className='preset_p' style={{margin: '0', right: '3vw', top: '3.5vw', width: '40vw'}}>{paragraph1}</p>
            </div>
        </div>
    )
}

export function ProjectPreset1I_1P_M({title, github, special, date, image1, paragraph1} : ProjectPreset1_1_Props) {
    var borderType = (special ? "solid" : "none");
    var star = (special ? Star : undefined);
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '24vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: borderType}}>
                <img src={star} hidden={!special} title='Favorite' style={{position: 'absolute', margin: '.2vw', width: '1.2vw'}}/>
                {Date(date)}
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <a href={github} target='_blank' style={{position: 'absolute', right: '.25vw', top: '.25vw', fontSize: '1.1vw'}}>GITHUB</a>
                <Media src={image1} style={{position: 'absolute', right: '3vw', top: '3.5vw', width: '30vw', height: '16.875vw'}}/>
                <p className='preset_p' style={{margin: '0', left: '3vw', top: '3.5vw', width: '40vw'}}>{paragraph1}</p>
            </div>
        </div>
    )
}

interface JobPreset_Props {
    title?: string | undefined;
    company?: JSX.Element | string | undefined;
    date?: JSX.Element | string | undefined;
    description1?: JSX.Element | string | undefined;
}

export function JobPreset({title, company, date, description1} : JobPreset_Props)
{
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', height: '12vw', position: 'relative', backgroundColor: '#1F1F1F', borderColor: BORDER_COLOR, borderStyle: 'solid'}}>
                <h1 style={{color: 'white', fontSize: '1.8vw', margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center'}}>{title}</h1>
                <p className='preset_p' style={{margin: '0', left: '1vw', top: '.5vw'}}>{date}</p>
                <p className='preset_p' style={{margin: '0', right: '1vw', top: '.5vw'}}>{company}</p>
                <p className='preset_p' style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '0', left: '0', right: '0', top: '1.5vw', width: '52vw'}}>{description1}</p>
            </div>
        </div>
    )
}