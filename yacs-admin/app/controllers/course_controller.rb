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
    @course=Course.find(:all, :params=>search_params).elements[0]
    #This line -testing
    #@course=Course.find(course_id)

    puts @course
    section_params={:course_id => course_id}
    #puts section_params
    #puts Section.find(:all,:params=>section_params).elements
    @sections=Section.find(:all,:params=>section_params).elements
    #puts @sections
    #Find department
    department_params={:id=>@course.department_id}
    @department=Department.find(:all,:params=>department_params).elements[0]
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
    dept_id=params[:department_id]
    @course=Course.new(:name=>"",:number=>"",:min_credits=>0,:max_credits=>0, :description=>'',:department_id=>dept_id)
    #department_params={:id=>params[:department_id]}
    #@department=Department.find(:all,:params=>department_params).elements[0]

  end

  def create
    @course=Course.create(course_params)

    respond_to do |format|
      if @course.save
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render action: 'show', status: :created, location: @course }
      else
        format.html { render action: 'new' }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @course.update(course_params)
        format.html { redirect_to @course, notice: 'Course was successfully updated.' }
        format.json { render action: 'show', status: :created, location: @course }
      else
        format.html { render action: 'new' }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @course.destroy

    respond_to do |format|
      format.html { redirect_to course_index_path }
      format.json { head :no_content }
    end
  end

  def edit
    course_id=params[:id]
    search_params={:id => course_id}
    @course=Course.find(:all, :params=>search_params).elements[0]
  
    department_params={:id=>@course.department_id}
    @department=Department.find(:all,:params=>department_params).elements[0]

  end

  private

  def course_params
    params.require(:course).permit(:name, :number,:min_credits,:max_credits,:description,:department_id)
  end
end
