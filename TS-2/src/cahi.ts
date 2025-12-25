function addTwo(num: number) {
  return num + 2;
}
// console.log(addTwo(10))
function getUpper(val: string) {
  return val.toUpperCase();
}
// console.log(getUpper("Shohan"))

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Shohan", "shohan@gmail.com", false);

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const heros: string[] = ["Thor", "SpiderMan", "IronMan"];

console.log(
  heros.map((hero) => {
    return `hero is ${hero}`;
  })
);

const User = {
  name: "shohan",
  email: "shohan@gmail.com",
  isActive: false,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "Shohan", isPaid: false });
