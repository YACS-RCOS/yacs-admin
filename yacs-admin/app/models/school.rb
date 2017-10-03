class School < ApplicationRecord 
  self.site="https://yacs.cs.rpi.edu/api/v5"
  #ActiveResource::Base.include_root_in_json = false

  has_many :departments
  #attr_accessor :name
  #self.format=:json
end
