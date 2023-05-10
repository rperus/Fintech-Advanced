

getquand1()
 
const apple = 'https://www.quandl.com/api/v3/datasets/EOD/AAPL?api_key=a9NejCNZWKHWyyWRQ2wP'
async function getquand()
const response = await fetch(apple)
const data1 = await response.json()

document.getElementById()


console.log(data1.dataset.data[0][1])
}

getquand1()
