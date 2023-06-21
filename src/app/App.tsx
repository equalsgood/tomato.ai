import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { AppRouter } from 'app/providers/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Footer, Header } from 'widgets';

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <div className="app light">
                        <Header/>
                        <AppRouter/>
                        <Footer/>
                    </div>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;