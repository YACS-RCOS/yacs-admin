class CourseController < ApplicationController
  def index
    @courses=Course.all
    #puts courses
  end
end
