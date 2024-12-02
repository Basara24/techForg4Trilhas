"use strict";
class VoteSystem {
    constructor() {
        this.votes = {};
    }
}
class Election extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        const sortedVotes = Object.entries(this.votes)
            .sort(([, a], [, b]) => b - a)
            .reduce((acc, [candidate, votes]) => {
            acc[candidate] = votes;
            return acc;
        }, {});
        return sortedVotes;
    }
}
const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log(election.getResults());
const poll = new Poll();
poll.voteFor("Chocolate");
poll.voteFor("Vanilla");
poll.voteFor("Chocolate");
console.log(poll.getResults());
