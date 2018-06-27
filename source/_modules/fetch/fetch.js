// export const fetch = () => {
//   fetch('../../../public/data/products.json')
//     .then(data => data.json())
//     .then(data => console.log(data))
// }

export default class Fetch {
  constructor(){
    console.log('fetch function here!');
    this.getProducts('../../../public/data/products.json');
  }

  getProducts(url){
    fetch(url)
      .then(data => data.json())
      .then(data => console.log(data));
  }
}