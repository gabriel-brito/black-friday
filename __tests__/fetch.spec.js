import chai, {expect} from 'chai';
import Fetch from '../source/_modules/fetch/fetch';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import sinon from 'sinon';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe( 'Fetch function', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exist fetch', () =>{
      expect(Fetch).to.exist;
    });

    it('should expect that fetch to be an instance', () => {
      expect(new Fetch()).to.be.an.instanceof(Fetch);
    });
  });
});