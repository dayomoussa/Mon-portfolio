import React from 'react';
import '../index.css';
import Formulaire from './Formulaire';
import Gestion from './Gestion';
import Info from './Info';

const Clients = () => {
    return (
       <div style={{border:'1px solid black', backgroundColor:'rgb(26, 204, 232)'}}>
            <h6 style={{background:'grey'}}>INFORMATION SUR LE CLIENT</h6>
            <Info />
            <Formulaire />
            <Gestion />
       </div>
    );
};

export default Clients;