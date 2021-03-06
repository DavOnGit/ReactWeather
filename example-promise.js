// function getTempCallback (location, callback){
//   callback(undefined, 78)
//   callback('City not found')
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error: ', err)
//   } else {
//     console.log('success: ', temp)
//   }
// })
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(() => {
//       resolve(79)
//       reject('City not found')
//     }, 1000)
//
//   })
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success: ', temp)
// }, function(err){
//   console.log('promise error: ', err)
// })

//Challenge area
function addPromise (a,b){
  return new Promise( (resolve, reject) => {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b)
    } else reject('a and b need to be numbers!')
  })
}

addPromise(3, 2).then( result => {
  console.log('sum: ', result)
}, err => {
  console.log('sum error: ', err)
})

addPromise('3', 2).then( result => {
  console.log('sum: ', result)
}, err => {
  console.log('sum error:', err)
})
