import React, { useState, useEffect } from 'react'
import CKEditor from 'ckeditor4-react'
import '../../assets/css/dashboard.css';


export default function Postagem() {
	 
   let [titulo, setTitulo] = useState('')
   let [categoria, setCategoria] = useState('')
   let [planeta, setPlaneta] = useState('')
   let [conteudo, setConteudo] = useState('')
   

  async function handlePost(e) {
    e.preventDefault()

    const data = {
      titulo,
      categoria,
      planeta,
      conteudo,
    }
    console.log(data)
    /*
    try {
      const response = await api.post('auth/login', data)
      console.log(response.data)
    } catch(err) {
      alert(err)
    }
    */
  }
  

  return (
      <form name="postagem" onSubmit={handlePost}>
          <div className="form-group">
              <p>Título</p>
              <input type="text" name="titulo" onChange={e => setTitulo(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Categoria</p>
              <input type="text" name="categoria" onChange={e => setCategoria(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Planeta</p>
              <input type="text" name="planeta" onChange={e => setPlaneta(e.target.value)}/>
          </div>
          <div className="form-group">
              <div className="wysiwyg_field">

              </div>    
          </div>  
          <button type="submit">Postar</button>
      </form> 
  );
}