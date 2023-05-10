

getquand1()
 
const apple = 'https://www.quandl.com/api/v3/datasets/BITFINEX/BTCUSD?api_key=a9NejCNZWKHWyyWRQ2wP'
async function getquand1(){
const response = await fetch(apple)
const data1 = await response.json()

document.getElementById('date').textContent =data1.dataset.data[0][0]
document.getElementById('closeprice').textContent =data1.dataset.data[0][1]
document.getElementById('openprice').textContent =data1.dataset.data[0][6]

console.log(data1.dataset.data[0][1])
	
	
	
}

getquand1()
