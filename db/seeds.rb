User.create(name: "test", password: "test", password_confirmation: "test")
Game.create()
Action.create(name: "act1", time: 1.11)

Game.find(1).actions << Action.find(1)
User.find(1).games << Game.find(1)
