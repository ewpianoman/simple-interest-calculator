// Calculate the interest given the data entered by user and display it
function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    var resultOutput = document.getElementById('result');

    // Validate Principal numerical input to make sure it is a positive number
    if (isNaN(principal) || principal <= 0) {
        alert('Please enter a positive number.');
    } else {
        resultOutput.innerHTML = `If you deposit <mark>${principal}</mark>,<br/> 
                            at an interest rate of <mark>${rate}</mark>, <br/>
                            you will receive an amount of <mark>${interest}</mark> <br/>
                            in the year <mark>${year}</mark>.`;
    }
}

// Display value of rate slider to user
function updateRate() {
    var rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateVal + '%';
}
        