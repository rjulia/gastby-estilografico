export const querySocialMedia = `{
  redesSocialesCollection 
  (
    limit: 10,
    order: titulo_ASC,
  ){
    items{
      titulo
      link
    }
  }
}
`
