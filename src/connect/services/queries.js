export const queryServicies = `
  {
    servicioCollection (
      order:orden_ASC,
      limit:10 ) {
      total
      items {
        orden
        slug
        nombre
        subtituloEnlaces
        descripcionEs
        highlightsColors
        sys{
          id
        }
      }
    }
  }
`

export const serviceBySlug = (slug) => `{
  servicioCollection(
    where:{slug:${slug}},
    order:orden_ASC,
    limit:1
    ){
    items {
      orden
      slug
      nombre
      descripcionEs
      palabrasClave
      seoDescription
      highlightsEs {
        json
      }
      fraseProjectos {
        json
      }
      highlightsColors
      sys{
        id
      }
      perfilesCollection(limit: 8){
        items{
          nombre
          titulo
          urlLinkedin
          posicion
          slug
          fotoPerfil{
            url
            title
          }
          fotoFerfilHover {
            url
            title
            description
          }
        }
      }
      proyectosRelacionadoCollection(limit: 8){
        limit
        items {
          sys {
            id
          }
          orden
          titulo
          slug
          portada {
            url
            title
            }
          }
        }
      seccionesServicosCollection (limit: 8){
        limit
        items{
          posicion
          titulo
          conSimbolo
          contenido {
            json
            links {
              assets {
                block {
                  fileName
                    title
                    description
                    url
                    sys {
                        id
                    }
                }
              }
            }
          }
          bgc
          destacadosCollection (limit: 4) {
            items {
              frase {
                json
              }
            }
          }
        }
      }
    }
  }
}
`

export const queryService = (id) => `
  {
    servicio(id: ${id}) {
        orden
        slug
        nombre
        descripcionEs
        highlightsEs {
          json
        }
        highlightsColors
        sys{
          id
        }
        proyectosRelacionadoCollection(limit: 8){
          limit
          items {
            sys {
              id
            }
            orden
            titulo
            slug
            portada {
              url
              title
              }
            }
          }
        seccionesServicosCollection (limit: 8){
          limit
          items{
            posicion
            titulo
            contenido {
              json
              links {
                assets {
                  block {
                    fileName
                      title
                      description
                      url
                      sys {
                          id
                      }
                  }
                }
              }
            }
            bgc
            destacadosCollection (limit: 2) {
              items {
                frase {
                  json
                }
              }
            }
          }
        }
      }
    }
  `
