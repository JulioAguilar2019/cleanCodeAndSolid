(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['cereza', 'fresa', 'manzana'];
    return redFruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type fruitColors = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: fruitColors): string[] {
    const fruitsByColor = {
      red: ['cereza', 'fresa', 'manzana'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    if (!fruitsByColor[color]) {
      throw new Error('the color must be: red, yellow, purple');
    }

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = false;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step is not working';
    if (!isSecondStepWorking) return 'Second step is not working';
    if (!isThirdStepWorking) return 'Third step is not working';
    if (!isFourthStepWorking) return 'Fourth step is not working';
    return 'All steps are working';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  //   console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
