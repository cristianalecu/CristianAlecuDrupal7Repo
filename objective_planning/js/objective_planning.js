
Drupal.objectives.Ajax = Drupal.objectives.Ajax || {};

/**
 * Handles the simple process of setting the ajax form area with new data.
 */
Drupal.objectives.Ajax.setForm = function(title, output) {
  $(Drupal.settings.objectives.ajax.title).html(title);
  $(Drupal.settings.objectives.ajax.id).html(output);
}
Drupal.behaviors.ObjectivesAjaxLinks = function() {
  // Make specified links ajaxy.
  $('a.objectives-ajax-link:not(.objectives-processed)').addClass('objectives-processed').click(function() {
    // Translate the href on the link to the ajax href. That way this degrades
    // into a nice, normal link.
    var url = $(this).attr('href');
    url = url.replace('nojs', 'ajax');

    // Turn on the hilite to indicate this is in use.
    $(this).addClass('hilite');
    
    $(this).addClass('objectives-throbbing');

    $.ajax({
      type: "POST",
      url: url,
      data: 'js=1',
      success: Drupal.Objectives.Ajax.ajaxResponse,
      error: function(xhr) { Drupal.Objectives.Ajax.handleErrors(xhr, url); },
      dataType: 'json'
    });

    return false;
  });

  $('form.objectives-ajax-form:not(.objectives-processed)').addClass('objectives-processed').submit(function(arg) {
    // Translate the href on the link to the ajax href. That way this degrades
    // into a nice, normal link.
    var url = $(this).attr('action');
    url = url.replace('nojs', 'ajax');

    $(this).ajaxSubmit({
      url: url,
      data: { 'js': 1 },
      type: 'POST',
      success: Drupal.Objectives.Ajax.ajaxResponse,
      error: function(xhr) { $('span.objectives-throbbing').remove(); Drupal.Objectives.Ajax.handleErrors(xhr, url); },
      dataType: 'json'
    });

    return false;
  });

} 


Drupal.Objectives.Ajax.ajaxResponse = function(data) {
  $('a.objectives-throbbing').removeClass('objectives-throbbing');
  $('span.objectives-throbbing').remove();

  if (data.debug) {
    alert(data.debug);
  }

  // See if we have any settings to extend. Do this first so that behaviors
  // can access the new settings easily.

  if (Drupal.settings.ObjectivesAjax) {
    Drupal.settings.ObjectivesAjax = {};
  }
  if (data.js) {
    $.extend(Drupal.settings, data.js);
  }

  // Check the 'display' for data.
  if (data.display) {
    Drupal.Objectives.Ajax.setForm(data.title, data.display);

    // if a URL was supplied, bind the form to it.
    if (data.url) {
      var ajax_area = Drupal.settings.Objectives.ajax.id;
      var ajax_title = Drupal.settings.Objectives.ajax.title;

      // Bind a click to the button to set the value for the button.
      $('input[type=submit], button', ajax_area).unbind('click');
      $('input[type=submit], button', ajax_area).click(function() {
        $('form', ajax_area).append('<input type="hidden" name="'
          + $(this).attr('name') + '" value="' + $(this).val() + '">');
        $(this).after('<span class="objectives-throbbing">&nbsp</span>');
      });

      // Bind forms to ajax submit.
      $('form', ajax_area).unbind('submit'); // be safe here.
      $('form', ajax_area).submit(function(arg) {
        $(this).ajaxSubmit({
          url: data.url,
          data: { 'js': 1 },
          type: 'POST',
          success: Drupal.Objectives.Ajax.ajaxResponse,
          error: function(xhr) { $('span.objectives-throbbing').remove(); Drupal.Objectives.Ajax.handleErrors(xhr, data.url); },
          dataType: 'json'
        });
        return false;
      });
    }

    Drupal.attachBehaviors(ajax_area);
  }
  else if (!data.tab) {
    // If no display, reset the form.
    Drupal.Objectives.Ajax.setForm('', Drupal.settings.Objectives.ajax.defaultForm);
    //Enable the save button.

    // Trigger an update for the live preview when we reach this state:
    if ($('#Objectives-ui-preview-form input#edit-live-preview').is(':checked')) {
      $('#Objectives-ui-preview-form').trigger('submit');
    }
  }

  // Go through the 'add' array and add any new content we're instructed to add.
  if (data.add) {
    for (id in data.add) {
      var newContent = $(id).append(data.add[id]);
      Drupal.attachBehaviors(newContent);
    }
  }

  // Go through the 'replace' array and replace any content we're instructed to.
  if (data.replace) {
    for (id in data.replace) {
      $(id).html(data.replace[id]);
      Drupal.attachBehaviors(id);
    }
  }

  // Go through and add any requested tabs
  if (data.tab) {
    for (id in data.tab) {
      // Retrieve the tabset instance by stored ID.
      var instance = Drupal.Objectives.Tabs.instances[$('#views-tabset').data('UI_TABS_UUID')];
      instance.add(id, data.tab[id]['title'], 0);
      instance.click(instance.$tabs.length);

      $(id).html(data.tab[id]['body']);
      $(id).addClass('views-tab');

      // Update the preview widget to preview the new tab.
      var display_id = id.replace('#views-tab-', '');
      $("#preview-display-id").append('<option selected="selected" value="' + display_id + '">' + data.tab[id]['title'] + '</option>');

      Drupal.attachBehaviors(id);
    }
  }

  if (data.hilite) {
    $('.hilited').removeClass('hilited');
    $(data.hilite).addClass('hilited');
  }

  if (data.changed) {
    $('div.views-basic-info').addClass('changed');
  }
}

/**
 * Display error in a more fashion way
 */
Drupal.Objectives.Ajax.handleErrors = function (xhr, path) {
  var error_text = '';

  if ((xhr.status == 500 && xhr.responseText) || xhr.status == 200) {
    error_text = xhr.responseText;

    // Replace all &lt; and &gt; by < and >
    error_text = error_text.replace("/&(lt|gt);/g", function (m, p) {
      return (p == "lt")? "<" : ">";
    });

    // Now, replace all html tags by empty spaces
    error_text = error_text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");

    // Fix end lines
    error_text = error_text.replace(/[\n]+\s+/g,"\n");
  }
  else if (xhr.status == 500) {
    error_text = xhr.status + ': ' + Drupal.t("Internal server error. Please see server or PHP logs for error information.");
  }
  else {
    error_text = xhr.status + ': ' + xhr.statusText;
  }

  alert(Drupal.t("An error occurred at @path.\n\nError Description: @error", {'@path': path, '@error': error_text}));
} 