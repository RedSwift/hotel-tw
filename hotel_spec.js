/* globals describe it context expect*/
var Hotel = require('./hotel')

describe('Hotel Reservation Test Suite', () => {
  context('should return name of cheapest hotel', () => {
    it('should return Lakewood', () => {
      var hotel = new Hotel()
      expect(hotel.cheapest('regular', '16Mar2009', '17Mar2009', '18Mar2009')).to.eq('Lakewood')
    })
  })
})
