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

<div class="text-to-html-list-field text-to-html-list-<?php print $key ?>-field text-to-html-list-<?php print $field_name ?>-field">

  <label><?php print $label ?></label>
  <placeholder><?php print $placeholder ?></placeholder>
  <!--Preview-->
  <label class="preview-label">Preview</label>
  <div class="text-to-html-list-preview text-to-html-list-<?php print $field_name ?>-field-preview">
    <<?php print $list_type_html ?> class="text-to-html-list-<?php print $field_name ?>-sortable"></<?php print $list_type_html ?>>
  </div>
  <!--help text-->
  <p class="help-text">List items are draggable to change order.</p>
  <!--text input-->
  <textarea class="text-to-html-list-input text-to-html-list-<?php print $field_name ?>-field-input"></textarea>
