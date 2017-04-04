Given /^the following schools exist$/ do |table|
  @schools=Array.new
  table.hashes.each do |row|
    hash={:schools=>@schools}
    @schools.push(row)
    #puts row[:id].to_s
    #puts row.to_json
    ActiveResource::HttpMock.respond_to do |mock|

      mock.post "/api/v5/schools.json",{}, row.to_json, 201
      mock.get"/api/v5/schools.json",{},hash.to_json
      mock.get "/api/v5/schools.json?id=#{row[:id].to_s}",{}, row.to_json
      mock.get "/api/v5/schools/#{row[:id].to_s}.json",{}, row.to_json

    end
  end
end