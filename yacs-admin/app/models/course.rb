class Course < ActiveResource::Base
  self.site="https://127.0.0.1/api/v5/"
  belongs_to :department
  has_many :sections

  attr_accessor :name
  attr_accessor :number
  attr_accessor :min_credits
  attr_accessor :max_credits
  attr_accessor :description
  attr_accessor :department_id


end