import React, {Component, Fragment} from 'react';
var mongoose = require('mongoose');

export default class home extends Component{
    render() {
      console.log("hola");
          return(
            
            <Fragment>
              
             <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
              <title>Upload and Download Files</title>
              <center>
                <h1>Sube tus archivos aquí!</h1>
                <br /><br />
                <form action="/" method="POST" encType="multipart/form-data">
                  <input type="file" name="pic" id="pic" /><br />
                  <br /><br />
                  <input type="submit" defaultValue="subir archivo" />
                </form><br /><br /><br /><br />
                
                &lt;% if(data.length &gt; 0) {'{'}%&gt;
                &lt;% for(var i=0; i&lt; data.length; i++) {'{'}%&gt;
                &lt;% {'}'} %&gt;
                
                <table>
                  <thead>
                    <tr>
                      <td>
                        images
                      </td>
                      <td>
                        download
                      </td>
                    </tr>
                  </thead>
                  <tbody><tr>
                      <td>
                        {<img src="localhost:3000/5fbdde40462473318ca819a0" alt="images" style={{width: '100px', height: '100px'}} />}
                        {/* <%= data[i].picpath%> */}
                      </td>
                      <td>
                        <form action="/download/5fbdde40462473318ca819a0">
                          <input type="submit" defaultValue="descargar" />
                        </form>
                      </td>
                    </tr></tbody>
                </table>
                {/* &lt;% {'}'} %&gt;   */}
              </center> 
            </div>
            </Fragment>
          );
      }
  };