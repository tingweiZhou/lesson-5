'use strict'
var database = require('../database');
var AddPager = require('../views/AddPager');
var post = require('./post');
var IndexPager = require('../views/IndexPager')
//var querystring = require('querystring');

module.exports = function(req,res){
    if (req.method === 'GET'){
        
        res.end(new AddPager().render());
    }else{
        
        post(req).then(function (data){
            var errors = {};
            if (!(data.title && data.title.length >=5)){
                errors.title = 'title char length >=5';
            };
            if (!(data.body && data.body.length >=10)){
                errors.body = 'body char length >=10';
            };
            
            if(Object.keys(errors).length){
                res.writeHead('Content-Type','text/html');
                res.end(new AddPager(errors).render());
            }else{
                database.add(data);
                res.end(new IndexPager(database.list).render());
            };
        });

       
            
    }
    
};