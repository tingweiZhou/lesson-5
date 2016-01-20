'use strict'

var database = require('../database');
var getId = require('./getId');
var indexAction = require('./index');

module.exports = function del(req,res){
    
    getId(req,id=>{
        database.del(id);
        indexAction(req,res);
    })    
        
};