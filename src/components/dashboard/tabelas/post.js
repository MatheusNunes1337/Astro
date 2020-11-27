import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md"

import '../../../assets/css/dashboard.css';

//api
import api from '../../../services/api'


export default function Post() {
  
  let [posts, setPosts] = useState([])
  let [message, setMessage] = useState('')
  let [table, setTable] = useState('')

  const token = localStorage.getItem("aToken")

  useEffect(() => {
      async function getPosts() {
          const response =  await api.get('post')
          setPosts(response.data)
          if(response.data.length !== 0) {
              setMessage(<h2>Total de registros encontrados: {response.data.length}</h2>)
              setTable(
                  <div className="table-wrap"> 
                      <table>
                          <thead>
                              <tr>
                                <th>#</th>
                                <th>Título</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                response.data.map((post, i) => 
                                    <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{post.titulo}</td>
                                      <td>{post.categoria}</td>
                                      <td>
                                          <Link to={'/dashboard/update/post/' + post._id} className="link">
                                              <button><MdEdit className="actionBtn-icon" /></button>
                                          </Link>  
                                          <button value={post._id} onClick={deletePost}><MdDelete className="actionBtn-icon"/></button>
                                      </td>
                                    </tr>
                                )
                              }
                          </tbody>
                      </table>
                  </div>
              )
          } else {
              setMessage(<h2>Parece que ainda não há nenhum post cadastrado no banco de dados.</h2>)
              setTable('')
          }
      }
      getPosts()
    }, [posts])


   function deletePost(e) {
       const id = e.currentTarget.value
       const goAhead = window.confirm('Você está prestes a deletar esse registro. Tem certeza que deseja fazer isso?')
       if(goAhead === true) {
           api.delete(`post/${id}`, {
             headers: { Authorization: `Bearer ${token}` }
           })
          .then(response => {
            alert(response.data.message)
          })
          .catch(err => {
              console.error(err)
          })
      }
   } 

  return (
    <React.Fragment>
      {message}
      {table}
    </React.Fragment>      
  );
}