'use strict'
var AbstractPager = require('./AbstractPager');
class IndexPager extends AbstractPager{
    
   constructor(articleList){
       super()
       this.list = articleList;     
   }
   
   _render(){
       
       let listDOMString = this.list.map((article,index) => `<li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p>
          <div>
            <a href='/del'?id=${article.index}>DEL</a>
            <a href='/update'?id=${article.index}>update</a>
          </div>
        </li>`).join('')
       
       
       return `
            <ul class="list-group">
                ${listDOMString}  
            </ul>
       `;
        
   }
};

module.exports = IndexPager;