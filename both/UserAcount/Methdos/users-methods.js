import Users from '../Collection/user'

export const inserUser = new ValidatedMethod({
    name:'m-insertUser',
    mixins: [CallPromiseMixin],
    validate:null,
    run(doc){
        return Users.insert(doc)
    }
})



Template.register.events({
    'submit form':function(event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var psd = $('[name=psd]').val();
        Accounts.createUser({
            name: name,
            psd: psd
        });
    }
})

