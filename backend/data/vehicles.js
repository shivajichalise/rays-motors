export const vehicleSample = {
  name: 'Sample Vehicle',
  slug: 'scab',
  slogan: 'Sample Slogan',
  variant: 'Sample Variant',
  description: 'Sample Description',
  image: {
    banner: '../images/cars/banners/sample.jpg',
    portrait: '../images/cars/portraits/sample.jpg',
  },
  brochure: '../brochures/sample.pdf',
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
  comfortAndConvinience: [
    'Twin-Cockpit Ergonomic Cabin Design',

    'Central locking with key',

    'Front Wrap-around Bucket Seat',

    '6-way Manually Adjustable Driver seat',

    'Adjustable Headrests',

    'High Quality Fabric Upholstery',

    'AC with Pollen filters',

    '4 speakers with pre-wiring (Front door & dash)',

    '3D Electro-luminescent Meters with Multi-information Display (MID)',

    'Flexible Rear Seat - Foldable with 60:40 Tip-Up',

    'Multiple Cup Holders and Storage Compartments',

    'Multiple Power Outlets',

    'Auto down power windows',

    'Gear Shift Indicator',

    'Vanity Mirror on Passenger sun visor',

    'Coat Hooks',

    'Overhead Dome lamp',

    'DPD & SCR Level Indicators',
  ],
  safetyAndSecurity: [
    'Anti-skid Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',

    'Emergency Brake Assist (EBA) Brake Override System (BOS)',

    'Dual Front Airbags',

    'Pre-Tensioners with Load Limiters for Front Seat Belts',

    'ISOFIX Anchorages for child Seat',

    'Rear Door Child Lock',

    'Engine Immobiliser',

    'Pedestrian Friendly Front Fascia',

    'High Tensile Steel Body with Tailor-Welded Blanks',

    'Side Anti-intrusion Bars',

    'Chassis and Cabin with Crumple Zones',

    'Collapsible Steering Column',

    'Driver & Passenger Seat Belt Warning',

    'Engine Cover',

    'Wheel Cover',

    'Steel Underbody Protection',

    'Warning Lamps and Buzzers',
  ],
}

