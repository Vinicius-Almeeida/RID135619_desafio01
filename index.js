function contadores() {
  const contadores = document.querySelectorAll(".contador");

  contadores.forEach((contador) => {
    const target = +contador.getAttribute("data-target");
    const incremento = target / 100;

    let valorAtual = 0;

    const atualizarContador = () => {
      valorAtual += incremento;

      if (valorAtual < target) {
        contador.textContent = Math.ceil(valorAtual);
        setTimeout(atualizarContador, 10);
      } else {
        contador.textContent = target.toLocaleString();
      }
    };
    atualizarContador();
  });
}

window.addEventListener("load", contadores);
