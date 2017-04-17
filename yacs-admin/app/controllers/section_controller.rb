class SectionController < ApplicationController
  include SectionHelper
  helper :all
  def index
    @sections=Section.all
  end

  def show
    section_id=params[:id]
    search_params={:id => section_id, :show_periods =>''}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @section=Section.find(:all, :params=>search_params).elements[0]

    #find course
    course_params={:id=>@section.course_id}
    @course=Course.find(:all,:params=>course_params).elements[0]
  end

  def search

  end

  def search_results

  end

  def new
    @section=Section.new
    @section.course_id=params[:course_id]
  end
  def edit
    section_id=params[:id]
    search_params={:id => section_id, :show_periods =>''}
    #puts course_id
    #use .elements[0], since .find returns a collection
    @section=Section.find(:all, :params=>search_params).elements[0]
    #find course
    course_params={:id=>@section.course_id}
    @course=Course.find(:all,:params=>course_params).elements[0]
  end

    def create
    @section=Section.create(section_params)

    respond_to do |format|
      if @section.save
        format.html { redirect_to @section, notice: 'Section was successfully created.' }
        format.json { render action: 'show', status: :created, location: @section }
      else
        format.html { render action: 'new' }
        format.json { render json: @section.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @section.update(section_params)
        format.html { redirect_to @section, notice: 'Section was successfully updated.' }
        format.json { render action: 'show', status: :created, location: @section }
      else
        format.html { render action: 'new' }
        format.json { render json: @section.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @section.destroy

    respond_to do |format|
      format.html { redirect_to section_index_path }
      format.json { head :no_content }
    end
  end

  private

  def section_params
    
  end

end
