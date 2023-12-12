import 'mocha';
import CalculatorService from '../server/api/services/calculator.service';
import assert from 'assert';

describe('Calculator', () => {
  it('should add the numbers', () => {
    const a = 1;
    const b = 2;
    const result = CalculatorService.add(a, b);
    assert.equal(result, 3);
  });

  it('should subtract the numbers', () => {
    const a = 3;
    const b = 1;
    const result = CalculatorService.subtract(a, b);
    assert.equal(result, 2);
  });

  it('should multiply the numbers', () => {
    const a = 3;
    const b = 2;
    const result = CalculatorService.multiply(a, b);
    assert.equal(result, 6);
  });
});
