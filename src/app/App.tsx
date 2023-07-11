import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { AppRouter } from 'app/providers/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Footer, Header } from 'widgets';
import { ContextProvider } from 'app/providers/ContextProvider';

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ContextProvider>
                        <div className="app light">
                            <Header/>
                            <AppRouter/>
                            <Footer/>
                        </div>
                    </ContextProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;