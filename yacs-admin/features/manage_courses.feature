Feature: Manage Courses
  In order to keep a course catalog up-to-date
  As an administrator
  I want to create and manage courses

  Scenario: Courses List
    Given I have courses named Calculus, Physics
    When I go to the list of courses
    Then I should see "Calculus"
      And I should see "Physics"

  Scenario: Show Courses
  #Assume physics- course 0
    Given Course 0 with name Physics in department 0 has a section with ID 0
    When I go to the course page for 0
    Then I should see "Physics"