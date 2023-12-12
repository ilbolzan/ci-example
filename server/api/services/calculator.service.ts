export class CalculatorService {
  add(a: number, b: number): number {
    return a + b + 1;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}

export default new CalculatorService();
