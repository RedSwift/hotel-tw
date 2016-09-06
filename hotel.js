// data
let Lakewood = {
  name: 'Lakewood',
  rating: 3,
  regular: {
    weekday: 110,
    weekend: 80
  },
  loyal: {
    weekday: 90,
    weekend: 80
  }
}

let Bridgewood = {
  name: 'Bridgewood',
  rating: 4,
  regular: {
    weekday: 160,
    weekend: 110
  },
  loyal: {
    weekday: 60,
    weekend: 50
  }
}

let Ridgewood = {
  name: 'Ridgewood',
  rating: 5,
  regular: {
    weekday: 220,
    weekend: 100
  },
  loyal: {
    weekday: 150,
    weekend: 40
  }
}

let hotelArray = [Lakewood, Bridgewood, Ridgewood]

class Hotel {
  constructor (type, date1, date2, date3) {
    this.type = type
    this.date1 = date1
    this.date2 = date2
    this.date3 = date3
  }

  isCheapest () {
    let cheapest = hotelArray[0]
    if (this.type === 'regular') {
      for (let i = 1; i < hotelArray.length; i++) {
        if (cheapest.regular.weekday > hotelArray[i].regular.weekday) cheapest = hotelArray[i]
        return cheapest.name
      }
    }
    if (this.type === 'loyal') {
      for (let i = 1; i < hotelArray.length; i++) {
        if (cheapest.loyal.weekday > hotelArray[i].loyal.weekday) cheapest = hotelArray[i]
        return cheapest.name
      }
    }
  }
}

module.exports = Hotel
