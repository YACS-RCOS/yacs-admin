require 'json'

def path_to(page_name)
  case page_name
    when /the_homepage/
      root_path
    when /the list of courses/
      course_index_path

    when /^the course page for (.*)$/
      puts $1
      params_hash={:id=>($1)}
      puts params_hash
      #puts Course.find(:all).elements[0]
      #puts course_path(JSON.parse(Course.find(:all, :params=>{:id=>($1)})))
      puts course_path(Course.find($1))

      
      course_path(Course.find($1))

    else
      raise "Can't find mapping from \"#{page_name}\" to a path."
  end
end