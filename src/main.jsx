import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';


const Main = () => {
    return (
        <React.StrictMode>  
           <Home />
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)