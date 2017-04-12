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
  end
  def edit

  end

end
