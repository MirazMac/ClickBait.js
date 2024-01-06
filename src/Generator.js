export  default class Generator {
  constructor() {
    this.pronouns = {
      object: ["Her", "Him", "Them"],
      possessive: ["Her", "His", "Their"],
      personal: ["She", "He", "They"],
    };

    this.states = [
      "California",
      "Texas",
      "Florida",
      "New York",
      "Pennsylvania",
      "Illinois",
      "Ohio",
      "Georgia",
      "North Carolina",
      "Michigan",
    ];
    this.nouns = [
      "Athlete",
      "Clown",
      "Shovel",
      "Paleo Diet",
      "Doctor",
      "Parent",
      "Cat",
      "Dog",
      "Chicken",
      "Robot",
      "Video Game",
      "Avocado",
      "Plastic Straw",
      "Serial Killer",
      "Telephone Psychic",
    ];
    this.places = [
      "House",
      "Attic",
      "Bank Deposit Box",
      "School",
      "Basement",
      "Workplace",
      "Donut Shop",
      "Apocalypse Bunker",
    ];
    this.whenOptions = [
      "Soon",
      "This Year",
      "Later Today",
      "RIGHT NOW",
      "Next Week",
    ];
  }

  _getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getDomain () {
    let domain = this._getRandomElement(this.states) + this._getRandomElement(this.nouns);
    return domain.replaceAll(' ', '').toLowerCase() + '.com';
  }

  getHeadline() {
    const clickbaitType = Math.floor(Math.random() * 10) + 1; // Increase to accommodate new types

    switch (clickbaitType) {
      case 1:
        return `${this._getRandomElement(['Are Millennials', 'Is Gen-Z'])} Killing the ${this._getRandomElement(
          this.nouns,
        )} Industry?`;
      case 2:
        return `Without This ${this._getRandomElement(this.nouns)}, ${
          this._getRandomElement(this.nouns) + "s"
        } Could Kill You ${this._getRandomElement(this.whenOptions)}`;
      case 3:
        return `Big Companies Hate ${this._getRandomElement(
          this.pronouns.object,
        )}! See How This ${this._getRandomElement(
          this.states,
        )} ${this._getRandomElement(
          this.nouns,
        )} Invented a Cheaper ${this._getRandomElement(this.nouns)}`;
      case 4:
        return `You Won't Believe What This ${this._getRandomElement(
          this.states,
        )} ${this._getRandomElement(
          this.nouns,
        )} Found in ${this._getRandomElement(
          this.pronouns.possessive,
        )} ${this._getRandomElement(this.places)}`;
      case 5:
        return `What ${
          this._getRandomElement(this.nouns) + "s"
        } Don't Want You To Know About ${
          this._getRandomElement(this.nouns) + "s"
        }`;
      case 6:
        return `${
          Math.floor(Math.random() * 9) + 7
        } Gift Ideas to Give Your ${this._getRandomElement(
          this.nouns,
        )} From ${this._getRandomElement(this.states)}`;
      case 7:
        return `${Math.floor(Math.random() * 17) + 3} Reasons Why ${
          this._getRandomElement(this.nouns) + "s"
        } Are More Interesting Than You Think`;
      case 8:
        const pronoun = this._getRandomElement(this.pronouns.personal);

        let possesive = 'Their';

        if (pronoun === 'She') {
          possesive = 'Her';
        } else if (pronoun === 'He') {
          possesive = 'His';
        }


        return `This ${this._getRandomElement(
          this.states,
        )} ${this._getRandomElement(
          this.nouns,
        )} Didn't Think Robots Would Take ${possesive} Job. ${pronoun} ${pronoun === 'They' ? 'Were' : 'Was'} Wrong.`;
      case 9:
        return `Discover the Secret of How ${this._getRandomElement(
          this.nouns,
        )} Became a Millionaire Overnight!`;
      case 10:
        return `Scientists Warn: ${this._getRandomElement(
          this.nouns,
        )} Could Be the Key to Human Extinction!`;
      default:
        return `Unbelievable! ${this._getRandomElement(
          this.nouns,
        )} Reveals Shocking Truth About ${this._getRandomElement(
          this.whenOptions,
        )}!`;
    }
  }
}
