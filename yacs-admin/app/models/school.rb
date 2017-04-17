class School < ActiveResource::Base
  self.site="https://127.0.0.1/api/v5/"
  has_many :departments

  attr_accessor :name

end