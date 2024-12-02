abstract class VoteSystem {
    protected votes: Record<string, number>;

    constructor() {
        this.votes = {};
    }

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        const sortedVotes = Object.entries(this.votes)
            .sort(([, a], [, b]) => b - a)
            .reduce((acc, [candidate, votes]) => {
                acc[candidate] = votes;
                return acc;
            }, {} as Record<string, number>);
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
