interface Iuser {
  name: string;
  age: number;
}

interface UserwithRole extends Iuser {
    role : "admin" | "user"
}


const user1 : UserwithRole ={
    name : "king Shohan",
    age: 20,
    role: "admin"
}

console.log(user1)