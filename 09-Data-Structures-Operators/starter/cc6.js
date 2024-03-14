//6.1 There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent
    ? console.log(`${books[i].title} provides online content.`)
    : console.log(
        `${books[i].title} provides no data about its online content.`
      );
}
