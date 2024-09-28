import './App.css'
import TopBar from './TopBar'
import Projects from './Projects'
import Welcome from './Welcome'
import Jobs from './Jobs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <TopBar/>
                <Routes>
                    <Route index element={<Welcome/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/jobs' element={<Jobs/>}/>
                    <Route path='*' element={<Welcome/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
