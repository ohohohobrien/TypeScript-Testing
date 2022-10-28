enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Sean",
    age: 29,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};

console.log(person.role);

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log("AUTHOR!")
}