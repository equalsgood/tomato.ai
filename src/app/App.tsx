import { BrowserRouter, Link } from 'react-router-dom';
import './styles/index.css';
import { AppRouter } from 'app/providers/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const App = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <div className="app light">
                    <Link to="/">Home</Link>
                    <Link to="bpos">bpo</Link>
                    <AppRouter/>
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default App;