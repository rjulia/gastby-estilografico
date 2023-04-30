export const queryProjects = `
{
  projectoCollection(
    order: [sys_publishedAt_DESC]
    ) {
    total
    items {
      titulo
      subtitulo
      slug
      enPortada
      portada{
        size
        title
        width
        height
        fileName
        url
      }
      sys {
        id
        spaceId
        environmentId
        publishedAt
        firstPublishedAt
        publishedVersion
      }
    }
  }
}
`

export const queryProject = (slug) => `{
    projectoCollection(
      where:{slug:${slug}},
      order:orden_ASC,
      limit:1) {
        items{
          titulo
          subtitulo
          slug
          palabrasClave
          seoDescription
          portada {
            url
            title
            description
            width
            height
          }
          contenido {
            json
          }
          listaDeVideos
          listaDeObjectivos
          trabajosRelacionadosCollection {
            items {
              subtituloEnlace
              slug
              linkedFrom {
                servicioCollection{
                  items {
                    nombre
                    
                  }
                }
              }
            }
          }
          listaDeImagesCollection{
            limit
            total
            items{
              title
              description
              width
              height
              url
            }
          }
        }
      }
    }
  `
