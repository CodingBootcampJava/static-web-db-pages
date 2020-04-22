$(function() {        
    $('.list-group-item').on('click', function() {
      $('.far', this)
        .toggleClass('fa-arrow-alt-circle-right')
        .toggleClass('fa-arrow-alt-circle-down');
    });
  
  });