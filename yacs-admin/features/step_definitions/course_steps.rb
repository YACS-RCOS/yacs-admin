require 'json'

Given /^I have courses named (.+)$/ do |names|
  @courses=Array.new
  names.split(', ').each_with_index do |name,i|
    #Mock courses given these names
    course={:course =>{:id =>i,:name =>name,:number=>420,:min_credits=>4,:max_credits=>4,:description=>"test",:department_id=>69}}.to_json
    #course={:course =>{:id =>i,:name =>name,:number=>nil,:min_credits=>:nil,:max_credits=>:nil,:description=>:nil,:department_id=>:nil}}
    puts course
    @courses.push(JSON.parse(course))
    #puts @courses
    #puts @courses.to_json
    var={:courses=>@courses}
    #puts var.to_json

    section={:id=>148,:name=>"00",:crn=>42069,:seats=>0,:seats_taken=>0,:instructors=>[],:num_periods=>0,:course_id=>i,:conflicts=>[]}.to_json

    ActiveResource::HttpMock.respond_to do |mock|
      mock.post "/api/v5/courses.json",{}, course, 201
      mock.get "/api/v5/courses.json?id=#{i}",{}, course
      mock.get"/api/v5/courses.json",{},var.to_json
      mock.get "/api/v5/courses.json?name=#{name}",{}, course
      mock.get "/api/v5/courses/#{i}.json",{}, course
      mock.get "/api/v5/sections.json?course_id=#{i}",{}, section

    end
  end
end

Given /^Course (.*) with name (.*) is in department (.*)$/ do |i, name, dept_id|
  course={:course =>{:id =>i,:name =>name,:number=>420,:min_credits=>4,:max_credits=>4,:description=>"test",:department_id=>dept_id}}.to_json
  department={:department=>{:id=>i,:code=>"TEST",:name=>"test",:school_id=>0}}
  section={:id=>148,:name=>"00",:crn=>42069,:seats=>0,:seats_taken=>0,:instructors=>[],:num_periods=>0,:course_id=>i,:conflicts=>[]}.to_json
  @courses=Array.new
  @courses.push(JSON.parse(course))
  var={:courses=>@courses}

  ActiveResource::HttpMock.respond_to do |mock|
      mock.post "/api/v5/courses.json",{}, course, 201
      mock.post "/api/v5/departments.json",{}, department, 201
      mock.post "/api/v5/sections.json",{}, section, 201

      mock.get "/api/v5/courses.json?id=#{i}",{}, course
      mock.get"/api/v5/courses.json",{},var.to_json
      mock.get "/api/v5/courses.json?name=#{name}",{}, course
      mock.get "/api/v5/courses/#{i}.json",{}, course
      mock.get "/api/v5/sections.json?course_id=#{i}",{}, section
      mock.get "/api/v5/courses.json?department_id=#{dept_id}",{}, course
      mock.get "/api/v5/departments/#{dept_id}.json",{}, department
      mock.get "/api/v5/departments.json?id=#{dept_id}",{}, department

    end
end

'''Given /^Course (.*) with name (.*) has a section with ID (.*)$/ do |i, name, section_id|
  course={:course =>{:id =>i,:name =>name,:number=>420,:min_credits=>4,:max_credits=>4,:description=>"test",:department_id=>69}}.to_json
  section={:id=>section_id,:name=>"00",:crn=>42069,:seats=>0,:seats_taken=>0,:instructors=>[],:num_periods=>0,:course_id=>i,:conflicts=>[]}.to_json
  @courses=Array.new
  @courses.push(JSON.parse(course))
  var={:courses=>@courses}
  ActiveResource::HttpMock.respond_to do |mock|
      mock.post "/api/v5/courses.json",{}, course, 201
      mock.post "/api/v5/sections.json",{}, section, 201
      mock.get "/api/v5/courses.json?id=#{i}",{}, course
      mock.get"/api/v5/courses.json",{},var.to_json
      mock.get "/api/v5/courses.json?name=#{name}",{}, course
      mock.get "/api/v5/courses/#{i}.json",{}, course
      mock.get "/api/v5/sections.json?course_id=#{i}",{}, section
      mock.get "/api/v5/sections.json?id=#{section_id}",{}, section
      mock.get "/api/v5/sections/#{section_id}.json",{}, section

    end
end'''
Given /^Course (.*) with name (.*) in department (.*) has a section with ID (.*)$/ do |i, name, dept_id, section_id|
  course={:course =>{:id =>i,:name =>name,:number=>420,:min_credits=>4,:max_credits=>4,:description=>"test",:department_id=>69}}.to_json
  section={:id=>section_id,:name=>"00",:crn=>42069,:seats=>0,:seats_taken=>0,:instructors=>[],:num_periods=>0,:course_id=>i,:conflicts=>[]}.to_json
  department={:department=>{:id=>i,:code=>"TEST",:name=>"test",:school_id=>0}}  
  @courses=Array.new
  @sections=Array.new
  @departments=Array.new

  @courses.push(JSON.parse(course))
  puts JSON.parse(section)
  @sections.push(JSON.parse(section))
  puts department
  @departments.push(department.to_json)

  var={:courses=>@courses}
  section_obj={:sections=>@sections}
  dept_obj={:departments=>@departments}

  ActiveResource::HttpMock.respond_to do |mock|
      mock.post "/api/v5/courses.json",{}, course, 201
      mock.post "/api/v5/sections.json",{}, section, 201
      mock.post "/api/v5/departments.json",{}, department, 201

      mock.get "/api/v5/courses.json?id=#{i}",{}, course
      mock.get"/api/v5/courses.json",{},var.to_json
      mock.get"/api/v5/sections.json",{},section_obj.to_json
      mock.get"/api/v5/departments.json",{},dept_obj.to_json

      mock.get "/api/v5/courses.json?name=#{name}",{}, course
      mock.get "/api/v5/courses/#{i}.json",{}, course
      mock.get "/api/v5/sections.json?course_id=#{i}",{}, section
      mock.get "/api/v5/sections.json?id=#{section_id}",{}, section
      mock.get "/api/v5/sections/#{section_id}.json",{}, section
      mock.get "/api/v5/departments/#{dept_id}.json",{}, department
      mock.get "/api/v5/departments.json?id=#{dept_id}",{}, department
    end
end

Given /^the following courses exist$/ do |table|
  @courses=Array.new
  table.hashes.each do |row|
    hash={:courses=>@courses}
    @courses.push(row)
    #puts row[:id].to_s
    #puts row.to_json
    ActiveResource::HttpMock.respond_to do |mock|

      mock.post "/api/v5/courses.json",{}, row.to_json, 201
      mock.get"/api/v5/courses.json",{},hash.to_json
      mock.get "/api/v5/courses.json?id=#{row[:id].to_s}",{}, row.to_json
      mock.get "/api/v5/courses/#{row[:id].to_s}.json",{}, row.to_json
      mock.get "/api/v5/courses.json?search=#{row[:id].to_s}",{'Accept'=> 'application/json'}, row.to_json
      mock.get "/api/v5/courses.json?search=#{row[:name].to_s}",{'Accept'=> 'application/json'}, row.to_json
      mock.get "/api/v5/courses.json?search=",JSON.parse({'Accept'=> 'application/json'}.to_json), nil

    end
  end
  #puts @courses
  hash={:courses=>@courses}
  @courses.each do |course|
    #mock.post "/api/v5/courses.json",{}, course, 201

  end
end