Feature: Manage Courses
  In order to keep a course catalog up-to-date
  As an administrator
  I want to create and manage courses

  Scenario: Courses List
    Given I have courses named Calculus, Physics
    When I go to the list of courses
    Then I should see "Calculus"
    And I should see "Physics"