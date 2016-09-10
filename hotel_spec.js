/* globals describe it expect*/
var Hotel = require('./hotel').Hotel
var changeDate = require('./hotel').changeDate

describe('Hotel Reservation Test Suite', () => {
  it('should return Lakewood', () => {
    var hotel = new Hotel()
    expect(hotel.isCheapest('regular', ['weekday', 'weekday', 'weekday'])).toEqual('Lakewood')
  })
  it('should return Bridgewood', () => {
    var hotel = new Hotel()
    expect(hotel.isCheapest('regular', ['weekday', 'weekend', 'weekend'])).toEqual('Bridgewood')
  })
  it('should return Ridgewood', () => {
    var hotel = new Hotel()
    expect(hotel.isCheapest('loyal', ['weekday', 'weekday', 'weekend'])).toEqual('Ridgewood')
  })
})

describe('Changing Dates', () => {
  it('should convert date to weekday', () => {
    expect(changeDate('16Mar2009')).toEqual('weekday')
  })
  it('should convert date to weekend', () => {
    expect(changeDate('15Mar2009')).toEqual('weekend')
  })
})

describe('Calculate prices based on dates', () => {
  it('should return the price', () => {
    expect()
  })
})
