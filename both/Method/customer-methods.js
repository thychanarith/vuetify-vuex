import Customer from '../Collection/customer';
import SimpleSchema from 'simpl-schema';

export const insertCustomer = new ValidatedMethod({
    name:'m-insertCustomer',
    mixins: [CallPromiseMixin],
    validate:null,
    // new SimpleSchema({
    //     name:{
    //         type:String
    //     },
    //     age:{
    //         type:Number,
    //     },
    //     gender:{
    //         type:String
    //     },
    //     address:{
    //         type:String
    //     },
    //     brand:{
    //         type:String,
    //     }
    // }).validator(),
    run(doc){
        console.log(doc);
        return Customer.insert(doc)
    }
})

export const findCustomer = new ValidatedMethod({
    name: 'm_findCustomer',
    mixins: [CallPromiseMixin],
    validate: null,
    run() {
      return Customer.find().fetch();
    }
  });

export const findCustomerById = new ValidatedMethod({
    name:'m-findCustomerById',
    mixins:[CallPromiseMixin],
    validate: new SimpleSchema({
        _id:String,
    }).validator(),
    run(_id){
        console.log(_id)
        return Customer.findOne(_id)
    }
})

export const removeCustomer = new ValidatedMethod({
    name:'m-removeCustomer',
    mixins:[CallPromiseMixin],
    validate: new SimpleSchema({
        _id:String
    }).validator(),
    run(id){
        return Customer.remove(id)
    }
})

export const updateCustomer = new ValidatedMethod({
    name:'m-updateCustomer',
    mixins:[CallPromiseMixin],
    validate:null,
    run(doc){
        return Customer.update({_id:doc._id},{$set:doc})
    }
})











