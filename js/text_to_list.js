(function ($) {
  'use strict';

  Drupal.behaviors.text_to_list = {
    attach: function (context, settings) {

      if (typeof settings.text_to_list === 'undefined') {
        return false;
      }
      $.each(settings.text_to_list, function (field_name, list_type) {
        if ($('.text-to-list-' + field_name + '-field').length > 0
                && $('.text-to-list-' + field_name + '-field .form-item .form-textarea').val().length > 0) {
          var text = $('.text-to-list-' + field_name + '-field .form-item .form-textarea').val();
          $('.text-to-list-' + field_name + '-field-preview').html(text);
        }

        $('.text-to-list-' + field_name + '-field-input').keypress(function (e) {
          if ($(this).val().length > 0 && e.keyCode === 13) {
            var entered_text = nl2br($(this).val()).split('<br>');
            var list_output = generate_list_output(entered_text, list_type);
            $('.text-to-list-' + field_name + '-field-preview .text-to-list-' + field_name + '-sortable').append(list_output);
            $(this).val('');

            $('.text-to-list-' + field_name + '-field .form-item .form-textarea').val($('.text-to-list-' + field_name + '-field-preview').html());
          }
        });

        if ($('.text-to-list-' + field_name + '-sortable').length > 0) {
          $('.text-to-list-' + field_name + '-sortable').sortable({
            cursor: 'pointer'
          }).disableSelection();
        }

        $('.text-to-list-' + field_name + '-sortable').bind('sortupdate', function () {
          $('.text-to-list-' + field_name + '-field .form-item .form-textarea').val($('.text-to-list-' + field_name + '-field-preview').html());
        });

        $('.text-to-list-' + field_name + '-sortable i.fa-times').live('click', function () {
          $(this).parent().remove();
          $('.text-to-list-' + field_name + '-field .form-item .form-textarea').val($('.text-to-list-' + field_name + '-field-preview').html());
        });
      });

      function generate_list_output(entered_text, list_type) {
        var list_output = '';
        $.each(entered_text, function (key, value) {
          value = $.trim(value);
          if (value.length !== 0) {
            if (list_type === 2) {
              list_output += '<div class="checklist-wrap"><input type="checkbox">' + value + '<i class="fa fa-times" aria-hidden="true"></i></div>';
            }
            else {
              list_output += '<li>' + value + '<i class="fa fa-times" aria-hidden="true"></i></li>';
            }
          }
        });
        return list_output;
      }

      function nl2br(str) {
        var breakTag = '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag);
      }

    }
  };

})(jQuery);
