require 'json'

Given /^I have courses named (.+)$/ do |names|
  @courses=Array.new
  names.split(', ').each_with_index do |name,i|
    #Mock courses given these names
    @course={:course =>{:id =>i,:name =>name,:number=>420,:min_credits=>4,:max_credits=>4,:description=>"test",:department_id=>69}}.to_json
    #course={:course =>{:id =>i,:name =>name,:number=>nil,:min_credits=>:nil,:max_credits=>:nil,:description=>:nil,:department_id=>:nil}}
    puts @course
    @courses.push(JSON.parse(@course))
    #puts @courses
    #puts @courses.to_json
    var={:courses=>@courses}
    #puts var.to_json
    ActiveResource::HttpMock.respond_to do |mock|
      mock.post "/api/v5/courses.json",{}, @course, 201
      mock.get "/api/v5/courses.json?id=#{i}",{}, @course
      mock.get"/api/v5/courses.json",{},var.to_json
    end
  end
end