function myFunc(){
   const name="jofin"
   function displayName(){
      console.log(name);
   }
  return displayName
}
const func=myFunc()
console.log(func());