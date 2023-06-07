import { BrowserRouter, Link } from 'react-router-dom';
import './styles/index.css';
import { AppRouter } from 'app/providers/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Header } from 'widgets/Header';

const App = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <div className="app light">
                    <Header/>
                    <AppRouter/>
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default App;