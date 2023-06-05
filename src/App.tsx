import { Suspense } from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './index.css';
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {BPOsPageAsync} from "./pages/BPOsPage/BPOsPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to="/">Home</Link>
            <Link to="bpo">bpo</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync/>}/>
                    <Route path="/bpo" element={<BPOsPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;