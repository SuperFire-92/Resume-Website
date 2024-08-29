import { useState } from 'react'
import './Page.css'
import Projects from './Projects';

interface PageProps {
    page: number;
}

function Page({ page }: PageProps) {
    if (page == 0)
    {
        return(
            <div>
                <div className='p0_dialoguePosition'>
                    <br></br>
                    <p id='p0_dialogue'>
                        [DIALOGUE WELCOMING USER TO SITE] [EXPLANATION OF WHAT THIS SITE IS] [FLIRT WITH THE USER????] [GIVE THE USER A KISS???] [MARRY THE USER?!?!?!?]
                    </p>
                </div>
            </div>
        )
    }
    if (page == 1)
    {
        return(
            <>
                <Projects></Projects>
            </>
        )
    }
}

export default Page