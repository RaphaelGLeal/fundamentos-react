//import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/primeiro'
import Comparametro from './components/ComParametro'


ReactDOM.render(
        <div>
          <p>
              <Primeiro></Primeiro>
          </p>
            <button type="button" class="btn btn-success">
                <Comparametro titulo='Esse é o título' subtitulo="Sub Titulo" />
             </button>
            <Comparametro titulo='Titulo ' subtitulo="eita lasqueira" />
          </div>
        ,document.getElementById('root')
)
