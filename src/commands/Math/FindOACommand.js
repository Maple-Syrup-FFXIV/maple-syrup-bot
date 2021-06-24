const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FindOACommand extends BaseCommand {
  constructor() {
    super('findOA', 'Math', []);
  }

  run(client, message, args) {
    function findOA(upper, theta){
      let p = 0;
      let q = 1;

      let best_approx = [p,q];
      let diff = Math.abs(theta - p/q);

      while(q <= upper){
        let approx = p/q;
        if ( (Math.abs(theta - approx) < 1/(2*q**2)) && (Math.abs(theta - approx)) < diff){
          best_approx = [p,q];
          diff = Math.abs(theta - p/q);
        }
        else if (approx > theta){
          q+=1;
        }
        else if (approx < theta){
          p+=1;
        }
        else{
          return [p,q];
        }

      }

      return best_approx;

    }

    let theta = args[0];
    let upper = args[1];

    let OA = findOA(upper, theta);
    let diff = Math.abs(theta - OA[0]/OA[1]);

    message.channel.send("The best approximation of the first kind of " + theta + " is " + OA[0] + "/" + OA[1] + ". It has a difference of " + diff);
  }
}
