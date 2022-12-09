import React from 'react';

const Headers = () => {
    return (
        <div>
            <div className='row' style={{color:'white',fontSize:'30px',background: 'blue',border:'1px solid black',height:'40px' , display:'flex', justifyContent:'space-between'}}>
                <span style={{display:'flex', justifyContent:'flex-start'}}>Secure Pro Web</span><span style={{background: 'black',color:'blue',fontSize:'20px', display:'flex', justifyContent:'flex-end'}}>X</span>
            </div>
            <div className='row' style={{border: '1px solid black',display:'flex',justifyContent:'flex-start' }}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                </span>&nbsp;
                vous etes dayo moussa - Administrateur &nbsp; 
                <span style={{color:'red'}}>Déconnexion</span>
            </div>
            <div className='row' style={{background:'blue'}}>
                <h6>IMPRESSION DES ETIQUETTES</h6>
            </div>
        </div>
    );
};

export default Headers;