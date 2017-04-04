Feature: Manage Courses
  In order to keep a course catalog up-to-date
  As an administrator
  I want to create and manage courses

  #Scenario: Courses List
  #  Given I have courses named Calculus, Physics
  #  When I go to the list of courses
  #  Then I should see "Calculus"
  #    And I should see "Physics"

  #Scenario: Show Courses
  #Assume physics- course 0
    #Given Course 0 with name Physics in department 0 has a section with ID 0
    #When I go to the course page for 0
    #Then I should see "Physics"

  Scenario: Courses Table
    Given the following courses exist
      | id | name      | number | min_credits | max_credits | description     | department_id |
      | 0  | Calculus  | 1000   | 4           | 4           | Differentiation | 0             |
      | 1  | Physics   | 1000   | 4           | 4           | Mechanics       | 1             |
      | 2  | Chemistry | 1000   | 4           | 4           | Basic chem      | 1             |
    When I go to the list of courses
    Then I should see "Calculus"
      And I should see "Physics"
      And I should see "Chemistry"

  