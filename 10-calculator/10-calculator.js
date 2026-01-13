let calculation = localStorage.getItem('localStorageData') || '' ;

      updateActualValue();

      function updateActualValue() {
         document.querySelector('.js-show-calculation').innerHTML = calculation;
      }

      function updateCalculation (value) {
          calculation += value;
          document.querySelector('.js-show-calculation').innerHTML = calculation;
          localStorage.setItem('localStorageData', calculation);
      }