function randRange(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

function makeStreetName(length) {
  const result = []
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++ ) {
     result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }

  result[0] = result[0].toUpperCase()

  const roadTypes = ['St', 'Dr', 'Ct', 'Blvd', 'Rd']
  const road = roadTypes[randRange(0, roadTypes.length - 1)]

  return `${result.join('')} ${road}.`
}

class Listing {
  constructor(address, beds, baths, sqft) {
    this.address = address
    this.beds = beds
    this.baths = baths
    this.sqft = sqft
  }
  static make() {
    const streetNumber = randRange(1, 8000)
    const streetName = makeStreetName(randRange(6, 12))
    const address = `${streetNumber} ${streetName}`
    const beds = randRange(1, 8)

    return new Listing(address, beds, randRange(1, beds), beds * 1000)
  }
}

const listings = []
for (let i = 0; i < 15; i++) {
  listings.push(Listing.make())
}

exports.index = listings
