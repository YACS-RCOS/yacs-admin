Feature: Manage Schools
  In order to organize departments
  As an administrator
  I want to create and manage schools

Scenario: Schools List
  Given the following schools exist
  |id|name|
  |0|School of Science|
  |1|School of Engineering|
  |2|School of Humanities, Arts, and Social Sciences|
  When I go to the list of schools
  Then I should see "School of Science"
  And I should see "School of Engineering"
  And I should see "School of Humanities, Arts, and Social Sciences"

Scenario: Show Schools
  Given the following schools exist
    |id|name|
    |0|School of Science|
    |1|School of Engineering|
    |2|School of Humanities, Arts, and Social Sciences|
  When I go to the school page for 0
  Then I should see "School of Science"


Scenario: Create School
 Given the following schools exist
    |id|name|
    |0|School of Science|
    |1|School of Engineering|
    |2|School of Humanities, Arts, and Social Sciences|
  And I am on the list of schools
  When I follow "New School"
  And I fill in "Name" with "School of Business"
  And I press "Submit"
  And I follow "Back to all schools"
  Then I should see "School of Business" 
