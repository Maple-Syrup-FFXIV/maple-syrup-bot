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
          return [false, i]
        }
      }
      return [true, 0]
    }

    let length_args = args.length;

    if (length_args != 1){
      message.channel.send("Not enough or too many arguments were given, here is a valid example : $isPrime __number__ ")
    }else{
      let primeCheck = isPrime(args[0]);
      
      if(!primeCheck[0]){
        message.channel.send(args[0] + " is not a prime number! Its smallest factor is " + primeCheck[1] + '.');
      } else{
        message.channel.send(args[0] + " is not a prime number.");
      }



    }

  }
}