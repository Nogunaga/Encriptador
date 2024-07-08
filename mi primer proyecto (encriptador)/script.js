const textoEncriptado = document.getElementById('textoEncriptado');
const textoDesencriptar = document.getElementById('textoDesencriptar');
const textareaEntrada = document.querySelector('.textarea');
const textareaSalida = document.querySelector('.mensaje');
const copiar = document.getElementById('copiar');

const vocales = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};

function encriptarTexto() {
  const texto = textareaEntrada.value.toLowerCase().trim();
  let textoEncriptado = '';

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];

    if (vocales.hasOwnProperty(caracter)) {
      textoEncriptado += vocales[caracter];
    } else {
      textoEncriptado += caracter;
    }
  }

  textareaSalida.value = textoEncriptado;
}

function desencriptarTexto() {
  const texto = textareaEntrada.value.toLowerCase().trim();
  let textoDesencriptado = '';

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    const siguienteCaracter = texto[i + 1];

    if (caracter === 'e' && siguienteCaracter === 'n' && texto[i + 2] === 't' && texto[i + 3] === 'e' && texto[i + 4] === 'r') {
      textoDesencriptado += 'e';
      i += 4;
    } else if (caracter === 'i' && siguienteCaracter === 'm' && texto[i + 2] === 'e' && texto[i + 3] === 's') {
      textoDesencriptado += 'i';
      i += 3;
    } else if (caracter === 'a' && siguienteCaracter === 'i') {
      textoDesencriptado += 'a';
      i += 1;
    } else if (caracter === 'o' && siguienteCaracter === 'b' && texto[i + 2] === 'e' && texto[i + 3] === 'r') {
      textoDesencriptado += 'o';
      i += 3;
    } else if (caracter === 'u' && siguienteCaracter === 'f' && texto[i + 2] === 'a' && texto[i + 3] === 't') {
      textoDesencriptado += 'u';
      i += 3;
    } else {
      textoDesencriptado += caracter;
    }
  }

  textareaSalida.value = textoDesencriptado;
  textareaEntrada.value = ''; // Borra el texto original al desencriptar
}

function copiarTexto() {
  const texto = textareaSalida.value;
  navigator.clipboard.writeText(texto);
  textareaSalida.value = ''; // Desaparece el texto después de copiarlo
}

textoEncriptado.addEventListener('click', encriptarTexto);
textoDesencriptar.addEventListener('click', desencriptarTexto);
copiar.addEventListener('click', copiarTexto);
