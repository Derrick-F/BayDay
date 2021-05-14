# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bay1 = Bay.create({number: 1})
bay2 = Bay.create({number: 2})
bay3 = Bay.create({number: 3})
bay4 = Bay.create({number: 4})
bay5 = Bay.create({number: 5})
bay6 = Bay.create({number: 6})

truck1 = Truck.create({company: 'Penske', make: 'Freightliner', model: 'Cascadia', vin: '15728R3HG8I95SCVN', unit_number: '36711'})
truck2 = Truck.create({company: 'DCP', make: 'Kenworth', model: 'Aerodyne', vin: 'FUK28R3HG8I95SCVN'})
truck3 = Truck.create({company: 'Ryder', make: 'Freightliner', model: 'M2', vin: 'GVB28R3HG8I95SCVN', unit_number: '1673'})

technician1 = Technician.create({name: 'Chris Hatch'})
technician2 = Technician.create({name: 'AmyLynne Arlington'})
technician3 = Technician.create({name: 'Ricardo Costa'})
technician4 = Technician.create({name: 'Omar Morales'})
technician5 = Technician.create({name: 'Bisi Ezeroha'})
technician6 = Technician.create({name: 'Tim Swizzy'})