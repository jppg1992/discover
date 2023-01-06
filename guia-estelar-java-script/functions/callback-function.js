//callback function

function sayMyName(name){
  name()
}

sayMyName(
  ()=>{
    console.log(`callback function é uma função que recebe como param outra função`)
  }
)