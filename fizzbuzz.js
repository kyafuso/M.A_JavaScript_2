function showResult() {
    const fizzNum = Number(document.getElementById('fizz-num').value);
    const buzzNum = Number(document.getElementById('buzz-num').value);

    const div = document.getElementById('fizzbuzz-result');
    div.innerHTML = '';

    if ( !(Number.isInteger(fizzNum)) || !(Number.isInteger(buzzNum)) || !fizzNum || !buzzNum) {
        const p = document.createElement('p');
        p.innerText = '整数値を入力してください';
        div.appendChild(p);
        return ;
    }

    for (let num = 1; num < 100; num++) {

        if (num % fizzNum === 0 && num % buzzNum === 0) {
            const p = document.createElement('p');
            p.innerText = 'FizzBuzz ' + num;
            div.appendChild(p);
        } else if (num % fizzNum === 0) {
            const p = document.createElement('p');
            p.innerText = 'Fizz ' + num;
            div.appendChild(p);
        } else if (num % buzzNum === 0) {
            const p = document.createElement('p');
            p.innerText = 'Buzz ' + num;
            div.appendChild(p);
        }
    }
}