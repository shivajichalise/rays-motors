const vehicles = [
  {
    name: 'ISUZU Hi-Lander',
    slug: 'hilander',
    slogan: 'Unbelievable Versatality',
    description:
      "The all-new Hi-Lander has the power you need to get ahead. Whether it's work or leisure, all-new Hi-Lander promises to make both better. This is ultra-capable pickup knows its way around tough workdays and adventure-filled weekends too.",
    image: {
      banner: '../images/cars/banners/hilander.jpg',
      portrait: '../images/cars/portraits/hilander.jpg',
    },
    specifications: {
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
  },
  {
    name: 'ISUZU V-Cross',
    slug: 'vcross',
    slogan: 'Born All Mighty',
    description:
      'With its intuitive design and ergonomic styling, the new V-Cross makes every work week glide by smoothly. Now get the freedom you need and the luxury you desire in every journey no matter where you go.',
    image: {
      banner: '../images/cars/banners/vcross.jpg',
      portrait: '../images/cars/portraits/hilander.jpg',
    },
    specifications: {
      engine: {
        type: '4 Cylinder, Common Rail, VGS Turbo Intercooled Diesel',
        engineDisplacement: '2499 cm^3',
        maxPower: '100 kW [134 hp] @ 377 rad/s [3600 rpm]',
        maxTorque: '320 Nm @ 1800-2800 rpm',
      },
      transmission: {
        driveType: 'Shift-on-the-fly 4WD System',
        numberOfSpeeds: '5 Speed',
        shiftType: 'Manual',
      },
      suspension: {
        front: 'Independent Double Wishbone, Coil Spring',
        rear: 'Soft Ride, Leaf Spring',
      },
      wheel: {
        tyre: {
          size: '255/60 R18',
          type: 'Radial, Tubeless',
        },
        rimType: 'Alloy',
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
            value: 1855,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 3095,
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
          value: 225,
          unit: 'mm',
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: 235,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1935,
          unit: 'kg',
        },
        totalSeatingCapacity: '5',
        fuelTank: {
          value: 55,
          unit: 'L',
        },
      },
    },
  },
  {
    name: 'ISUZU S-Cab',
    slug: 'scab',
    slogan: 'Success is a Long Journey. Start Here.',
    description:
      'Purposeful design, a spacious passenger cabin, a large and strong cargo deck. Every feature on the S-CAB has been carefully considered to maximise utility and enhance efficiency so that you can maximise your success.',
    image: {
      banner: '../images/cars/banners/scab.jpg',
      portrait: '../images/cars/portraits/scab.jpg',
    },
    specifications: {
      engine: {
        type: '4 Cylinder, Common Rail, Turbo Intercooled Diesel',
        engineDisplacement: '2499 cm^3',
        maxPower: '58 kW [78 hp] @ 398 rad/s [3800 rpm]',
        maxTorque: '176 Nm @ 1500-2400 rpm',
      },
      transmission: {
        driveType: '-',
        numberOfSpeeds: '5 Speed',
        shiftType: 'Manual',
      },
      suspension: {
        front: 'Double Wishbone, Coil Spring',
        rear: 'Semi-Elliptic, Leaf Spring',
      },
      wheel: {
        tyre: {
          size: '205 R16 C',
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
            value: 5190,
            unit: 'mm',
          },
          breadth: {
            value: 1860,
            unit: 'mm',
          },
          height: {
            value: 1780,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 3095,
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
          value: 235,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1745,
          unit: 'kg',
        },
        totalSeatingCapacity: '5',
        fuelTank: {
          value: 55,
          unit: 'L',
        },
      },
    },
  },
]

export default vehicles

