module SectionHelper

  def day_to_string(day)
    case day
    when 0
      return "Sunday"
    when 1
      return "Monday"
    when 2
      return "Tuesday"
    when 3
      return "Wednesday"
    when 4
      return "Thursday"
    when 5
      return "Friday"
    when 6
      return "Saturday"
    end
  end

  def format_time(time)
    time_string=time.to_s
    hour=''
    minute=''
    if time_string.length == 3 then
      hour=time_string[0,1]
      minute=time_string[1,2]
    else
      hour=time_string[0,2]
      minute=time_string[2,2]
    end
    
    suffix="AM"
    if hour.to_i > 12
      hour=((hour.to_i)-12).to_s
      suffix="PM"
    elsif hour.to_i == 12
      suffix="PM"
    end

    return hour+":"+minute+" "+suffix
  end
end
