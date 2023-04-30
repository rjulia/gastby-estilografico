export const queryAsset = (id) => `{
    asset(id:${id}) {
      url
      title
    }
  }
  `
