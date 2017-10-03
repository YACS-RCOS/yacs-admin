class Department < ApplicationRecord 
  self.site="https://yacs.cs.rpi.edu/api/v5"
  belongs_to :school
  has_many :courses

  #attr_accessor :name
  #attr_accessor :code
  #attr_accessor :school_id
end
