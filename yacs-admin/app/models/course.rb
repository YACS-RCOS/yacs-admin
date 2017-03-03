class Course < ActiveResource::Base
  self.site="https://yacs.cs.rpi.edu/api/v5/"
  belongs_to :department
  has_many :sections
end