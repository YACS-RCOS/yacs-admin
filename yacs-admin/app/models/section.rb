class Section < ActiveResource::Base
  self.site="https://yacs.cs.rpi.edu/api/v5/"
  belongs_to :course
end