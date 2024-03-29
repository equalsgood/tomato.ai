import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app/App';

const container = document.querySelector('#app')!;
const root = createRoot(container);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);