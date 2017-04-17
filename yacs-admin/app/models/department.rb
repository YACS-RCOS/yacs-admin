class Department < ActiveResource::Base
  self.site="https://127.0.0.1/api/v5/"
  belongs_to :school
  has_many :courses

  attr_accessor :name
  attr_accessor :code
  attr_accessor :school_id
end