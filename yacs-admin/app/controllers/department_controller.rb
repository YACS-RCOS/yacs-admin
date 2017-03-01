class DepartmentController < ApplicationController
  def index
    @departments=Department.all
  end
end
