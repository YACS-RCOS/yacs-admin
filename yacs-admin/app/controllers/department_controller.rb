class DepartmentController < ApplicationController
  def index
    @departments=Department.all
  end

  def show
    dept_id=params[:id]
    search_params={:id => dept_id}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @department=Department.find(:all, :params=>search_params).elements[0]
    #puts @course == nil

    #Find courses
    course_params={:department_id => dept_id}
    @courses=Course.find(:all,:params=>course_params).elements

    #Find school
    school_params={:id=>@department.school_id}
    @school=School.find(:all,:params=>school_params).elements[0]
  end

  def search

  end

  def search_results

  end

  def new
    @department=Department.new
    @department.school_id=params[:school_id]

  end

  def edit
    dept_id=params[:id]
    search_params={:id => dept_id}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @department=Department.find(:all, :params=>search_params).elements[0]
  end

end
