const i = -32.6292650731585;
const s = 0.8315620555789333;

function showCCInput() {
    document.getElementById('cc-rating').style.display = 'block';
    document.getElementById('cf-rating').style.display = 'none';
    document.getElementById('out').innerText = '';
    document.getElementById('result').innerText = '';
}

function showCFInput() {
    document.getElementById('cf-rating').style.display = 'block';
    document.getElementById('cc-rating').style.display = 'none';
    document.getElementById('out').innerText = '';
    document.getElementById('result').innerText = '';
}

function convertToCF() {
    const ccRating = document.getElementById('cc-rating').value;
    if (ccRating) {
        const ans = Math.round((ccRating * s) + i);
        document.getElementById('out').innerText = "Your predicted Codeforces Rating ";
        document.getElementById('result').innerText = "Rating :- " + ans;
    } else {
        document.getElementById('out').innerText = '';
        document.getElementById('result').innerText = '';
    }
}

function convertToCC() {
    const cfRating = document.getElementById('cf-rating').value;
    if (cfRating) {
        const ans = Math.round((cfRating - i) / s);
        document.getElementById('out').innerText = "Your predicted CodeChef Rating ";
        document.getElementById('result').innerText = "Rating :- " + ans;
    } else {
        document.getElementById('out').innerText = '';
        document.getElementById('result').innerText = '';
    }
}
