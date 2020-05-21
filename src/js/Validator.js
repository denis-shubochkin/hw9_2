/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(name) {
    if (name.search(/(^[a-z0-9-_ ]+$)/ig) === -1) {
      return 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)';
    }
    if (name.search(/^[0-9-_]|[0-9-_]$/) !== -1) {
      return 'Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире';
    }
    if (name.search(/\d{3,}/) !== -1) {
      return 'Имя не должно содержать подряд более трёх цифр';
    }
    return 'Формат имени корректен';
  }
}
