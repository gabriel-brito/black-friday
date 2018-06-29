export default class Fetch {
  constructor(){
    console.log('Fetch module ready.');
    this.getProducts('../../../public/data/products.json');
  }

  getProducts(url){
    fetch(url)
      .then(data => data.json())
      .then(data => {
        let products = new Object(data.products);
        
        console.log(products[0])
        
      });
  }
}