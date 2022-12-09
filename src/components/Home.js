import React from 'react';
import '../index.css';
import Apercu from './Apercu';
import Clients from './Clients';
import NavBar from './NavBar';


const Home = () => {
    return (
        
        <div class="sidebar">
            <aside className="sidebar__sidebar" style={{width:'50px', marginTop: '10px',backGround:'grey'}}>
                <NavBar />
            </aside>

    
            <main className="sidebar__main">
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <div style={{width:'50%'}}>
                        <Clients />
                    </div>
                    <div style={{width:'50%'}}>
                        <Apercu />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;