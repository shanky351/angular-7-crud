import { BooleanConverterPipe } from './boolean-converter.pipe';

describe('BooleanConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
