import React, { useState, useEffect } from 'react'
import CKEditor from 'ckeditor4-react'
import '../../assets/css/dashboard.css';


export default function Postagem() {
	 //let [options, setOptions] = useState('')
  

  return (
      <form name="postagem">
          <div className="form-group">
              <p>Título</p>
              <input type="text" name="titulo"/>
          </div>
          <div className="form-group">
              <p>Categoria</p>
              <input type="text" name="categoria"/>
          </div>
          <div className="form-group">
              <p>Planeta</p>
              <input type="text" name="planeta"/>
          </div>
          <div className="form-group">
              <div className="wysiwyg_field">
                <CKEditor
                     data="<p>Digite o seu conteúdo aqui!</p>"
                  />
              </div>    
          </div>  
          <button type="submit">Postar</button>
      </form> 
  );
}