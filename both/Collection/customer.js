import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo'

const Customer = new Mongo.Collection('customers')
let schema = {}

schema.customers = new SimpleSchema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  branch: {
    type: String
  }
})
Customer.attachSchema(schema.customers)
export default Customer
