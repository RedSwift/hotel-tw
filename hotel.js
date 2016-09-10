// data
let Lakewood = {
  name: 'Lakewood',
  rating: 3,
  regular: {
    weekday: 110,
    weekend: 90
  },
  loyal: {
    weekday: 80,
    weekend: 80
  }
}

let Bridgewood = {
  name: 'Bridgewood',
  rating: 4,
  regular: {
    weekday: 160,
    weekend: 60
  },
  loyal: {
    weekday: 110,
    weekend: 50
  }
}

let Ridgewood = {
  name: 'Ridgewood',
  rating: 5,
  regular: {
    weekday: 220,
    weekend: 150
  },
  loyal: {
    weekday: 100,
    weekend: 40
  }
}

let hotelArray = [Lakewood, Bridgewood, Ridgewood]

// logic
class Hotel {
  isCheapest (type, dates) {
    let cheapest = null
    let cheapestPrice = Infinity
    let cheapestRating = null
    hotelArray.forEach((hotel) => {
      let price = dates.reduce((acc, day) => {
        return acc + hotel[type][day]
      }, 0)
      if (price < cheapestPrice || (price === cheapestPrice && hotel.rating > cheapestRating)) {
        cheapestPrice = price
        cheapestRating = hotel.rating
        cheapest = hotel.name
      }
    })
    return cheapest
  }
}

function changeDate (date) {
  let day = new Date(date).getDay()
  if (day === 0 || day === 6) return 'weekend'
  return 'weekday'
}

module.exports = {
  Hotel: Hotel,
  changeDate: changeDate
}

// split into methods && test them
// make whole class into immutable state
