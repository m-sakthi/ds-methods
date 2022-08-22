const init = require('./index').default;

describe('String', () => {
  beforeAll(() => {
    init();
  });

  describe('Split', () => {
    it('should split space characters', () => {
      expect('Split with spaces'._split(' ')).toEqual(['Split', 'with', 'spaces']);
    });
  
    it('should split characters all when empry string is passed', () => {
      expect('Split all'._split('')).toEqual(['S', 'p', 'l', 'i', 't', ' ', 'a', 'l', 'l']);
    });
  
    it('should return an array with the input string as first element', () => {
      expect('Split all'._split()).toEqual(['Split all']);
    });
  });

  describe('Replace', () => {
    it('should replace a single character', () => {
      expect('Stringz'._replace('z', 's')).toEqual('Strings');
    });

    it('should replace a multiple character', () => {
      expect('Stringzz'._replace('z', 'ss')).toEqual('Stringssss');
    });

    it.skip('should not replace when no condition is provided', () => {
      expect('Stringzz'._replace('', 's')).toEqual('Stringzz');
    });
  });
});

