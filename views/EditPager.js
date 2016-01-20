'use strict'
var AbstractPager = require('./AbstractPager');
class EditPager extends AbstractPager{
    
   constructor(id,article,errors){
       super()
       this.id = id;
       this.article = article; 
       this.errors = errors;    
   }
   
   _render(){
      let titleError = this.errors.title || '';
      let bodyError = this.errors.body || ''; 
              
      return `
        <form action="/update" method="post">
        <input type='hiden' name='id' value='${this.id}'/>
            <div class="form-group">
                <label for="title">Title</label>                
                <input type="text" value="${this.article.title}" class="form-control" name="title" id="title" placeholder="title">
                <p>${titleError}</p>
            </div>
            <div class="form-group">
                <label for="body">Article</label>
                <textarea class="form-control" id="body" name="body" placeholder="Article">${this.article.body}</textarea>
                <p>${bodyError}</p>
            </div>            
            <button type="submit" class="btn btn-default">Change</button>
        </form>
       `

       ;
        
   }
};

module.exports = EditPager;