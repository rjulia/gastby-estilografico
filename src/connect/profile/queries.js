export const profileBySlug = (slug) => `{
  perfilCollection(
    where:{slug:${slug}},
    order:posicion_ASC,
    limit:1
  ){
    items{
      slug
      posicion
      nombre
      listaDeHabilidades
      urlLinkedin
      description{
        json
      }
      frasesDestacadasCollection(limit: 2){
        items{
          frase{
            json
          }
        }
      }
      fotoPerfil{
        url
        title
        description
      }
      fotoFerfilHover {
        url
        title
        description
      }
    }
  }
}
`