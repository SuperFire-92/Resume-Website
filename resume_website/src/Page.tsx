import Projects from './Projects'
import Welcome from './Welcome'
import Jobs from './Jobs'

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
    if (page == 2)
    {
        return(
            <>
                <Jobs></Jobs>
            </>
        )
    }
}

export default Page