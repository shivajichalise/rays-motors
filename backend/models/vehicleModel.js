import mongoose from 'mongoose'

const vehicleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    slogan: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    specifications: {
      engine: {
        type: {
          type: String,
          required: true,
        },

        engineDisplacement: {
          type: String,
          required: true,
        },

        maxPower: {
          type: String,
          required: true,
        },

        maxTorque: {
          type: String,
          required: true,
        },
      },
      transmission: {
        driveType: {
          type: String,
          required: true,
        },

        numberOfSpeeds: {
          type: String,
          required: true,
        },

        shiftType: {
          type: String,
          required: true,
        },
      },
      suspension: {
        front: {
          type: String,
          required: true,
        },
        rear: {
          type: String,
          required: true,
        },
      },
      wheel: {
        tyre: {
          size: {
            type: String,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
        },
        rimType: {
          type: String,
          required: true,
        },
      },
      brakes: {
        frontBrakeType: {
          type: String,
          required: true,
        },
        rearBrakeType: {
          type: String,
          required: true,
        },
      },
      steering: {
        steeringType: {
          type: String,
          required: true,
        },
      },
      dimensions: {
        overallVehicle: {
          length: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
          breadth: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
          height: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
        },
        wheelbase: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'mm',
        },
        deckInner: {
          length: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
          breadth: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
          height: {
            value: {
              type: Number,
              required: true,
            },
            unit: 'mm',
          },
        },
        turningCircleRadius: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'm',
        },
        groundClearance: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'mm',
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'kg',
        },
        kerbWeight: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'kg',
        },
        totalSeatingCapacity: {
          type: Number,
          required: true,
        },
        fuelTank: {
          value: {
            type: Number,
            required: true,
          },
          unit: 'L',
        },
      },
    },
  },
  {
    timestamps: true,
  }
)

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

export default Vehicle
