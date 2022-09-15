Feature: Login to the site

  Scenario: Login to the site with invalid credentials

    Given I am on the login page
    When I login with "Qwerty" and "qwerty12345"
    Then I should see a flash message saying "Invalid credentials"

  Scenario Outline: Login to the site as admin credentials

    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see right url

    Examples:
      | username | password |
      | Admin    | admin123 |

