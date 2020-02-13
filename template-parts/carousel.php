
<div class="carousel-wrapper">
  <div class="carousel">

<?php

$category_id = get_category_by_slug('carousel')->cat_ID;

$query_images_args = array(
    'post_type'         => 'attachment',
    'post_mime_type'    => 'image',
    'post_status'       => 'inherit',
    'posts_per_page'    => -1,
    'cat'               => $category_id,
);

$query_image = new WP_Query($query_images_args);

foreach ($query_image->posts as $index => $image) {

?> 

<img class="carousel-photo <?php
  if ( $index === 0 ) { ?> initial <?php } ?>" 
           src="<?php echo wp_get_attachment_url( $image->ID ); ?>">

<?php 
} 
?>

        <div class="carousel-button next"></div>
        <div class="carousel-button prev"></div>
    </div>
</div>

<?php
wp_reset_query();
?>