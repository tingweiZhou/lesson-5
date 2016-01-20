'use strict'

var http = require('http');
var url = require('url');
var actionRepos = {}
actionRepos['/add'] = require('./actions/add');
actionRepos['/del'] = require('./actions/del');
actionRepos['/update'] = require('./actions/update');
actionRepos['/'] = require('./actions/index');

http.createServer(function(request,response){
    response.writeHead('Content-Type','text/html');
    let pathname=url.parse(request.url).pathname;
    var action = actionRepos[pathname];
    if(action){
        action(request,response);
    }else{
        response.writeHead(404);
        response.end();
    }
    
}).listen(3000);