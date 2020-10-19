const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = question => {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    })
  })
}

exports.getAnswers = questions => {
  return new Promise(async resolve => {
    let answers = [];
    for (const question of questions) {
      let answer = await ask(question);
      answers.push(answer);
    }
    rl.close();
    resolve(answers);
  })
}