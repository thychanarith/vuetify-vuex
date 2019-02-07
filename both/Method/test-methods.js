import Test from '../Collection/test'

export const insertTest = new ValidatedMethod({
    name:'minsertTest',
    mixins: [CallPromiseMixin],
    validate:null,
    run(doc){
        return Test.insert(doc)
    }
})

export const findTest = new ValidatedMethod({
    name:'mfindTest',
    mixins:[CallPromiseMixin],
    validate:null,
    run(){
        return Test.find().fetch()
    }
})