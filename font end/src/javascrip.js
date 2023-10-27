
    var inputA= document.getElementById('a');
    var inputB= document.getElementById('b');
    var inputC= document.getElementById('c');

    inputA.addEventListener('input',calculateSum);
    inputB.addEventListener('input',calculateSum);

function calculateSum(){
    var valueA = parseFloat(inputA.value) || 0;
    var valueB = parseFloat(inputB.value) || 0;
    var sum = valueA*valueB;
    inputC.value = sum;
}
