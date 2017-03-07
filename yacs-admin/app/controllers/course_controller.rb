class CourseController < ApplicationController
  def index
    @courses=Course.all
    #puts courses
  end

  def show
    course_id=params[:id]
    search_params={:id => course_id}
    puts course_id
    #use .elements[0], since .find returns a collection
    @course=Course.find(:all, :params=>search_params).elements[0]
    #puts @course == nil

    section_params={:course_id => course_id}
    @sections=Section.find(:all,:params=>section_params).elements

    #Find department
    department_params={:id=>@course.department_id}
    @department=Department.find(:all,:params=>department_params).elements[0]
  end

  #private

  #def course_params
  #  params.require(:id).permit(:name, :number,:min_credits,:max_credits,:description,:department_id)
  #end
end
