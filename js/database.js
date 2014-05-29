!function ($){
	"use strict"; // jshint ;_;\

	var LoopCount = 1;
  var CreatePanel = function(){

      function loadfail(){
      alert("Error: Failed to load file!");
    }; //end of Load Fail

    
    function parse(document){
      alert('Inside Parse function');

      $(document).find("SearchSource").each(function(){

        var CrawlerHostName = $(this).find('CrawlerHost').text();
        var LastCrawlTime = $(this).find('LastCrawl').text();
        var SourceName = $(this).find('Name').text();
        var SourceState = $(this).find('State').text();
        var SourceDatabase = $(this).find('SqlDatabase').text();

        if (SourceState == 'Ready') {
            alert('inside IF for Ready');

              
                if(LoopCount%2 == 1){
                  alert('inside ODD Loop');
                  $('#content-column-1').append('<div class="row">' + //Inserts the required botstrap row
                  '<div class="panel panel-primary vertical-margin">' + //Ready Div With Blue theme
                        '<div class="panel-heading">' +                                                                    //First Field Label 
                          '<h3 class="panel-title">'+SourceName+'</h3>' +                                                  //First field Value and so on.. 
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Index Location</p>' +
                          '<p class="pull-left">'+SourceDatabase+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Crawler Host</p>' +
                          '<p class="pull-left">'+CrawlerHostName+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Last Crawled</p>' +
                          '<p class="pull-left">'+LastCrawlTime+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<button class="btn btn-default btn-small">Rebuild Index</button>' + // button
                        '</div>' +
                    '</div>'); // end of template for Ready State
                } //End of LoopCount ODD/EVEN test


              if(LoopCount%2 == 0){
                  $('#content-column-2').append('<div class="row">' + //Inserts the required botstrap row
                  '<div class="panel panel-primary vertical-margin" style="margin-left:-7px; ">' + //Ready Div With Blue theme
                        '<div class="panel-heading">' +                                                                    //First Field Label 
                          '<h3 class="panel-title">'+SourceName+'</h3>' +                                                  //First field Value and so on.. 
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Index Location</p>' +
                          '<p class="pull-left">'+SourceDatabase+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Crawler Host</p>' +
                          '<p class="pull-left">'+CrawlerHostName+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<p class="pull-left right-margin">Last Crawled</p>' +
                          '<p class="pull-left">'+LastCrawlTime+'</p>' +
                        '</div>' +
                        '<div>' +
                          '<button class="btn btn-default btn-small">Rebuild Index</button>' + // button
                        '</div>' +
                    '</div>'); // end of template for Ready State
            
            };

        }; // End of IF Condition for Ready Status

        if (SourceState == 'Indexing') {
        }; // End of IF Condition for Indexing Status

        if (SourceState == 'Error') {
        }; // End of IF Condition for Error Status

      });
    
    LoopCount = LoopCount + 1;
    }; //end of Parse function
    
    $.ajax({
      url: 'sources.xml',    // name of file with our data
      dataType: 'xml',    // type of file we will be reading
      success: parse,     // name of function to call when done reading file
      error: loadfail     // name of function to call when failed to read
      });

  };//end of CreatePanel


}(window.jQuery);