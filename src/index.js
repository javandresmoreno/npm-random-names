const names = [
  "Javier",
  "Francy",
  "Gloria",
  "Andrés",
  "Magnolia",
  "Juan José",
  "Juana",
  "Nicolás",
  "Jeysson",
  "Sandra",
  "Andrea",
  "Wylmar",
  "Arnulfo",
  "Bertha",
  "Valentina",
  "Mathyas",
];

const randomMsg = () => {
  const message = names[Math.floor(Math.random() * names.length)];
  console.log(message);
};

module.exports = { randomMsg };
