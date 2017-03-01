class SectionController < ApplicationController
  def index
    @sections=Section.all
  end
end
