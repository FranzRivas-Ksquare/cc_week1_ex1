const { cToF } = require('../exercise');

test('Testing the cToFtion exercise', () => { 
    expect(cToF(0)).toBeDefined();
    expect( typeof cToF(0) === 'number').toBeTruthy();
    expect(cToF(0)).toBe(32)
    expect(cToF(-30)).toBe(-22)
    expect(cToF(36)).toBe(96.8)
    expect(cToF(40)).toBe(104)
    expect(cToF(50)).toBe(122)
 })