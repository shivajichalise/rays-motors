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
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      banner: {
        type: String,
        required: true,
      },
      portrait: {
        type: String,
        required: true,
      },
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
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
          breadth: {
            value: {
              type: Number,
              required: true,
            },
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
          height: {
            value: {
              type: Number,
              required: true,
            },
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
        },
        wheelbase: {
          value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: true,
            default: 'mm',
          },
        },
        deckInner: {
          length: {
            value: {
              type: Number,
              required: true,
            },
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
          breadth: {
            value: {
              type: Number,
              required: true,
            },
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
          height: {
            value: {
              type: Number,
              required: true,
            },
            unit: {
              type: String,
              required: true,
              default: 'mm',
            },
          },
        },
        turningCircleRadius: {
          value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: true,
            default: 'm',
          },
        },
        groundClearance: {
          value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: true,
            default: 'mm',
          },
        },
      },
      capacity: {
        deckCarryingCapacity: {
          value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: true,
            default: 'kg',
          },
        },
        kerbWeight: {
          value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: true,
            default: 'kg',
          },
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
          unit: {
            type: String,
            required: true,
            default: 'L',
          },
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
