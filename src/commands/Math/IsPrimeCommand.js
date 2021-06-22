const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class IsPrimeCommand extends BaseCommand {
  constructor() {
    super('isPrime', 'Math', []);
  }

  run(client, message, args) {
    

    function isPrime(x){

      let uLimit = (Math.ceil(Math.sqrt(x)));
      for(let i = 2; i < uLimit; i++){
        let div = (x/i) % 1;
        if(div == 0){
          return false
        }
      }
      return true
    }

    let length_args = args.length;

    if (length_args != 1){
      message.channel.send("Not enough arguments were given, here is a valid example : $isPrime __number__ ")
    }else{
      let primeCheck = !isPrime(args[0]);
      let changeMessage = ''

      if(!isPrime(args[0])){
        changeMessage = "not "
      }

      let msg = args[0] + " is " + changeMessage + "a prime number.";
      message.channel.send(msg)
    }

  }
}