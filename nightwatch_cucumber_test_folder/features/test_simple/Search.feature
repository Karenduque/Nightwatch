#
# @author Karen Duque

Feature: Search

 Feature: Search

 Background: Go to Google page
    Given I am in Google page

  @Test1       
  Scenario Outline: I need search about automation
    When I fill the "Search" field with "<Search>"
       And I click the "Buscar con Google" button
    Then I see the results related to "<Search>"
  Examples:
  | Search     |
  | Cucumber   |
  | Nightwatch |