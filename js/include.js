/*
This is a sample of utilization of include tag

<section class="include" data-include="slides/cap1/1-capa.html"></section>

If you want to include a dir, you can use include-dir. But, for use this tag
is mandatory to define a sufix to the html files

If use twice or more include-dir tag, They will be sorted in the order they are declared

<section class="include-dir"
         path-include = "slides/cap1/"
         start-include = "2"
         end-include = "5"
         static-name = "-presentation.html"> </section>
*/

$(function(){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file = '' + $(this).data('include');
      $(this).load(file);
    });

    var includeDir = $('.include-dir');
    jQuery.each(includeDir, function(){
      
      var pathInclude = $(this).attr('path-include');
      var startInclude = $(this).attr('start-include');
      var endInclude = $(this).attr('end-include');
      var staticName = $(this).attr('sufix');

      for (i = startInclude ; i <= endInclude ; i++){
          var section = document.createElement("section");
          var file = pathInclude+i+staticName;

          $(section).load(file);
          $("#slides").append(section);
      }

      this.parentNode.removeChild(this);

    });
});
