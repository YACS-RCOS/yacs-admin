class SchoolController < ApplicationController
  def index
    schools=School.all
    puts schools
  end
end
