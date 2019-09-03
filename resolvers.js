class User {
  constructor(userID, { username, email }) {
    this.userID = userID;
    this.username = username;
    this.email = email;
  }
}

class Business {
  constructor(busID, { name, address, rating }) {
    this.busID = busID;
    this.name = name;
    this.address = address;
    this.rating = rating;
  }
}

class Review {
  constructor(
    reviewID,
    { user, business, accessibility, dogAccess, otherStuff, freeTextReview }
  ) {
    this.reviewID = reviewID;
    this.user = user;
    this.business = business;
    this.accessibility = accessibility;
    this.dogAccess = dogAccess;
    this.otherStuff = otherStuff;
    this.freeTextReview = freeTextReview;
  }
}

const userDatabase = {};
const reviewDatabase = {};
const businessDatabase = {};

const resolvers = {
  getUser: ({ userID }) => {
    return new User(userID, userDatabase[userID]);
  },
  createUser: ({ input }) => {
    let userID =
      Math.floor(Math.random() * 999) + (1).toString().concat("USER");
    userDatabase[userID] = input;
    return new User(userID, input);
  },
  //the other class resolvers wont work and im not sure if there is an issue with the "input" var or if the databases are incorrect somehow
  //anyway i will ask someone tomorrow.
  getBus: ({ busID }) => {
    return new Business(busID, businessDatabase[busID]);
  },
  createBus: ({ input }) => {
    let busID = Math.floor(Math.random() * 999) + (1).toString().concat("BUS");
    businessDatabase[busID] = input;
    return new Business(busID, input);
  },
  getRev: ({ reviewID }) => {
    return new Review(reviewID, reviewDatabase[reviewID]);
  },
  createRev: ({ input }) => {
    let reviewID =
      Math.floor(Math.random() * 999) + (1).toString().concat("REV");
    reviewDatabase[reviewID] = input;
    return new Review(reviewID, input);
  }
};

export default resolvers;
