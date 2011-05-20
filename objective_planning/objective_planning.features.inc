<?php

/**
 * Implementation of hook_node_info().
 */
function objective_planning_node_info() {
  $items = array(
    'objective' => array(
      'name' => t('Objective'),
      'module' => 'features',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Objective'),
      'has_body' => '0',
      'body_label' => '',
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function objective_planning_views_api() {
  return array(
    'api' => '2',
  );
}