const vehicles = [
  {
    name: 'ISUZU Hi-Lander',
    slug: 'hilander',
    slogan: 'Unbelievable Versatality',
    variant: '4*4',
    description:
      "The all-new Hi-Lander has the power you need to get ahead. Whether it's work or leisure, all-new Hi-Lander promises to make both better. This is ultra-capable pickup knows its way around tough workdays and adventure-filled weekends too.",
    image: {
      banner: '../images/cars/banners/hilander2.jpg',
      portrait: '../images/cars/portraits/hilander.jpg',
    },
    brochure: '../brochures/sample.pdf',
    specifications: {
      engine: {
        type: '4 Cylinder, Common Rail, Turbo Intercooled Diesel',
        engineDisplacement: '2499 cm^3',
        maxPower: '134 HP',
        maxTorque: '320 Nm',
      },
      transmission: {
        driveType: '4WD System',
        numberOfSpeeds: '5 Speed',
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
          value: 225,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1795,
          unit: 'kg',
        },
        totalSeatingCapacity: '5',
        fuelTank: {
          value: 55,
          unit: 'L',
        },
      },
    },
    comfortAndConvinience: [
      'Twin-Cockpit Ergonomic Cabin Design',

      'Central locking with key',

      'Front Wrap-around Bucket Seat',

      '6-way Manually Adjustable Driver seat',

      'Adjustable Headrests',

      'High Quality Fabric Upholstery',

      'AC with Pollen filters',

      '4 speakers with pre-wiring (Front door & dash)',

      '3D Electro-luminescent Meters with Multi-information Display (MID)',

      'Flexible Rear Seat - Foldable with 60:40 Tip-Up',

      'Multiple Cup Holders and Storage Compartments',

      'Multiple Power Outlets',

      'Auto down power windows',

      'Gear Shift Indicator',

      'Vanity Mirror on Passenger sun visor',

      'Coat Hooks',

      'Overhead Dome lamp',

      'DPD & SCR Level Indicators',
    ],
    safetyAndSecurity: [
      'Anti-skid Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',

      'Emergency Brake Assist (EBA) Brake Override System (BOS),,',

      'Dual Front Airbags,',

      'Pre-Tensioners with Load Limiters for Front Seat Belts,',

      'ISOFIX Anchorages for child Seat,',

      'Rear Door Child Lock,',

      'Engine Immobiliser,',

      'Pedestrian Friendly Front Fascia,',

      'High Tensile Steel Body with Tailor-Welded Blanks,',

      'Side Anti-intrusion Bars,',

      'Chassis and Cabin with Crumple Zones,',

      'Collapsible Steering Column,',

      'Driver & Passenger Seat Belt Warning,',

      'Engine Cover,',

      'Wheel Cover,',

      'Steel Underbody Protection',

      'Warning Lamps and Buzzers',
    ],
  },
  {
    name: 'ISUZU V-Cross 2.5Ltr',
    slug: 'vcross',
    slogan: 'Born All Mighty',
    variant: '2.5 Ltr',
    description:
      'With its intuitive design and ergonomic styling, the new V-Cross makes every work week glide by smoothly. Now get the freedom you need and the luxury you desire in every journey no matter where you go.',
    image: {
      banner: '../images/cars/banners/vcross.jpg',
      portrait: '../images/cars/portraits/vcross.jpg',
    },
    brochure: '../brochures/sample.pdf',
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
    comfortAndConvinience: [
      'Twin-Cockpit Ergonomic Cabin Design',

      'Central locking with key',

      'Front Wrap-around Bucket Seat',

      '6-way Manually Adjustable Driver seat',

      'Adjustable Headrests',

      'High Quality Fabric Upholstery',

      'AC with Pollen filters',

      '4 speakers with pre-wiring (Front door & dash)',

      '3D Electro-luminescent Meters with Multi-information Display (MID)',

      'Flexible Rear Seat - Foldable with 60:40 Tip-Up',

      'Multiple Cup Holders and Storage Compartments',

      'Multiple Power Outlets',

      'Auto down power windows',

      'Gear Shift Indicator',

      'Vanity Mirror on Passenger sun visor',

      'Coat Hooks',

      'Overhead Dome lamp',

      'DPD & SCR Level Indicators',
    ],
    safetyAndSecurity: [
      'Anti-skid Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',

      'Emergency Brake Assist (EBA) Brake Override System (BOS),,',

      'Dual Front Airbags,',

      'Pre-Tensioners with Load Limiters for Front Seat Belts,',

      'ISOFIX Anchorages for child Seat,',

      'Rear Door Child Lock,',

      'Engine Immobiliser,',

      'Pedestrian Friendly Front Fascia,',

      'High Tensile Steel Body with Tailor-Welded Blanks,',

      'Side Anti-intrusion Bars,',

      'Chassis and Cabin with Crumple Zones,',

      'Collapsible Steering Column,',

      'Driver & Passenger Seat Belt Warning,',

      'Engine Cover,',

      'Wheel Cover,',

      'Steel Underbody Protection',

      'Warning Lamps and Buzzers',
    ],
  },
  {
    name: 'ISUZU V-Cross 3.0Ltr',
    slug: 'vcross',
    slogan: 'Born All Mighty',
    variant: '3.0 Ltr',
    description:
      'With its intuitive design and ergonomic styling, the new V-Cross makes every work week glide by smoothly. Now get the freedom you need and the luxury you desire in every journey no matter where you go.',
    image: {
      banner: '../images/cars/banners/vcross.jpg',
      portrait: '../images/cars/portraits/vcross.jpg',
    },
    brochure: '../brochures/sample.pdf',
    specifications: {
      engine: {
        type: '4 Cylinder, Common Rail, VGS Turbo Intercooled Diesel',
        engineDisplacement: '2999 cm^3',
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
    comfortAndConvinience: [
      'Twin-Cockpit Ergonomic Cabin Design',

      'Central locking with key',

      'Front Wrap-around Bucket Seat',

      '6-way Manually Adjustable Driver seat',

      'Adjustable Headrests',

      'High Quality Fabric Upholstery',

      'AC with Pollen filters',

      '4 speakers with pre-wiring (Front door & dash)',

      '3D Electro-luminescent Meters with Multi-information Display (MID)',

      'Flexible Rear Seat - Foldable with 60:40 Tip-Up',

      'Multiple Cup Holders and Storage Compartments',

      'Multiple Power Outlets',

      'Auto down power windows',

      'Gear Shift Indicator',

      'Vanity Mirror on Passenger sun visor',

      'Coat Hooks',

      'Overhead Dome lamp',

      'DPD & SCR Level Indicators',
    ],
    safetyAndSecurity: [
      'Anti-skid Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',

      'Emergency Brake Assist (EBA) Brake Override System (BOS),,',

      'Dual Front Airbags,',

      'Pre-Tensioners with Load Limiters for Front Seat Belts,',

      'ISOFIX Anchorages for child Seat,',

      'Rear Door Child Lock,',

      'Engine Immobiliser,',

      'Pedestrian Friendly Front Fascia,',

      'High Tensile Steel Body with Tailor-Welded Blanks,',

      'Side Anti-intrusion Bars,',

      'Chassis and Cabin with Crumple Zones,',

      'Collapsible Steering Column,',

      'Driver & Passenger Seat Belt Warning,',

      'Engine Cover,',

      'Wheel Cover,',

      'Steel Underbody Protection',

      'Warning Lamps and Buzzers',
    ],
  },
  {
    name: 'ISUZU D-MAX S-Cab',
    slug: 'scab',
    slogan: 'Success is a Long Journey. Start Here.',
    variant: 'Double Cab Diesel',
    description:
      'Purposeful design, a spacious passenger cabin, a large and strong cargo deck. Every feature on the S-CAB has been carefully considered to maximise utility and enhance efficiency so that you can maximise your success.',
    image: {
      banner: '../images/cars/banners/scab.jpg',
      portrait: '../images/cars/portraits/scab.jpg',
    },
    brochure: '../brochures/sample.pdf',
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
    comfortAndConvinience: [
      'Twin-Cockpit Ergonomic Cabin Design',

      'Central locking with key',

      'Front Wrap-around Bucket Seat',

      '6-way Manually Adjustable Driver seat',

      'Adjustable Headrests',

      'High Quality Fabric Upholstery',

      'AC with Pollen filters',

      '4 speakers with pre-wiring (Front door & dash)',

      '3D Electro-luminescent Meters with Multi-information Display (MID)',

      'Flexible Rear Seat - Foldable with 60:40 Tip-Up',

      'Multiple Cup Holders and Storage Compartments',

      'Multiple Power Outlets',

      'Auto down power windows',

      'Gear Shift Indicator',

      'Vanity Mirror on Passenger sun visor',

      'Coat Hooks',

      'Overhead Dome lamp',

      'DPD & SCR Level Indicators',
    ],
    safetyAndSecurity: [
      'Anti-skid Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',

      'Emergency Brake Assist (EBA) Brake Override System (BOS)',

      'Dual Front Airbags',

      'Pre-Tensioners with Load Limiters for Front Seat Belts',

      'ISOFIX Anchorages for child Seat',

      'Rear Door Child Lock',

      'Engine Immobiliser',

      'Pedestrian Friendly Front Fascia',

      'High Tensile Steel Body with Tailor-Welded Blanks',

      'Side Anti-intrusion Bars',

      'Chassis and Cabin with Crumple Zones',

      'Collapsible Steering Column',

      'Driver & Passenger Seat Belt Warning',

      'Engine Cover',

      'Wheel Cover',

      'Steel Underbody Protection',

      'Warning Lamps and Buzzers',
    ],
  },
  {
    name: 'ISUZU Single Cab',
    slug: 'singlecab',
    slogan: 'Tougher than the terrain',
    variant: 'Single Cab',
    description:
      'Isuzu D-Max Single Cab is simple, reliable, and affordable. Compared to other D-Max line-up, Single Cab sets a new bar setting an example of affordability without compromise in quality.',
    image: {
      banner: '../images/cars/banners/singlecab.jpg',
      portrait: '../images/cars/portraits/singlecab.jpg',
    },
    brochure: '../brochures/sample.pdf',
    specifications: {
      engine: {
        type: '4 Cylinder, Common Rail, Turbo Intercooled Diesel',
        engineDisplacement: '2499 cm^3',
        maxPower: '58 kW [78 hp] @ 398 rad/s [3800 rpm]',
        maxTorque: '176 Nm @ 1800-2400 rpm',
      },
      transmission: {
        driveType: '2WD',
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
          type: 'Radial',
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
            value: 5375,
            unit: 'mm',
          },
          breadth: {
            value: 1860,
            unit: 'mm',
          },
          height: {
            value: 1800,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 3095,
          unit: 'mm',
        },
        deckInner: {
          length: {
            value: 2440,
            unit: 'mm',
          },
          breadth: {
            value: 1725,
            unit: 'mm',
          },
          height: {
            value: 510,
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
          value: 1155,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1695,
          unit: 'kg',
        },
        totalSeatingCapacity: '2',
        fuelTank: {
          value: 55,
          unit: 'L',
        },
      },
    },
    comfortAndConvinience: [
      'Power Steering',
      'Tilt Adjustable Steering',
      'Driver Seat Height Adjuster',

      'Blower with Heater',

      'Dust and Pollen Filter',

      'Air Conditioner (Optional in High Ride Flat Deck)',

      'Clutch Footrest',

      'Vinyl Seat Upholstery',

      'A-Pillar Assist Grip for Driver & Co-driver',

      'Rood Assist Grip for Co-driver',

      'Cluster with High Contrast Digital Display',

      'Moulded Roof Lining',

      'Vinyl Floor Cover',

      'Sun Visor for Driver and Co-driver',

      'ORMs with Adjustment Retention',

      '12v Mobile Charging Point',

      'Retractable Cup and Coin Holders on Dashboard',

      'Twin Glove Box',

      'Door Trims with Bottle Holder and Pocket',

      'Twin Tray Floor Console with Bottle Holder',

      'Provision for 2-DIN Entertainment System',
      'Digital Clock',
    ],
    safetyAndSecurity: [
      'Chassis and Cabin with Crumple Ztones',
      'Cross Car Front Beam',
      'Door Side Intrusion Beam',
      'Steel Skid Plate with Engine Bottam Guard',
      'Collapsible Steering Column',
      'Door-Ajar Warning Lamp',
      'Key-Not-Removed Reminder',
      'Seat-Belt Warning Lamp',
      'Headlamp-on Reminder Buzzer',
      'Electronic Headlamp Leveling System',
      'Day & Night IRVM',
      'ELR Seat Belts',
    ],
  },
  {
    name: 'ISUZU 3.0',
    slug: 'threeDotZero',
    slogan: 'Tough and Timeless',
    description:
      'The Isuzu D-Max 3.0, which is a visually-enhanced version of the standard D-Max double cab bakkie, has proven to be a hit with local buyers. So much so in fact that Isuzu is now introducing the nameplate to its 3.0-litre D-Max. ',
    image: {
      banner: '../images/cars/banners/threeDotZero.jpg',
      portrait: '../images/cars/portraits/threeDotZero.jpg',
    },
    brochure: '../brochures/sample.pdf',
    specifications: {
      engine: {
        type: '4 Cylinder, 3.0L Turbo Diesel, DOHC',
        engineDisplacement: '2999 cm^3',
        maxPower: '130 kW @ 3000 rpm',
        maxTorque: '380 Nm @ 1800-2800 rpm',
      },
      transmission: {
        driveType: '4WD',
        numberOfSpeeds: '5 Speed',
        shiftType: 'Manual',
      },
      suspension: {
        front: 'Independent Double Wishbone, Coil Spring',
        rear: 'Leaf Spring',
      },
      wheel: {
        tyre: {
          size: '255 / 60 R18',
          type: 'Radial',
        },
        rimType: 'Silver Alloy',
      },
      brakes: {
        frontBrakeType: 'Ventilated Disc',
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
            value: 1795,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 3095,
          unit: 'mm',
        },
        deckInner: {
          length: {
            value: 2440,
            unit: 'mm',
          },
          breadth: {
            value: 1725,
            unit: 'mm',
          },
          height: {
            value: 510,
            unit: 'mm',
          },
        },
        turningCircleRadius: {
          value: 6.3,
          unit: 'm',
        },
        groundClearance: {
          value: 235,
          unit: 'mm',
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: 1155,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1695,
          unit: 'kg',
        },
        totalSeatingCapacity: '4',
        fuelTank: {
          value: 76,
          unit: 'L',
        },
      },
    },
    comfortAndConvinience: [
      'Power Steering',
      'Tilt Adjustable Steering',
      'Driver Seat Height Adjuster',

      'Blower with Heater',

      'Dust and Pollen Filter',

      'Air Conditioner (Optional in High Ride Flat Deck)',

      'Clutch Footrest',

      'Vinyl Seat Upholstery',

      'A-Pillar Assist Grip for Driver & Co-driver',

      'Rood Assist Grip for Co-driver',

      'Cluster with High Contrast Digital Display',

      'Moulded Roof Lining',

      'Vinyl Floor Cover',

      'Sun Visor for Driver and Co-driver',

      'ORMs with Adjustment Retention',

      '12v Mobile Charging Point',

      'Retractable Cup and Coin Holders on Dashboard',

      'Twin Glove Box',

      'Door Trims with Bottle Holder and Pocket',

      'Twin Tray Floor Console with Bottle Holder',

      'Provision for 2-DIN Entertainment System',
      'Digital Clock',
    ],
    safetyAndSecurity: [
      'Chassis and Cabin with Crumple Ztones',
      'Cross Car Front Beam',
      'Door Side Intrusion Beam',
      'Steel Skid Plate with Engine Bottam Guard',
      'Collapsible Steering Column',
      'Door-Ajar Warning Lamp',
      'Key-Not-Removed Reminder',
      'Seat-Belt Warning Lamp',
      'Headlamp-on Reminder Buzzer',
      'Electronic Headlamp Leveling System',
      'Day & Night IRVM',
      'ELR Seat Belts',
    ],
  },
  {
    name: 'ISUZU MU-X',
    slug: 'mux',
    slogan: 'All Muscle. All Heart.',
    description:
      'The All-New Isuzu mu-X is the perfect SUV for those with ambition and courage to Take the Lead. This is one of the safest and most technologically-advanced SUV in the market, featuring the Advanced Driver Assist System (ADAS) with active and passive safety features that won’t bring you down.',
    image: {
      banner: '../images/cars/banners/mux.jpg',
      portrait: '../images/cars/portraits/mux.jpg',
    },
    brochure: '../brochures/sample.pdf',
    specifications: {
      engine: {
        type: '4 Cylinder, DOHC, 16-valve',
        engineDisplacement: '2999 cm^3',
        maxPower: '130 kW [177 PS] @ 3600 rpm',
        maxTorque: '380 Nm @ 1800-2800 rpm',
      },
      transmission: {
        driveType:
          'Automatic with Sequential Shift & Brake Shift Lock Electronically controlled with Adaptive Grade Logic & fuel-saving Lock-up Torque Converter',
        numberOfSpeeds: '6 Speed',
        shiftType: 'Manual',
      },
      suspension: {
        front:
          'Independent, Double Wishbone, Coil Spring, gas shock absorbers, stabiliser bar',
        rear: 'Penta-link suspension, gas shock absorbers, stabiliser bar',
      },
      wheel: {
        tyre: {
          size: '255/60 R18',
          type: 'Radial, Tubeless',
        },
        rimType: 'Diamond-cut Alloy',
      },
      brakes: {
        frontBrakeType: '300mm dia Ventilated Disc with Twin-Pot Calipers',
        rearBrakeType: '318mm dia Ventilated Rear Disc',
      },
      steering: {
        steeringType:
          'Speed-sensitive variable capacity power-assisted rack & pinion system with Tilt Adjustment',
      },
      dimensions: {
        overallVehicle: {
          length: {
            value: 4850,
            unit: 'mm',
          },
          breadth: {
            value: 1870,
            unit: 'mm',
          },
          height: {
            value: 1825,
            unit: 'mm',
          },
        },
        wheelbase: {
          value: 2855,
          unit: 'mm',
        },
        deckInner: {
          length: {
            value: 0,
            unit: 'mm',
          },
          breadth: {
            value: 0,
            unit: 'mm',
          },
          height: {
            value: 0,
            unit: 'mm',
          },
        },
        turningCircleRadius: {
          value: 11,
          unit: 'm',
        },
        groundClearance: {
          value: 230,
          unit: 'mm',
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: 0,
          unit: 'kg',
        },
        kerbWeight: {
          value: 1992,
          unit: 'kg',
        },
        totalSeatingCapacity: '7',
        fuelTank: {
          value: 65,
          unit: 'L',
        },
      },
    },
    comfortAndConvinience: [
      'Climate control air-conditioning with integrated heater & demister',
      'Cabin cooling vents for all 3 rows of seats',
      'Separate blower control for rear seats',
      'Pollen and fine particle air filter',
      'All power windows with driver side one-touch down/up & delay closing',
      'Passive Entry & Start System (PESS)',
      'Central locking with keyless entry',
      'Power-adjustable & power-foldable door mirrors with turn indicator lights',
      'Cruise control system',
      'Integrated 17.8 cm (7 inch) touchscreen entertainment system with DVD/CD/USB/MP3/FM/AM/AUX compatibility, with iPod®, Bluetooth® phone & audio streaming',
      'Live Surround Soun roof-mounted sound system with 8 speakers (font dash, front doors, rear doors and roof)',
      'Tilt adjustable steering wheel with power steering',
      'Steering wheel with easy-select cruise and audio controls',
      '3D Electro-lumiescent meters with Multi-Information Display (MID) & chrome rings',
      'Terrain Command 4x4 selec dial with 2-High,4 -High and 4 -Low range*',
      'Windscreen wipers with variable intermittent sweep modes',
      'Rear window wiper',
      'Day/night interior rear view mirror',
      'Sun visors with vanity mirror (co-driver side) and ticket retaining strap (driver side) Fixed',
      'A-pillar assist-grips for 1st row',
      'Roof mounted retractable door assist-grips for 1st & 2nd rows',
      'Fixed C-pillar assist-grips for 3rd row',
      'Height-adjustable upper mounts for front seat belts',
      'Premium carpet mats with safety locking clips (driver side) & foot protection guide (3rd row)',
    ],
    safetyAndSecurity: [
      '4-Channel 4-Sensor Anti-Lock Brake System (ABS) with Electronic Brakeforce Distribution (EBD)',
      'Emergency Brake Assist (EBA)',
      '300 mm Front Ventilated Disc Brakes with Twin-pot Calipers',
      '318 mm Rear Ventilated Disc Brakes',
      'Electronic Stability Control (ESC)',
      'Traction Control System (TCS)',
      'Hill Descent Control (HDC)',
      '6 Airbags : Driver, front passenger, front side and full length curtain',
      'Pre-tensioners with load limiters for front seat belts',
      '3-point retractable seat belts for all seating positions',
      'Emergency locking retractor (ELR) for all seat belts',
      '3 ISOFIX childseat anchorage for 2nd row seats',
      'Automatic door lock release on airbag deployment',
      'High tensile steel body construction with tailor-welded blanks',
      'Anti-intrusion bars inside side doors',
      'Child-proof rear door locks',
      'Rear parking assist camera',
      'Engine immobilizer',
      'Anti-theft alarm system',
      'Driver & passenger seat belt warning',
      'Audible & visual headlight-ON & parking light-ON warning',
      'Rear window demister with timer',
      'High Density Polyethylene (HDPE) fuel tank',
      'Centre high mount LED stop lamp',
      'Collapsible steering column',
      'Under-front steel plate skid/splash shield',
      'Steel plate sump guards',
      'Steel plate transfer protector',
      'Steel plate on leading edge of fuel tank',
      'Fuel tank fire protector',
    ],
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
