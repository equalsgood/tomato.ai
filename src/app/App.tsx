import { Suspense } from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.css';
import { AppRouter } from "app/providers/router";

const App = () => {
    return (
        <div className="app light">
            <Link to="/">Home</Link>
            <Link to="bpos">bpo</Link>
            <AppRouter/>
        </div>
    );
};

export default App;