let isHalwa = true;
function waitInQueue(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(isHalwa){
        resolve("But 1 kg Halwa");
      }
      else{
        reject("No Halwa");
      }
    },1000)
  })
}
async function buyHalwa(){
  try{
    let result = await waitInQueue();
    console.log(result);
  }
  catch(error){
    console.log("Go Home"); 
  }
}

buyHalwa();