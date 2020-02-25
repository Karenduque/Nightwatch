#
# Copyright (c) 2017 by PROS, Inc.  All Rights Reserved.
# This software is the confidential and proprietary information of
# PROS, Inc. ("Confidential Information").
# You may not disclose such Confidential Information, and may only
# use such Confidential Information in accordance with the terms of
# the license agreement you entered into with PROS.
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
  
  
  
 
  


      