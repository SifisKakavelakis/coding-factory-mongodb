// Select the database to use.
use('codingfactory')

db.getCollection('users').find()

// db.getCollection('users').insertOne({
//     '_id': 1111,
//     'name':'lalakis',
//     'surname':'papadakis'
// })

// db.getCollection('users').insertMany([
//     {
//         'email':'marka@aueb.gr'
//     },
//     {
//         'email':'thanasis@aueb.gr'
//     }
// ])

// db.getCollection('users').deleteOne({
//     'name':'lalakis'
// })

// db.getCollection('users').deleteMany({})

// db.getCollection('users').findOne({
//     'username':'admin'
// })

// db.getCollection('users').find({
//     'username':'admin'
// })

// db.getCollection('users').findOne
// ({'username':'admin'},{'roles':0})

// db.getCollection('users').find({},
//     {'username':1, 'surname':1, 'name':1}).
//     sort({'firstname':1})

// db.getCollection('users').find({'address.area':'area1'},
//     {username:1, 'name':1, surname:1, 'address.area':1})

// db.getCollection('users').find({
//     'phone.number':'2102222222'
// })

// db.getCollection('users').find({
//     'phone.type':'work'
// })

// db.getCollection('users').find({
//     $or: [
//         {'phone.number':'2101111111'},
//         {'phone.number':'2103334444'}
//     ]
// })

// db.getCollection('users').find({
//     'phone.number': {$in:['2101111111',
//         '2103334444']}
// })

// db.getCollection('users').updateOne(
//     {'name':'Johnny'},
//     {
//         $set:{
//             'name':'lakis',
//             'surname':'lalakis'
//         }
//     }
// )

// db.getCollection('users').updateMany(
//     {},
//     {
//         $set:{
//             'newfield1':'myfield 1',
//             'newfield2':[1,2,3]            
//         }
//     }
// )

// db.getCollection('users').updateOne(
//     {name:'lakis'},
//     {
//         $push: {
//             phone: {
//                 _id: new ObjectId(),
//                 type: 'work',
//                 number: '2222'
//             }
//         }       
//         }
// )

// db.getCollection('users').updateOne(
//     {name:'lakis'},
//     {
//         $push: {
//             newfield2: 4
//             }
//         }       
// )

// use('codingfactory')
// db.getCollection('users').updateMany(
//     {'phone.type':'work'},
//     {
//         $set:{
//             'phone.$.number':'-'
//         }
//     }
// )

// use('codingfactory')
// db.getCollection('users').updateMany(
//     {username:'jdoe'},
//     {
//         $pull:{
//             phone: {type: 'work'}
//         }
//     }
// )

// use('codingfactory')
// db.getCollection('users').updateMany(
//     {},
//     {
//         $unset: {
//             newfield1:''
//         }
//     }
// )

use('codingfactory')
db.getCollection('users').aggregate([
    {
        $match: {
            'address.area':'area2'
        }
    },
    {
        $project: {
          count: {$size:'$phone'}
        }
    }
])