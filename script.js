document.getElementById('numberInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleInput();
    }
});

function handleInput() {
    const input = document.getElementById('numberInput').value.trim();
    const num = Number(input);
    
    if (input === '') {
        showError('Por favor ingrese un numero');
        return;
    }
    
    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
        showError('Por favor ingrese un numero entero valido mayor a 0');
        return;
    }
    
    // Generar y mostrar serie
    const fibSeries = generateFibonacci(num);
    showResult(fibSeries);
}

function generateFibonacci(n) {
    if (n === 1) return [0];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.remove('d-none');
    document.getElementById('result').classList.add('d-none');
}

function showResult(series) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = series.join(', ') + '.';
    resultDiv.classList.remove('d-none');
    document.getElementById('error').classList.add('d-none')
}