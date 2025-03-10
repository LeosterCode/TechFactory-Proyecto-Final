import React from 'react'
import photo1 from "./../assets/photo1.jpeg"
import photo2 from "./../assets/photo2.jpeg"
import photo3 from "./../assets/photo3.jpeg"
import photo4 from "./../assets/photo4.jpeg"
import photo5 from "./../assets/photo5.jpeg"
import photo6 from "./../assets/photo6.jpeg"
import photo7 from "./../assets/photo7.jpeg"


export default function Photos() {
  return (
    <><h1>Imagenes y video de prueba</h1><><div className='container d-flex'>
          <div className="parent">
              <div className="photos1">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo1} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="photos2">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo2} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="photos3">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo3} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="photos4">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo4} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="photos5">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo5} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="photos6">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo6} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="photos7">
                  <div className="photoscard-container">
                      <div className="photoscard">
                          <div className="img-content">
                              <img src={photo7} />
                          </div>
                          <div className="content">
                              <p className="heading">Descripcion de imagen</p>
                              <p>
                                  Aqui va un texto para describir la imagen,
                                  que color le puedo poner?,
                                  como que negro no se ve bien
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div><div className="video-container">
              <video width="100%" height="auto" loop autoPlay muted>
                  <source src="https://utc.edu.mx/wp-content/uploads/2024/10/portada2.mp4" />
              </video>
    </div></></>
  )
}


