import React, { Component } from 'react';
var Row = require('react-foundation').Row;

require('react-foundation');

export default class Result extends Component {
  constructor(props){
    super(props);
    this.datos = props.datos;
    //this.handleChange = this.handleChange.bind(this);
    this.table = undefined;
  }

  render() {
    return (
      <div>
        <Row isColumn>
         <label className="texto_principal_peticiones">{this.datos.name}</label>
        </Row>
        <Row isColumn>
          <div className="search">
            <fieldset>
              <legend>Contenido</legend>
                this.datos.content
            </fieldset>
          </div>
          <div className="search">
            <fieldset>
              <legend>Links</legend>
              {
                this.datos.links.map(function(link) {
                    return <li key={link}><a href="#">{link}</a></li>
                })
              }
            </fieldset>
          </div>
        </Row>
      </div>
    );
  }
}

