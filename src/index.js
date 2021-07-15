import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/primeiro'
import Comparametro from './components/ComParametro'

ReactDOM.render(
        <div>
          <Primeiro></Primeiro>
          <Comparametro titulo='Esse é o título' subtitulo="Sub Titulo" />
          <Comparametro titulo='opaaa' subtitulo="eita lasqueira" />
        </div>
        ,document.getElementById('root')
)
