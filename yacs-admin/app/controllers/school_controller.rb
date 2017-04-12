class SchoolController < ApplicationController
  def index
    @schools=School.all
  end

  def show
    school_id=params[:id]
    search_params={:id => school_id}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @school=School.find(:all, :params=>search_params).elements[0]
    #puts @course == nil

    #Find departments
    dept_params={:school_id => school_id}
    @departments=Department.find(:all,:params=>dept_params).elements
  end

  def search

  end

  def search_results

  end

  def new
    @school=School.new
  end
  def edit
    school_id=params[:id]
    search_params={:id => school_id}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @school=School.find(:all, :params=>search_params).elements[0]

    dept_params={:school_id => school_id}
    @departments=Department.find(:all,:params=>dept_params).elements
 
  end

end
