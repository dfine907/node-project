const { readFile, writeFile } = require('fs')
//with sync you need call back of course.

console.log('START')

readFile('./content/first.txt', 'utf8', (error, result) => {
  if (error) {
    console.log('Error!!:', error)
    return
  }
  const first = result

  readFile('./content/second.txt', 'utf8', (error, result) => {
    if (error) {
      console.log('Error!!:', error)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result ya'll: ${first} and ${second}`,
      (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('Starting next task')
