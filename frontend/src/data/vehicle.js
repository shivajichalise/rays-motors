export const vehicle = {
  name: 'ISUZU Hi-Lander',
  slug: 'hilander',
  slogan: 'Unbelievable Versatality',
  description:
    "The all-new Hi-Lander has the power you need to get ahead. Whether it's work or leisure, all-new Hi-Lander promises to make both better. This is ultra-capable pickup knows its way around tough workdays and adventure-filled weekends too.",
  image: {
    banner: '../images/cars/banners/hilander.jpg',
    portrait: '../images/cars/portraits/hilander.jpg',
  },
  specifications: [
    {
      engine: {
        type: '4 Cylinder, Common Rail, VGS Turbo Intercooled Diesel',
        engineDisplacement: '1898 cm^3',
        maxPower: '120 kW [163 hp] @ 377 rad/s [3600 rpm]',
        maxTorque: '360 Nm @ 209 - 262 rad/s [2000-2500 rpm]',
      },
      transmission: {
        driveType: '2WD System',
        numberOfSpeeds: '6 Speed',
        shiftType: 'Manual',
      },
      suspension: {
        front: 'Independent Double Wishbone, Coil Spring',
        rear: 'Soft Ride, Leaf Spring',
      },
      wheel: {
        tyre: {
          size: '245/70 R16',
          type: 'Radial, Tubeless',
        },
        rimType: 'Steel',
      },
      brakes: {
        frontBrakeType: 'Ventilated Disc with Twin-Pot Calipers',
        rearBrakeType: 'Drum',
      },
      steering: {
        steeringType: 'Hydraulic Power Assist with Tilt Adjustment',
      },
      dimensions: {
        overallVehicle: {
          length: {
            value: 5295,
            unit: 'mm',
          },
          breadth: {
            value: 1860,
            unit: 'mm',
          },
          height: {
            value: 1785,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 3096,
          unit: 'mm',
        },
        deckInner: {
          length: {
            value: 1485,
            unit: 'mm',
          },
          breadth: {
            value: 1530,
            unit: 'mm',
          },
          height: {
            value: 465,
            unit: 'mm',
          },
        },
        turningCircleRadius: {
          value: 6.3,
          unit: 'm',
        },
        groundClearance: {
          value: 220,
          unit: 'mm',
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: 225,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1835,
          unit: 'kg',
        },
        totalSeatingCapacity: '5',
        fuelTank: {
          value: 55,
          unit: 'L',
        },
      },
    },
  ],
}
