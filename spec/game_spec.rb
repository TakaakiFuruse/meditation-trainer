  require 'spec_helper'

  describe Game do
    let(:u1){User.create(name: "test", passowrd_digest: "test")}
    let(:g1){Game.create()}
    let(:act1){Action.create(name: "act1", time: 1.11)}

    it 'has association with action' do
      g1.actions << act1
      u1.games << g1
      expect(act1.user_id).to eq(1)
    end

end
