class SchoolController < ApplicationController
  def index
    @schools=School.all
  end
end
