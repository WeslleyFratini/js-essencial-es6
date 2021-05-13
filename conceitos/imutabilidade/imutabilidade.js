const user = {
  name: "Weslley",
  lastName: "Fratini",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullname: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
