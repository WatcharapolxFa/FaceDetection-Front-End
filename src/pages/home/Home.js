import React, { useEffect, useState } from 'react';

import { loadModels } from '../../helpers/faceApi';
import { createFaLibrary } from '../../helpers/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import Camera from '../../components/Camera/Camera';
import Nav from '../../components/Navbar/Navbar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import './Home.css';

const baseUrlGet = "https://server-facedetection.herokuapp.com/api/detailGet"
const baseUrlPost = "https://server-facedetection.herokuapp.com/api/detail"

function App() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token")

    const [mode, setMode] = useState(false);
    const [detail, setDetail] = useState([]);
    const [comment, setComment] = useState("");
    //true = photo mode; false = video mode

    useEffect(() => {
        createFaLibrary();
        loadModels();
        getData()
        if (token == null) {
            navigate('/');
        }

    }, [])

    function getData() {
        const body = {
            "token": token
        }
        axios
            .post(baseUrlGet, body)
            .then((res) => {
                console.log(res.data)
                setDetail(res.data.txt)
            })
            .catch((res) => {
                console.log("Error")
            })
        return true
    }

    function createComment() {
        const body = {
            "token": token
            , "text": comment
        }
        axios
            .post(baseUrlPost, body)
            .then((res) => {
                console.log(res.data)
                getData()
                setComment("")
            })
            .catch((res) => {
                console.log("Error")
            })
        return true
    }


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
            
            <div className='head_comment'>
                <p>Note</p>
            </div>
            <div className='card_comment'>
                {
                    detail.map((text) => (
                        <div className='subCard_comment'>{text.text}<br></br>{text.createdAt.split('T')[0]}</div>
                    ))
                }
            </div>
            <div className='input_submit'>
                <form>
                    <input value={comment} onChange={(e) => { setComment(e.target.value) }} type="text" placeholder="comment" />
                    <input className='button button2' type="Button" value="Confirm" onClick={() => { createComment() }} />
                </form>
                
                
            </div>

        </div>
    );
}

export default App;