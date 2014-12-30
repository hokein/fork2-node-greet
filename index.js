function greet(name, drunk) {
  if (drunk)
    return "hello " + name + ", you look sexy today";
  return "hello, " + name;
}

module.exports = greet;
