function scuberGreetingForFeet(someNum) {

if (someNum === 199 || someNum=== 400){
    
  return 'This one is on me!'

  }else if (someNum === 2000 || someNum=== 2001){

     return 'I will gladly take your thirty bucks.'

  }else if (someNum === 2500 || someNum=== 2501) {
    
    return 'No can do.'
  }
}

// function ternaryCheckCity(){
function ternaryCheckCity(city) {
  if (city === 'NYC'){
    return ('Ok, sounds good.')
  }else if (city != 'NYC') {
    return ('No go.')
  }
}


// function switchOnCharmFromTip()

function switchOnCharmFromTip(tip) {

  // switch (tip) {
  //   case 'generous': 'Thank you so much.'
  //   break;
  //   case 'not as generous' : 'Thank you.'
  //   break;
  //   default: 'Bye.'
  //   break;
  // }
  if (tip === 'generous'){
    return ('Thank you so much.')
  }else if (tip === 'not as generous') {
    return ('Thank you.')
  }else if (tip === 'thanks for everything') {
    return ('Bye.')
  }
}
