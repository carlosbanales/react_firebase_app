import React from 'react';
import './style.css';
import Janette from './../../images/janette.jpg';
import Chris from './../../images/chris.jpg';
import Jonny from './../../images/jonny.jpg';
import Carlos from './../../images/carlos.jpg';

const TheTeamPage = () => (
    <div>
        <div className ="Container">
            <div className="Janette">
                <h3>Janette Marin</h3>
                <p>@jmdsgn</p>
                <img src={Janette} alt="Janette" />
            </div>
            <div className="Chris">
                <h3>Chris Murillo</h3>
                <p>@yungchris_10</p>
                <img src={Chris} alt="Chris" />
            </div>
            <div className="Jonny">
                <h3>Jonathan Murillo</h3>
                <p>@jonnymur_</p>
                <img src={Jonny} alt="Jonny" />
            </div>
            <div className="Carlos">
                <h3>Carlos Banales</h3>
                <p>@carlosbananas</p>
                <img src={Carlos} alt="Carlos" />
            </div>

        </div>
    </div>
);

export default TheTeamPage;