const express = require('express');
const router = express.Router();
const axios = require('axios')
SistemUrl = "http://localhost:3636";

router.get('/api/products', (req, res) => {
    if(parseInt(req.body.sistema) == 18){
        SistemUrl = "http://157.230.218.35:3000";

        new Promise((resolve, reject) => {
            axios.post(SistemUrl+'/api/', {
            }).then(resp => {
                res.send(resp.data);
            }).catch(function (error) {
                console.log(error);
            });
        });

    }else if(parseInt(req.body.sistema) == 19){
        SistemUrl = "http://35.209.160.141:5050";

        new Promise((resolve, reject) => {
            axios.post(SistemUrl+'/grupo19/usuario/login', {
                user:req.body.email,
                password:req.body.password
            }).then(resp => {
                res.send(resp.data);
            }).catch(function (error) {
                console.log(error);
            });
        });

    }else{
        SistemUrl = "http://localhost:3636";

        new Promise((resolve, reject) => {
            axios.get(SistemUrl+'/api/products', {
            }).then(resp => {
                res.send(resp.data);
            }).catch(function (error) {
                console.log(error);
            });
        });
    }
});

router.post('/api/users/login', (req, res) => {
    if(parseInt(req.body.sistema) == 18){
        SistemUrl = "http://157.230.218.35:3000";

        new Promise((resolve, reject) => {
            axios.post(SistemUrl+'/api/login/cliente', {
                usuario:req.body.email,
                contra:req.body.password
            }).then(resp => {
                let tipo = 1;
                if(resp.data.datos.tipo == 1){tipo=0;}
                res.json({
                    id: resp.data.datos.idc,
                    nombre: resp.data.datos.nombres,
                    apellido: resp.data.datos.apellidos,
                    email: resp.data.datos.correo,
                    contrasena: "",
                    celular: resp.data.datos.telefono,
                    foto: "",
                    tipo_usuario: tipo
                });
                res.send(resp.data);
            }).catch(function (error) {
                res.json(error);
            });
        });

    }else if(parseInt(req.body.sistema) == 19){
        SistemUrl = "http://35.209.160.141:5050";

        new Promise((resolve, reject) => {
            axios.post(SistemUrl+'/grupo19/usuario/login', {
                user:req.body.email,
                password:req.body.password
            }).then(resp => {
                res.send(resp.data);
            }).catch(function (error) {
                res.send(error);
            });
        });

    }else{
        SistemUrl = "http://localhost:3636";

        new Promise((resolve, reject) => {
            axios.post(SistemUrl+'/api/users/login', {
                email:req.body.email,
                password:req.body.password
            }).then(resp => {
                res.send(resp.data);
            }).catch(function (error) {
                res.json(error);
            });
        });
    }

//    return http.post(`${this.SistemUrl}/api/users/login`,{"email":req.usuario,"password":req.password})
});

router.post('/api/users/registro', (req, res) => {

    var send={
        nombres:req.nombre,
        direccion:req.direccion,
        password:req.password,
        direccionFisica:req.direccionFisica
    }
    return this.http.post(`${this.SistemUrl}users/registro`,send)
});

router.post('/api/orders/payment', (req, res) => {

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

module.exports = router;
