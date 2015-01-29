class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :actions
  belongs_to :user
end
