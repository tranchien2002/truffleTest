const Voting = artifacts.require('./Voting.sol');

contract('voting', function(account){
    let voting;
    before('Set up contract for each test', async () => {
        voting = await Voting.new(['Dog', 'Cat', 'Duck']); 
    })

    it('can vote for candidates', async () => {
        await voting.voteForCandidate('Dog');
        await voting.voteForCandidate('Dog');
        await voting.voteForCandidate('Cat');
        await voting.voteForCandidate('Duck');
        await voting.voteForCandidate('Duck');
        let countVote = await voting.votesReceived.call('Dog');
        assert.equal(countVote, 2);
        console.log(account[0]);
    })

    it('validate candidates', async () => {
        assert.isTrue(await voting.validCandidate("Dog"));
        assert.isFalse(await voting.validCandidate("Chicken"));
    })

    it('get total vote for candidates', async () => {
        assert.equal(await voting.totalVotesFor('Cat'), 1);
        assert.equal(await voting.totalVotesFor('Duck'), 2)
    })
})