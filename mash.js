
// function mash(){
//     return "house";
// }
// console.log(mash());

// function getHome() {
    
//   let homes =  ["Mansion","Apartment","Shack","House"]; 

//    return homes [Math.floor(Math.random() * homes.length -1 + 1)];
   
// }    
//    console.log (getHome());

//    function getChildrenCount() {
//     return Math.floor(Math.random()* 100 +1 )
//    }
//    function mash() {
//       return "You will live in a " + getHome() + ", and you will have"  + getChildrenCount() + "kids!"
//    }
//    console.log (mash());

function getHome() {
    
let homes =  ["Mansion","Apartment","Shack","House"]; 
homes.push (process.argv[2]);
homes.push ("next to a hill");
  
     return homes [Math.floor(Math.random() * homes.length -1 + 1)];
     
  }    
     console.log (getHome());
  
     function getChildrenCount() {
      return Math.floor(Math.random()* 100 +1 )
     }
     function mash() {
        return "You will live in a " + getHome() + ", and you will have "  + getChildrenCount() + " kids!"
     }
     console.log (mash());

