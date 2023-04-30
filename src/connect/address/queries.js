export const queryAddress = `{
  addressCollection 
  (
    limit: 10,
  ){
    items{
      address
      postalCode
      phone
    }
  }
}
`
