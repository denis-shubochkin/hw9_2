import Validator from '../Validator';

test('Name is correct', () => {
  const v = new Validator();
  const str = 'Good-job 11 numbers';
  const result = v.validateUsername(str);
  expect(result).toBe('Формат имени корректен');
});


test('Not english', () => {
  const v = new Validator();
  const str = 'Good job, дружище';
  const result = v.validateUsername(str);
  expect(result).toBe('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Symbol !', () => {
  const v = new Validator();
  const str = 'Good job!';
  const result = v.validateUsername(str);
  expect(result).toBe('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Digits at the beginning/end', () => {
  const v = new Validator();
  const str = '9Good job';
  const result = v.validateUsername(str);
  expect(result).toBe('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Symbol _ at the beginning/end', () => {
  const v = new Validator();
  const str = 'Good job_';
  const result = v.validateUsername(str);
  expect(result).toBe('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
});

test('Seqence 3 or more digits', () => {
  const v = new Validator();
  const str = 'Good 999 job';
  const result = v.validateUsername(str);
  expect(result).toBe('Имя не должно содержать подряд более трёх цифр');
});
