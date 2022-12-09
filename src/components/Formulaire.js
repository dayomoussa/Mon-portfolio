import React from 'react';


const Formulaire = () => {
    return (
        <div style={{border:'1px solid black', backgroundColor:'rgb(26, 204, 232)'}}>
            <h6 style={{width:'100%',backgroundColor:'grey'}}>FORMULAIRE D'IMPRESSION</h6>
            <form action="">
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Categorie:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col mb-3">
                    <input type="text" className="form-control" placeholder="Numero BL" />
                    </div>
                    <div className="col mb-3">
                    <input type="text" className="form-control" placeholder="Numero Valorie" />
                    </div>
                </div>
                <select class="form-control mb-3 ">
                        <option>Type produit</option>
                        <option>Commande mère</option>
                        <option>Chambre Froide</option>
                        <option>Inflammables</option>
                        <option>Kits</option>
                </select>
                <div className="form-row mb-3">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Vérificateur" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Collecteur" />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Nombre de colis" />
                    </div>
                    <div className="col">
                    <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="row">
                        <button type="button" className="btn btn-primary col-md">VALIDER</button>
                        <button type="button" className="btn btn-primary col-md">ANNULER</button>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;