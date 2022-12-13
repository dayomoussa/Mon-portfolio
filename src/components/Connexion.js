import React from 'react';

const Connexion = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <div className='row' style={{color:'white',fontSize:'30px',background: 'blue',border:'1px solid black',height:'40px' , display:'flex', justifyContent:'space-between'}}>
                <span style={{display:'flex', justifyContent:'flex-start'}}>Secure Pro Web</span><span style={{background: 'black',color:'blue',fontSize:'20px', display:'flex', justifyContent:'flex-end'}}>X</span>
            </div>
            <div className="card" style={{marginLeft:'auto',marginRight:'auto', width:'350px'}}>
                <div className="card-header" style={{backgroundColor:'rgb(26, 204, 232)'}}>
                    CONNEXION
                </div>
                <div className="card-body" style={{backgroundColor:'gray'}}>
                    <form action="">
                        <label htmlFor="code">Code d'accès</label>
                        <input type="password" id='code' />
                        <button type="submit">Valider</button>
                        <button type="reset">Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connexion;