// const vvehicles = [
//   {
//     _id: '1',
//     name: 'ISUZU MU-X',
//     slug: 'mux',
//     slogan: 'Take The Lead',
//     image: '../images/banners/mu-x.jpg',
//     specifications: [
//       {
//         engine: {
//           type: 'ISUZU Ddi VGS Turbo Hi-Power',
//           description:
//             '2999 cm^3 (3.0 Litres) turbo diesel, in-line 4-cylinder, DOHC, 16-valve',
//           displacement: '2999 cm^3 (cc)',
//           maxPower: '130 kW (177 PS) @ 3600 rpm',
//           bore: '95.4 mm',
//           stroke: '104.9 mm',
//           compressionRatio: '17.5 : 1',
//           cylinderHead:
//             'ISUZU-patent special aluminium alloy with double-walled water jacketing',
//           cylinderBlock:
//             'Case iron upper with advanced anti-friction induction-hardened cylinder bores, cast alloy lower',
//           valveTrain:
//             'Heady-duty steel chain-driven dual overhead camshafts (DOHC), roller rockers, 4 valves per cylinder',
//           fuelInjection:
//             'Electronic high pressure common-rail diesel-direct injection (Ddi)',
//           airInduction:
//             'Intercooled Variable Geometry System (VGS) turbo charger with Variable Swirl System (VSS)',
//           pistons:
//             'Special graphite coated pistons with heat-resistant integrated ring carrier (top ring) & nickel composite piston rings',
//           emissionLevel: 'Bharat Stage 4',
//         },
//         transmission: {
//           type: [
//             'Automatic with Sequential Shift & Brake Shift Lock',
//             'Electronically controlled with Adaptive Grade Logic & fuel-saving Lock-up Torque Converter',
//             'Uphill & Downhill Drive Control (transmission based)',
//           ],
//           fourXfourSystem:
//             ' "Terrain Command" control with  \'shift-on-the-fly\' 2-high <-> 4-high selection at up to 100 km/h',
//           drivetrainSystem:
//             'Electronic Stability Control (ESC) & Traction Control System (TCS)',
//         },
//         chassis: {
//           frame:
//             'Separate, full-length heavy--duty ladder construction chassis',
//           frontSuspension:
//             'Independent, Double wishbone, coil springs, gas shock absorbers, stabiliser bar',
//           rearSuspension:
//             'Penta-link coil suspension, gas shock absorbers, stabiliser bar',
//         },
//         axles: {
//           front:
//             'Independent 4x4: fully floating with outer CV & inner double offset joints',
//           rear: 'Rigid semi-floating banjo with gypoid final drive',
//         },
//         steering: {
//           type: 'Speed-sensitive variable capacity power-assisted rack & pinion system',
//           adjustment: 'Tilt-adjustable sterring wheel',
//         },
//         brakes: {
//           type: 'Power-assisted via 266 mm (10.5 inch) servo unit 4-Channel 4-Sensor Anti-Lock Brake System (ABS) with Electronic Brakeforce Distribution (EBD) & Emergency Brake Assist (EBA)',
//           front: '300 mm dia ventilated front disc with twin-pot calipers',
//           rear: '318 dia ventilated rear disc',
//         },
//         wheels: {
//           rim: '18 x 7J - 33, Diamond-cut Alloy',
//           tyre: '255 / 60 R18',
//         },
//         capacity: {
//           seating: '7 persons',
//           fuelTank: '65 litres capacity High Density Polyethylene (HDPE) tank',
//         },
//         performance: {
//           minTurningRadius: '5.8 m',
//           maxGradeability: [
//             {
//               mode: '4x2',
//               deg: 25,
//             },
//             {
//               mode: '4x4',
//               deg: 30,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     _id: '2',
//     name: 'ISUZU S-CAB',
//     slug: 'scab',
//     slogan: 'Success is a Long Journey. Start Here.',
//     image: '../images/banners/s-cab.jpg',
//     specifications: [
//       {
//         engine: {
//           type: 'ISUZU Ddi VGS Turbo Hi-Power',
//           description:
//             '2999 cm^3 (3.0 Litres) turbo diesel, in-line 4-cylinder, DOHC, 16-valve',
//           displacement: '2999 cm^3 (cc)',
//           maxPower: '130 kW (177 PS) @ 3600 rpm',
//           bore: '95.4 mm',
//           stroke: '104.9 mm',
//           compressionRatio: '17.5 : 1',
//           cylinderHead:
//             'ISUZU-patent special aluminium alloy with double-walled water jacketing',
//           cylinderBlock:
//             'Case iron upper with advanced anti-friction induction-hardened cylinder bores, cast alloy lower',
//           valveTrain:
//             'Heady-duty steel chain-driven dual overhead camshafts (DOHC), roller rockers, 4 valves per cylinder',
//           fuelInjection:
//             'Electronic high pressure common-rail diesel-direct injection (Ddi)',
//           airInduction:
//             'Intercooled Variable Geometry System (VGS) turbo charger with Variable Swirl System (VSS)',
//           pistons:
//             'Special graphite coated pistons with heat-resistant integrated ring carrier (top ring) & nickel composite piston rings',
//           emissionLevel: 'Bharat Stage 4',
//         },
//         transmission: {
//           type: [
//             'Automatic with Sequential Shift & Brake Shift Lock',
//             'Electronically controlled with Adaptive Grade Logic & fuel-saving Lock-up Torque Converter',
//             'Uphill & Downhill Drive Control (transmission based)',
//           ],
//           fourXfourSystem:
//             ' "Terrain Command" control with  \'shift-on-the-fly\' 2-high <-> 4-high selection at up to 100 km/h',
//           drivetrainSystem:
//             'Electronic Stability Control (ESC) & Traction Control System (TCS)',
//         },
//         chassis: {
//           frame:
//             'Separate, full-length heavy--duty ladder construction chassis',
//           frontSuspension:
//             'Independent, Double wishbone, coil springs, gas shock absorbers, stabiliser bar',
//           rearSuspension:
//             'Penta-link coil suspension, gas shock absorbers, stabiliser bar',
//         },
//         axles: {
//           front:
//             'Independent 4x4: fully floating with outer CV & inner double offset joints',
//           rear: 'Rigid semi-floating banjo with gypoid final drive',
//         },
//         steering: {
//           type: 'Speed-sensitive variable capacity power-assisted rack & pinion system',
//           adjustment: 'Tilt-adjustable sterring wheel',
//         },
//         brakes: {
//           type: 'Power-assisted via 266 mm (10.5 inch) servo unit 4-Channel 4-Sensor Anti-Lock Brake System (ABS) with Electronic Brakeforce Distribution (EBD) & Emergency Brake Assist (EBA)',
//           front: '300 mm dia ventilated front disc with twin-pot calipers',
//           rear: '318 dia ventilated rear disc',
//         },
//         wheels: {
//           rim: '18 x 7J - 33, Diamond-cut Alloy',
//           tyre: '255 / 60 R18',
//         },
//         capacity: {
//           seating: '7 persons',
//           fuelTank: '65 litres capacity High Density Polyethylene (HDPE) tank',
//         },
//         performance: {
//           minTurningRadius: '5.8 m',
//           maxGradeability: [
//             {
//               mode: '4x2',
//               deg: 25,
//             },
//             {
//               mode: '4x4',
//               deg: 30,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     _id: '3',
//     name: 'ISUZU V-Cross',
//     slug: 'vcross',
//     slogan: 'Born All Mighty.',
//     image: '../images/banners/v-cross.jpg',
//     specifications: [
//       {
//         engine: {
//           type: 'ISUZU Ddi VGS Turbo Hi-Power',
//           description:
//             '2999 cm^3 (3.0 Litres) turbo diesel, in-line 4-cylinder, DOHC, 16-valve',
//           displacement: '2999 cm^3 (cc)',
//           maxPower: '130 kW (177 PS) @ 3600 rpm',
//           bore: '95.4 mm',
//           stroke: '104.9 mm',
//           compressionRatio: '17.5 : 1',
//           cylinderHead:
//             'ISUZU-patent special aluminium alloy with double-walled water jacketing',
//           cylinderBlock:
//             'Case iron upper with advanced anti-friction induction-hardened cylinder bores, cast alloy lower',
//           valveTrain:
//             'Heady-duty steel chain-driven dual overhead camshafts (DOHC), roller rockers, 4 valves per cylinder',
//           fuelInjection:
//             'Electronic high pressure common-rail diesel-direct injection (Ddi)',
//           airInduction:
//             'Intercooled Variable Geometry System (VGS) turbo charger with Variable Swirl System (VSS)',
//           pistons:
//             'Special graphite coated pistons with heat-resistant integrated ring carrier (top ring) & nickel composite piston rings',
//           emissionLevel: 'Bharat Stage 4',
//         },
//         transmission: {
//           type: [
//             'Automatic with Sequential Shift & Brake Shift Lock',
//             'Electronically controlled with Adaptive Grade Logic & fuel-saving Lock-up Torque Converter',
//             'Uphill & Downhill Drive Control (transmission based)',
//           ],
//           fourXfourSystem:
//             ' "Terrain Command" control with  \'shift-on-the-fly\' 2-high <-> 4-high selection at up to 100 km/h',
//           drivetrainSystem:
//             'Electronic Stability Control (ESC) & Traction Control System (TCS)',
//         },
//         chassis: {
//           frame:
//             'Separate, full-length heavy--duty ladder construction chassis',
//           frontSuspension:
//             'Independent, Double wishbone, coil springs, gas shock absorbers, stabiliser bar',
//           rearSuspension:
//             'Penta-link coil suspension, gas shock absorbers, stabiliser bar',
//         },
//         axles: {
//           front:
//             'Independent 4x4: fully floating with outer CV & inner double offset joints',
//           rear: 'Rigid semi-floating banjo with gypoid final drive',
//         },
//         steering: {
//           type: 'Speed-sensitive variable capacity power-assisted rack & pinion system',
//           adjustment: 'Tilt-adjustable sterring wheel',
//         },
//         brakes: {
//           type: 'Power-assisted via 266 mm (10.5 inch) servo unit 4-Channel 4-Sensor Anti-Lock Brake System (ABS) with Electronic Brakeforce Distribution (EBD) & Emergency Brake Assist (EBA)',
//           front: '300 mm dia ventilated front disc with twin-pot calipers',
//           rear: '318 dia ventilated rear disc',
//         },
//         wheels: {
//           rim: '18 x 7J - 33, Diamond-cut Alloy',
//           tyre: '255 / 60 R18',
//         },
//         capacity: {
//           seating: '7 persons',
//           fuelTank: '65 litres capacity High Density Polyethylene (HDPE) tank',
//         },
//         performance: {
//           minTurningRadius: '5.8 m',
//           maxGradeability: [
//             {
//               mode: '4x2',
//               deg: 25,
//             },
//             {
//               mode: '4x4',
//               deg: 30,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     _id: '4',
//     name: 'ISUZU Single Cab',
//     slug: 'singlecab',

