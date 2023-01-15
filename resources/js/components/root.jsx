import React from 'react';
import { createRoot } from 'react-dom/client'
import '../../css/app.css';

export default function App(){
    return(
        <div className="example">React in Laravel 9 with Vite</div>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}