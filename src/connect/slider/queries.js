export const queryCarouselHome = `
{
  slideShowHomeCollection (order: order_ASC) {
    total
    items {
      order,
      texto,
      bgc,
      textoEs{
        json
      }
      imagen {
        size
        title
        url
      }
      sys {
        id
      }
    }
  }
}
`
