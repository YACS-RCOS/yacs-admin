Given /^the following departments exist$/ do |table|

  @departments=Array.new
  table.hashes.each do |row|
    hash={:departments=>@departments}
    @departments.push(row)
    #puts row[:id].to_s
    #puts row.to_json
    ActiveResource::HttpMock.respond_to do |mock|

      mock.post "/api/v5/departments.json",{}, row.to_json, 201
      mock.get"/api/v5/departments.json",{},hash.to_json
      mock.get "/api/v5/departments.json?id=#{row[:id].to_s}",{}, row.to_json
      mock.get "/api/v5/departments/#{row[:id].to_s}.json",{}, row.to_json
      mock.get "/api/v5/departments.json?school_id=#{row[:school_id].to_s}",{}, row.to_json

    end
  end
end