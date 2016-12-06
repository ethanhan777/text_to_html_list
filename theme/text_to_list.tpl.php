<?php

/**
 * @file
 * Default text to list suffix template.
 *
 * Variables available:
 * - $key: machine name of field widget.
 * - $field_name: name of field.
 * - $label: field label.
 * - $placeholder: help text of field.
 * - $list_type_html: Either ul or ol.
 */
?>

<div class="text-to-list-field text-to-list-<?php print $key ?>-field text-to-list-<?php print $field_name ?>-field">

  <label><?php print $label ?></label>
  <placeholder><?php print $placeholder ?></placeholder>
  <!--Preview-->
  <label class="preview-label">Preview</label>
  <div class="text-to-list-preview text-to-list-<?php print $field_name ?>-field-preview">
    <<?php print $list_type_html ?> class="text-to-list-<?php print $field_name ?>-sortable"></<?php print $list_type_html ?>>
  </div>
  <!--text input-->
  <textarea class="text-to-list-input text-to-list-<?php print $field_name ?>-field-input"></textarea>
