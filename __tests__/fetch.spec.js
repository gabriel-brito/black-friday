import chai, {expect} from 'chai';
import Fetch from '../source/_modules/fetch/fetch';

describe('Fetch function', () => {

  describe('Smoke tests', () => {
    it('should exist fetch', () =>{
      expect(Fetch).to.exist;
    });

    it('should expect that Fetch to be an instance', () => {
      expect(new Fetch()).to.be.an.instanceof(Fetch);
    });
  });
});