//     slogan: 'Super Strong Performance, Super Strong Results.',
//     image: '../images/banners/single-cab.jpg',
//     specifications: [
//       {
//         engine: {
//           type: 'ISUZU Ddi VGS Turbo Hi-Power',
//           description:
//             '2999 cm^3 (3.0 Litres) turbo diesel, in-line 4-cylinder, DOHC, 16-valve',
//           displacement: '2999 cm^3 (cc)',
//           maxPower: '130 kW (177 PS) @ 3600 rpm',
//           bore: '95.4 mm',
//           stroke: '104.9 mm',
//           compressionRatio: '17.5 : 1',
//           cylinderHead:
//             'ISUZU-patent special aluminium alloy with double-walled water jacketing',
//           cylinderBlock:
//             'Case iron upper with advanced anti-friction induction-hardened cylinder bores, cast alloy lower',
//           valveTrain:
//             'Heady-duty steel chain-driven dual overhead camshafts (DOHC), roller rockers, 4 valves per cylinder',
//           fuelInjection:
//             'Electronic high pressure common-rail diesel-direct injection (Ddi)',
//           airInduction:
//             'Intercooled Variable Geometry System (VGS) turbo charger with Variable Swirl System (VSS)',
//           pistons:
//             'Special graphite coated pistons with heat-resistant integrated ring carrier (top ring) & nickel composite piston rings',
//           emissionLevel: 'Bharat Stage 4',
//         },
//         transmission: {
//           type: [
//             'Automatic with Sequential Shift & Brake Shift Lock',
//             'Electronically controlled with Adaptive Grade Logic & fuel-saving Lock-up Torque Converter',
//             'Uphill & Downhill Drive Control (transmission based)',
//           ],
//           fourXfourSystem:
//             ' "Terrain Command" control with  \'shift-on-the-fly\' 2-high <-> 4-high selection at up to 100 km/h',
//           drivetrainSystem:
//             'Electronic Stability Control (ESC) & Traction Control System (TCS)',
//         },
//         chassis: {
//           frame:
//             'Separate, full-length heavy--duty ladder construction chassis',
//           frontSuspension:
//             'Independent, Double wishbone, coil springs, gas shock absorbers, stabiliser bar',
//           rearSuspension:
//             'Penta-link coil suspension, gas shock absorbers, stabiliser bar',
//         },
//         axles: {
//           front:
//             'Independent 4x4: fully floating with outer CV & inner double offset joints',
//           rear: 'Rigid semi-floating banjo with gypoid final drive',
//         },
//         steering: {
//           type: 'Speed-sensitive variable capacity power-assisted rack & pinion system',
//           adjustment: 'Tilt-adjustable sterring wheel',
//         },
//         brakes: {
//           type: 'Power-assisted via 266 mm (10.5 inch) servo unit 4-Channel 4-Sensor Anti-Lock Brake System (ABS) with Electronic Brakeforce Distribution (EBD) & Emergency Brake Assist (EBA)',
//           front: '300 mm dia ventilated front disc with twin-pot calipers',
//           rear: '318 dia ventilated rear disc',
//         },
//         wheels: {
//           rim: '18 x 7J - 33, Diamond-cut Alloy',
//           tyre: '255 / 60 R18',
//         },
//         capacity: {
//           seating: '7 persons',
//           fuelTank: '65 litres capacity High Density Polyethylene (HDPE) tank',
//         },
//         performance: {
//           minTurningRadius: '5.8 m',
//           maxGradeability: [
//             {
//               mode: '4x2',
//               deg: 25,
//             },
//             {
//               mode: '4x4',
//               deg: 30,
//             },
//           ],
//         },
//       },
//     ],
//   },
// ]
