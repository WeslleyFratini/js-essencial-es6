function init() {
  const exemplo = "Variavel";

  return function () {
    console.log(`1 - Valor da variavel: ${exemplo}`);

    return function () {
      console.log(`2 - Valor da variavel: ${exemplo}`);

      return function () {
        console.log(`3 - Valor da variavel: ${exemplo}`);
      };
    };
  };
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();
