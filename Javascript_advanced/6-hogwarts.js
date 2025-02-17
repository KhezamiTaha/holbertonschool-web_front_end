// Class definition for studentHogwarts
class studentHogwarts {
    constructor() {
        // Private variables
        let privateScore = 0;
        let name = null;

        // Private method
        const changeScoreBy = (points) => {
            privateScore += points;
        };

        // Public methods
        this.setName = function (newName) {
            name = newName;
        };

        this.rewardStudent = function () {
            changeScoreBy(1);
        };

        this.penalizeStudent = function () {
            changeScoreBy(-1);
        };

        this.getScore = function () {
            return `${name}: ${privateScore}`;
        };
    }
}

// Create an instance for Harry
const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4

// Create an instance for Draco
const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2
