/* globals describe it expect*/
var Hotel = require('./hotel')

describe('Hotel Reservation Test Suite', () => {
  it('should return Lakewood', () => {
    var hotel = new Hotel('regular', '16Mar2009', '17Mar2009', '18Mar2009')
    expect(hotel.isCheapest()).toEqual('Lakewood')
  })
})
