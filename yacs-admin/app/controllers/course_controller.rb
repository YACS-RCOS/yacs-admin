class CourseController < ApplicationController
  def index
    @courses=Course.all
    #puts courses
  end

  def show
    puts params
    course_id=params[:id]
    search_params={:id => course_id}
    puts search_params
    #puts course_id
    #use .elements[0], since .find returns a collection
    #This line - html
    #@course=Course.find(:all, :params=>search_params).elements[0]
    #This line -testing
    @course=Course.find(course_id)

    puts @course
    #section_params={:course_id => course_id}
    #puts section_params
    #puts Section.find(:all,:params=>section_params).elements
    #@sections=Section.find(:all,:params=>section_params).elements
    #puts @sections
    #Find department
    #department_params={:id=>@course.department_id}
    #@department=Department.find(:all,:params=>department_params).elements[0]
  end

  def search
    @query=params[:query] # This global is for the view
    #puts @query
    if params[:query] != "" and params[:query] !=nil then
      puts @query
      #puts @query==''
      #puts @query==nil
      search_params={:search => @query}
      puts search_params[:search]
      #Search courses
      puts Course.find(:all, :params=>search_params)
      @courses=Course.find(:all, :params=>search_params).elements
    else
      @courses=''
    end
  end

  def new
    @course=Course.new
  end

  #private

  #def course_params
  #  params.require(:id).permit(:name, :number,:min_credits,:max_credits,:description,:department_id)
  #end
end
