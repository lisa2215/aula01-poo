import { Pessoa } from './Pessoa';


// instanciar (crar objeto)
const pessoa1: Pessoa = new Pessoa('Cedrick', 25);
const pessoa2: Pessoa = new Pessoa('Rio', 19);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());