import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import api from '../../../../services/api'

import '../../../../assets/css/global.css'
import '../../../../assets/css/dashboard.css';


export default function Postagem(props) {
	 
   let [titulo, setTitulo] = useState('')
   let [categoria, setCategoria] = useState('')
   let [planeta, setPlaneta] = useState('')
   let [conteudo, setConteudo] = useState('')
   
   const token = localStorage.getItem("aToken")

  async function handlePost(e) {
    e.preventDefault()

    const form = document.getElementById('formPost')

    const data = {
      titulo,
      categoria,
      planeta,
      conteudo,
    }

    api.post('post/', data, {
      headers: { Authorization: `Bearer ${token}` }
    })
   .then(response => {
        alert(response.data.message)
        form.reset()
    })
    .catch(err => {
        console.error(err)
    })
  }
  

  return (
      <form name="postagem" id="formPost" onSubmit={handlePost}>
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
                  <Editor
                       initialValue="<p>Digite o seu conteúdo aqui</p>"
                       apiKey='0eps1wrjj72zeyaz83lyvv2si0k8dqf2vtgk0vnlq8rfnmj5'
                       init={{
                         height: 300,
                         menubar: false,
                         plugins: [
                           'advlist autolink lists link image charmap print preview anchor',
                           'searchreplace visualblocks code fullscreen', 'image code', 'table',
                           'insertdatetime media table paste code help wordcount'
                         ],
                         toolbar:
                           'undo redo | formatselect | link image | bold italic backcolor | \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent | removeformat | help'
                       }}
                       onEditorChange={(content, editor) => setConteudo(content)}
                     />
              </div>    
          </div>  
          <button type="submit">Postar</button>
      </form> 
  );
}