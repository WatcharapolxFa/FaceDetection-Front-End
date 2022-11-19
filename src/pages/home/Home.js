import React, { useEffect, useState } from 'react';

import { loadModels } from '../../helpers/faceApi';
import { createFaLibrary } from '../../helpers/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import Camera from '../../components/Camera/Camera';
import Nav from '../../components/Navbar/Navbar';


import './Home.css';

function App() {
    const [mode, setMode] = useState(false); //true = photo mode; false = video mode

    useEffect(() => {
        createFaLibrary();
        loadModels();
    }, [])
    
    return (
        <div className="App">
            <Nav></Nav>
            <header>
                <div className="App__header">
                    <h1>
                        <span>Face detection for emotion</span>
                    </h1>
                    <div className="App__switcher">
                        <FontAwesomeIcon icon="camera" color={mode ? '#3CC3BD' : '#cccccc'} />
                        <Switch
                            onChange={() => setMode(!mode)}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            checked={!mode}
                            className="App__switcher-switch"
                        />
                        <FontAwesomeIcon icon="video" color={!mode ? '#3CC3BD' : '#cccccc'} />
                    </div>
                </div>
            </header>
            <Camera photoMode={mode} />
            <p>
                Make by{' '}
                <span role="img" aria-label="heart-emoji">
                    ❤️
                </span>{' '}
                Wuttiporn and Yuwadee .
            </p>
        </div>
    );
}

export default App;