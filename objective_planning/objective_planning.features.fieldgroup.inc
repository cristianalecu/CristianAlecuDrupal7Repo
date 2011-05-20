<?php

/**
 * Implementation of hook_fieldgroup_default_groups().
 */
function objective_planning_fieldgroup_default_groups() {
  $groups = array();

  // Exported group: group_obj_be
  $groups['objective-group_obj_be'] = array(
    'group_type' => 'standard',
    'type_name' => 'objective',
    'group_name' => 'group_obj_be',
    'label' => 'How should I be ?',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset_collapsible',
        'description' => '<p>
	Write what kind of person you want to be to complete your objective.<br />
	Start by saying that you trust yourself and believe you can do it.</p>
',
      ),
      'display' => array(
        'description' => '',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '2' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '3' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '-2',
    'fields' => array(
      '0' => 'field_obj_person',
    ),
  );

  // Exported group: group_obj_know
  $groups['objective-group_obj_know'] = array(
    'group_type' => 'standard',
    'type_name' => 'objective',
    'group_name' => 'group_obj_know',
    'label' => 'What should I know ?',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset_collapsible',
        'description' => '<p>
	Write what do you think you should read, learn, understand, know in order to achieve your objective.</p>
',
      ),
      'display' => array(
        'description' => '',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '2' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '3' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '-1',
    'fields' => array(
      '0' => 'field_obj_study',
    ),
  );

  // Exported group: group_obj_plan
  $groups['objective-group_obj_plan'] = array(
    'group_type' => 'standard',
    'type_name' => 'objective',
    'group_name' => 'group_obj_plan',
    'label' => 'What TO DO ?',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset_collapsible',
        'description' => '<p>
	Write the actions you should make, in steps, as detailed as possible, to achieve the goal.</p>
<p>
	Write small steps. You don&#39;t need to see the whole road, only the next 50 foots, and the indicators.</p>
<p>
	You must follow it and then&nbsp; develop / increase / improve&nbsp; it every time you find new ways to your goal.</p>
',
      ),
      'display' => array(
        'description' => '',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '2' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '3' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '0',
    'fields' => array(
      '0' => 'field_obj_plansteps',
    ),
  );

  // Exported group: group_obj_why
  $groups['objective-group_obj_why'] = array(
    'group_type' => 'standard',
    'type_name' => 'objective',
    'group_name' => 'group_obj_why',
    'label' => 'WHY ?',
    'settings' => array(
      'form' => array(
        'style' => 'fieldset_collapsible',
        'description' => '<p>
	Enter the strongest emotion(s) that determine you to have this objective:</p>
<ul>
	<li>
		Intimate feelings of ambition, passion, revenge</li>
	<li>
		To be rewarded, to prove something, to be recognized</li>
	<li>
		Satisfaction, prove to yourself that you are a winner</li>
	<li>
		You want it for the family, people you love, help friends</li>
	<li>
		To be grateful and share it with others</li>
</ul>
',
      ),
      'display' => array(
        'description' => '',
        'teaser' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'full' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '4' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '2' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        '3' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'token' => array(
          'format' => 'fieldset',
          'exclude' => 0,
        ),
        'label' => 'above',
      ),
    ),
    'weight' => '-3',
    'fields' => array(
      '0' => 'field_obj_emotions',
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('How should I be ?');
  t('WHY ?');
  t('What TO DO ?');
  t('What should I know ?');

  return $groups;
}
