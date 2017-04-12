class School < ActiveResource::Base
  self.site="https://yacs.cs.rpi.edu/api/v5/"
  has_many :departments

  attr_accessor :name

end