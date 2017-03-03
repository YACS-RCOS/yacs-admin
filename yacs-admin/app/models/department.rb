class Department < ActiveResource::Base
  self.site="https://yacs.cs.rpi.edu/api/v5/"
  belongs_to :school
  has_many :courses
end