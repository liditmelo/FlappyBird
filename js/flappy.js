function novoElemeto(tagName, className)
{
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem
}

function barreira(reversa = false)
{
    this.elemento = novoElemeto('div', 'barreira');
    const borda = novoElemeto('div', 'borda');
    const corpo = novoElemeto('div', 'corpo');
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

function ParDeBarreiras(altura, abertura, x)
{
    this.elemento = novoElemeto('div', 'par-de-barreiras');
    this.superior = new barreira(true);
    this.inferior = new barreira(true);
    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}
const b = new barreira(true);
b.setAltura(200);
document.querySelector('[wm-flappy]').append(b.elemento);