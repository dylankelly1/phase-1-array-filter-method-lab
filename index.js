// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// const str1 = 'Bobby';
// const str2 = 'bobby';
// str1 === str2;
// str1.toLowerCase() === str2.toLowerCase(); 


//function findMatching(array,string) {
//    return array.filter(function (index) {
//        if (index === string) {
//            return index
//        }
//    })

//}

// function findMatching (drivers, name) {
//     return drivers.filter(names => names === name)

// }

function findMatching (drivers, name) {
    let answer = drivers.filter(element => element.toLowerCase() === name.toLowerCase())
    return answer
} 


function fuzzyMatch (array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }