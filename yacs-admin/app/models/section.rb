class Section < ActiveResource::Base
  
  self.site="https://yacs.cs.rpi.edu/api/v5/"
  belongs_to :course
  attr_accessor :name
  attr_accessor :crn
  attr_accessor :seats
  attr_accessor :seats_taken
  attr_accessor :instructors
  attr_accessor :num_periods
  attr_accessor :course_id

end