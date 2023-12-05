let api = ` https://v6.exchangerate-api.com/v6/fc61eb047bba46712c788484/latest/USD`;
const fromDropdown = document.getElementById("from-currency-select");
const toDropdown = document.getElementById("to-currency-select");
const result = document.getElementById("result");

// Creating option tag for first section( fromDropdown ) using forEach method for each of ( c ) => curruncy in currencies array [ currencies array is an array of currencies short names ]
currencies.forEach((c) => {
    let option = document.createElement("option");
    option.value = c;
    option.text = c;
    fromDropdown.appendChild(option)
});

// Creating option tag for second section( toDropdown ) using forEach method for each of ( c ) => curruncy in currencies array [ currencies array is an array of currencies short names ]
currencies.forEach((c) => {
    let option = document.createElement("option");
    option.value = c;
    option.text = c;
    toDropdown.appendChild(option)
});

// Assining a default value 
fromDropdown.value = "INR";
toDropdown.value = "USD";

// Main Function for converting values using ExchangeRate Api
let convertAmount = ()=>{

    // if amount value is not equal to zero then run this block of code
    if(amount.value != 0 ) {
        const amount = document.getElementById("amount").value
        fetch(api)
       .then((response) => response.json())
       .then((data) => {
        let fromRate = data.conversion_rates[`${fromDropdown.value}`]
        let toRate = data.conversion_rates[`${toDropdown.value}`]
        // ExchangeRate formula for converting currency
        let convertedAmount = (amount / fromRate) * toRate;
        // Adding convertedAmount value to id result that use for blank div( for final result )
        result.innerHTML = `${convertedAmount.toFixed(2)} : ${toDropdown.value} `;
    });
    }
    else{
        alert('Input field is empty !');
    };
};

// Adding eventListener on convert button for [ convertAmount : function ] 
document.querySelector("#convert-button").addEventListener('click', convertAmount)














currencies.forEach((c) => {
    const option = document.createElement("option")
    option.value = c;
    option.text = c;
    fromDropdown.add(option)
})

currencies.forEach((c) => {
    const option = document.createElement("option")
    option.value = c;
    option.text = c;
    toDropdown.add(option)
})

fromDropdown.value = "INR";
toDropdown.value = "USD";

let converCurrency = ()=> {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropdown.value;

    if(amount.length != 0){
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency]
            let toExchangeRate = data.conversion_rates[toCurrency]
            
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${convertedAmount} :  ${toCurrency}`;
        })
    }
    else{
        alert("erroe")
    }
};

// document.querySelector("#convert-button").addEventListener('click', convertAmount)