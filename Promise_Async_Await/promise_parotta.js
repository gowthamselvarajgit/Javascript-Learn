let isParotta = true;
function inQueue(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(isParotta){
        resolve("Buy 4 Parotta");
      }
      else{
        reject("No Parotta");
      }
    },1000)
  })
}
function buyParotta(){
  inQueue().then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Go Home");
  });
}

buyParotta();