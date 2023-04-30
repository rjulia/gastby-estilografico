export const pageBySlug = (slug) => `{
  pageCollection(
    where: {slug: ${slug}},
    limit: 1,
    order: titulo_ASC
  ){
    items {
      slug
      titulo
      contenido{
        json
      }
    }
  }
}
`

export const pagesQuery = `{
  pageCollection 
  (
    limit: 10,
    order: titulo_ASC,
  ){
    items{
      slug
      titulo
    }
  }
}
`
