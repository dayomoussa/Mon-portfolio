import React from 'react';

const Gestion = () => {
    return (
        <div style={{border:'1px solid black' , backgroundColor:'rgb(26, 204, 232)'}}>
            <h6 style={{background:'grey'}}>GESTION DES IMPRESSIONS</h6>
            <form action="">
                <div className="form-row">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="BL" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder='Valorie' />
                    </div>
                    <div className="col">
                        <select class="form-control">
                            <option>Type produit</option>
                            <option>Commande mère</option>
                            <option>Chambre Froide</option>
                            <option>Inflammables</option>
                            <option>Kits</option>
                        </select>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-primary">Afficher</button>
                    </div>
                </div>
                <div>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Code du client :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Nom du client :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Categorie du produit :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Numero BL :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Numero Valorie :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Nom du Verificateur :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Nom du collecteur :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Type Etiquette :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Nombre de colis :</span>
                    <span style={{display:'flex',justifyContent:'flex-start'}}>Date de Production:</span>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-primary col">REIMPRIMER</button>
                    <button type="button" className="btn btn-primary col">ANNULER</button>
                    <button type="button" className="btn btn-primary col">TERMINER IMPRESSION</button>
                </div>
            </form>
        </div>
    );
};

export default Gestion;