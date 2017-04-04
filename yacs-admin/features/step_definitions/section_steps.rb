Given /^the following sections exist$/ do |table|
  @sections=Array.new
  table.hashes.each do |row|
    hash={:sections=>@sections}
    @sections.push(row)
    #puts row[:id].to_s
    #puts row.to_json
    ActiveResource::HttpMock.respond_to do |mock|

      mock.post "/api/v5/sections.json",{}, row.to_json, 201
      mock.get"/api/v5/sections.json",{},hash.to_json
      mock.get "/api/v5/sections.json?id=#{row[:id].to_s}",{}, row.to_json
      mock.get "/api/v5/sections/#{row[:id].to_s}.json",{}, row.to_json
      mock.get "/api/v5/sections.json?course_id=#{row[:course_id].to_s}",{}, row.to_json

    end
  end
end