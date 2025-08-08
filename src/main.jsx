import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import { ShowsProvider } from './hooks/useGlobalShows';


const Main = () => {
    return (
        <React.StrictMode>
            <ShowsProvider>
                <Home />
            </ShowsProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)