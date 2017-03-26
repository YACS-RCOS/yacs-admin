def path_to(page_name)
  case page_name
    when /the_homepage/
      root_path
    when /the list of courses/
      course_index_path

    else
      raise "Can't find mapping from \"#{page_name}\" to a path."
  end
end