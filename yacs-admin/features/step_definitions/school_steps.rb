Given /^the following schools exist$/ do |table|
  ActiveResource::HttpMock.respond_to do |mock|
      @schools=Array.new
      table.hashes.each do |row|
        hash={:schools=>@schools}
        @schools.push(row)
        #puts row[:id].to_s
        #puts row.to_json
        mock.post "/api/v5/schools.json",{}, row.to_json, 201
        mock.get"/api/v5/schools.json",{},hash.to_json
        mock.get "/api/v5/schools.json?id=#{row[:id].to_s}",{}, row.to_json
        mock.get "/api/v5/schools/#{row[:id].to_s}.json",{}, row.to_json
        mock.delete "/api/v5/schools/#{row[:id].to_s}.json",{}, nil, 200
        mock.put "/api/v5/schools/#{row[:id].to_s}.json",{}, nil, 200
      end
      

    end
  
end

Given /^I have no schools$/ do
  @schools=School.all
  @schools.each do |s|
    School.delete(s.id)
  end
end