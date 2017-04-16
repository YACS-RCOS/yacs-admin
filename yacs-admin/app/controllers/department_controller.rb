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


    def create
    @department=Department.create(department_params)

    respond_to do |format|
      if @department.save
        format.html { redirect_to @department, notice: 'Department was successfully created.' }
        format.json { render action: 'show', status: :created, location: @department }
      else
        format.html { render action: 'new' }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @department.update(department_params)
        format.html { redirect_to @department, notice: 'Department was successfully updated.' }
        format.json { render action: 'show', status: :created, location: @department }
      else
        format.html { render action: 'new' }
        format.json { render json: @department.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @department.destroy

    respond_to do |format|
      format.html { redirect_to department_index_path }
      format.json { head :no_content }
    end
  end

end
