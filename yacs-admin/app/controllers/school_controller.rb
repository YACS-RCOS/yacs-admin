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
    @school=School.new(:name => "")
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
    def create
    @school=School.new(school_params)
    #puts @school.new?
    #puts @school.save
    respond_to do |format|
      if @school.save
        format.html { redirect_to @school, notice: 'School was successfully created.' }
        format.json { render action: 'show', status: :created, location: @school }
      else
        format.html { render action: 'new' }
        format.json { render json: @school.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @school.update(school_params)
        format.html { redirect_to @school, notice: 'School was successfully updated.' }
        format.json { render action: 'show', status: :created, location: @school }
      else
        format.html { render action: 'new' }
        format.json { render json: @school.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @school.destroy

    respond_to do |format|
      format.html { redirect_to school_index_path }
      format.json { head :no_content }
    end
  end

  private
    def school_params
      params.require(:school).permit(:name)
    end
end
