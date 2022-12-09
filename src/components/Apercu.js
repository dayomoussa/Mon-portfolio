import React from 'react';
import logo from '../nouvellepsp.jpg';
import qr from '../Qrcode.jpg';
const Apercu = () => {
    return (
        <div style={{border:'1px solid black', backgroundColor:'rgb(26, 204, 232)'}}>
            <h6 style={{background:'grey'}}>APERCU DE L'IMPRESSION</h6>
            <div className="row" style={{height:'80px'}}>
               <div className="col">
                    <input className="col" type="text" placeholder='Premiere page' id="firstPage" />
               </div>
               <div className="col">
                    <input className="col" type="text" placeholder='Derniere page' />
               </div>
               <div className="col">
                    <button className='btn btn-primary'>IMPRIMER</button>
               </div>
            </div>
            <div style={{backgroundColor:'white', margin:'5px 5px'}}>
            <div className="row" style={{marginTop:'5px'}}>
                <div className="col">N° <span style={{borderBottom:'2px solid black'}} ></span></div>
                <div className="col" style={{borderBottom:'2px solid black',marginTop:'25px'}}></div>
                <div className="col"></div>
            </div>
            <div className="row" style={{marginTop:'5px', height:'120px' }}>

            </div>
            <div className="row">
                <div style={{border:'5px solid black',height:'200px', width:'500px', borderRadius:'5px',marginLeft:'50px',marginTop:'5px'}}>
                    
                </div>
            </div>
            <div className="row" style={{marginTop:'5px'}} >
                <div className="col"></div>
                <div className="col"><img src={logo} alt="npsp" style={{width:'100px',height:'100px'}} /></div>
                <div className="col"></div>
            </div>
            <div className="row" style={{marginTop:'5px'}}>
                <div>
                    <img src={qr} alt="qr" style={{width:'150px',height:'150px', marginLeft:'150%'}} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Apercu;