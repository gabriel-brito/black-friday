import chai, {expect} from 'chai';
import Cart from '../source/_modules/cart/cart';

describe('Cart functions', () => {

  describe('Smoke tests', () => {
    it('should exist fetch', () =>{
      expect(Cart).to.exist;
    });

    it('should expect that fetch to be an instance', () => {
      expect(new Cart()).to.be.an.instanceof(Cart);
    });
  });
});