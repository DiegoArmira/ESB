const express = require('express');
const app = express();
let SistemUrl = () => "127.0.0.1";

let addressing = (req, res, next) => {

    if(req.system = "grupo17"){
        SistemUrl = environment.serverURL;
    }
    console.log('Peticion de tipo: ', req.method );
    next();
}

app.get('/api/products', (req, res) => {

    return this.http.get(this.SistemUrl + 'products/' + id);
});

app.post('/api/users/login', (req, res) => {

    return this.http.post(`${this.SistemUrl}users/login`,{"email":req.usuario,"password":req.password})
});

app.post('/api/users/registro', (req, res) => {

    var send={
        nombres:req.nombre,
        direccion:req.direccion,
        password:req.password,
        direccionFisica:req.direccionFisica
    }
    return this.http.post(`${this.SistemUrl}users/registro`,send)
});

app.post('/api/orders/payment', (req, res) => {

    this.httpClient.post(`${this.ServerURL}orders/payment`, null).subscribe(

        (res ) => {
            console.clear();
            if (res.success) {
                this.resetServerData();
                this.httpClient.post(`${this.ServerURL}orders/new`, {
                    userId: userId, 
                    products: this.cartDataClient.prodData
                }).subscribe(() => {
                    this.orderService.getSingleOrder(data.order_id).then(prods => {
                        if (data.success) {
                            const navigationExtras = {
                                state: {
                                    message: data.message,
                                    products: prods,
                                    orderId: data.order_id,
                                    total: this.cartDataClient.total
                                }
                            };
                            this.spinner.hide().then();
                            return ('cart', JSON.stringify(this.cartDataClient));
                        }
                    })
                });
            }
        }
    );
});

app.listen(3000, () => {

    console.log('App listening on port 3000!')

});