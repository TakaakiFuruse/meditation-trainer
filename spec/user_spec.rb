  require 'spec_helper'

  describe User do
    let(:u1){User.create(name: "test", passowrd_digest: "test")}
    let(:g1){Game.create()}
    let(:act1){Action.create(name: "act1", time: 1.11)}

    it 'has association with game' do
      u1.games << g1
      expect(g1.user_id ).to eq(1)
    end


end
