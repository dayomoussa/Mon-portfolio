import React from 'react';

const Info = () => {
    return (
            <div className='col'  style={{border:'1px solid black', backgroundColor:'rgb(26, 204, 232)'}}>
                <div className="row" style={{display:'flex',justifyContent:'space-between'}}>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>CODE CLIENT:</span> <input type="text" /> <button className='btn btn-primary'>VOIR</button>
                </div>
                <div className="row" style={{display:'flex',justifyContent:'space-between'}}>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Nom :</span>
                </div>
                <div className="row" style={{display:'flex',justifyContent:'space-between'}}>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Site :</span>
                </div>
                <div className='row' style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{display:'flex',justifyContent:'flex-start'}}>TYPE ETIQUETTE :</span> <select className='btn btn-primary' name="" id="" style={{display:'flex',justifyContent:'flex-end'}}>
                     <option value="">----------------</option>
                     <option value="">BON DE COMMANDE</option> 
                     <option value="">BON DE SORTIE</option> 
                </select>
                </div>
            </div>
    );
};

export default Info;