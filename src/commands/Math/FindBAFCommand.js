const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FindBAFCommand extends BaseCommand {
  constructor() {
    super('findBAF', 'Math', []);
  }

  run(client, message, args) {
    

    function findBAF(upper, theta){
      let p = 0;
      let q = 1;

      let best_approx = [p,q];
      let diff = Math.abs(theta - p/q);

      while(q <= upper){
        let approx = p/q;

        if (Math.abs(theta - approx) < diff ){
          best_approx = [p,q];
          diff = Math.abs(theta - p/q);
        }
        else if (approx >= theta){
          q+=1;
        }
        else{
          p+=1;
        }

      }

      return best_approx;

    }

    let theta = args[0];
    let upper = args[1];

    let BAF = findBAF(upper, theta);
    let diff = Math.abs(theta - BAF[0]/BAF[1]);

    message.channel.send("The best approximation of the first kind of " + theta + " is " + BAF[0] + "/" + BAF[1] + ". It has a difference of " + diff);



  }
}
