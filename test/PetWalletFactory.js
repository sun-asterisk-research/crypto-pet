const PetWalletFactory = artifacts.require('PetWalletFactory');
const truffleAssert = require('truffle-assertions');

contract('PetWalletFactory', async ([_, owner, owner1]) => {
  describe('Initial balance', () => {
    let petWalletFactory;
    let allPets;

    before(async () => {
      petWalletFactory = await PetWalletFactory.new({ from: owner });
    });

    it('Create new pet', async () => {
      await petWalletFactory.create(0, 5, 5, 'saving', { from: owner });
      allPets = await petWalletFactory.getAllPetAddressOf(owner);
      assert(allPets.length > 0, 'pet wallets must be increase after creating');
    });

    it('Get pets by owner', async () => {
      allPets = await petWalletFactory.getAllPetAddressOf(owner1);
      assert.strictEqual(allPets.length, 0);
    });
  });
});
