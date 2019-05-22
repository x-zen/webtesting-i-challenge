const enhancer = require('./enhancer.js');

/*
it('runs the tests', () => {
  // arrange -setup
  const expected = true;
  //act - run the system under test
  const actual = true;
  // assert - verify that iit works
  expect(actual).toBe(expected)
});
*/

describe('enhancer.js', () => {

  describe('succeed() method', () => {
    //increase enhancement by 1 if less than 20
    it('should increase enhancer if less than 20', () => {
      expect(enhancer.succeed(15)).toBe(16);
      expect(enhancer.succeed(7)).toBe(8);
      expect(enhancer.succeed(20)).toBe(20);
    });
  });

  describe('fail() method', () => {
    //if greater than 16 should decrease by 1
    it('should decrease by 1 if greater than 16', () => {
      expect(enhancer.fail(17)).toBe(16);
      expect(enhancer.fail(18)).toBe(17);
      expect(enhancer.fail(20)).toBe(19);
    });
    //if greater than/equal to 15 should decrease by 10
    it('should decrease by 10 if greater/equal to 15', () => {
      expect(enhancer.fail(15)).toBe(5)
      expect(enhancer.fail(16)).toBe(6)
    });
    //if less than 15 should decrease by 5
    it('should decrease by 5 if less than 15', () => {
      expect(enhancer.fail(5)).toBe(0)
      expect(enhancer.fail(10)).toBe(5)
      expect(enhancer.fail(14)).toBe(9)
    });
  })

  describe('repair() method', () => {
    //increase durability to 100
    it('should repair item to 100 durability', () => {
      expect(enhancer.repair(0)).toBe(100);
      expect(enhancer.repair(54)).toBe(100);
      expect(enhancer.repair(100)).toBe(100);
    });
  });

  /*describe('get() method', () => {
    it('', () => {

    });
  });*/
});
