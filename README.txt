**************************
Text to HTML List
**************************

--------------------------
Description
--------------------------
The primary goal of this module is to improve site editor experience and ease 
the process of adding and reordering lists of content.

--------------------------
Installation
--------------------------
1. Place this module into your Drupal modules directory eg) sites/all/modules
2. Enable this module by drush command or web ui:
 - drush en text_to_list -y
 - administer > modules

3. Change field widget for longtext to 'Text to List'
4. In field setting, choose list type (bulleted by default)

--------------------------
Functionality
--------------------------
This is a field widget that allows site editors to input all list content into 
a single field and automatically creates individual list items. 
Site editors can add list items one by one or copy and paste from a varity of 
sources, including Word, Excel, Google Docs, and websites, providing that 
content is on separate lines in the source content. 
All list items can then be reordered or removed through the UI, as required by 
site editors. Lists can be configured to use plain text, bullets, numbered list
, or checkboxes.

--------------------------
Use Case
--------------------------
Currently used for entering recipe content - ingredient lists and steps. 
See example recipe.
 * http://penguinrandomhouse.ca/recipe/devils-food-cake

--------------------------
Notes
--------------------------
This was inspired by the Copy Paste functionality for creating cards and lists 
in Trello.

--------------------------
Maintenance
--------------------------
This module is sponsored by PenguinRandomHouse Canada
 * http://penguinrandomhouse.ca/content/about-penguin-random-house-canada
