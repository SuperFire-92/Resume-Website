import { useState } from 'react'
import './Page.css'
import Projects from './Projects'
import Welcome from './Welcome'

interface PageProps {
    page: number;
}

function Page({ page }: PageProps) {
    if (page == 0)
    {
        return(
            <>
                <Welcome></Welcome>
            </>
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