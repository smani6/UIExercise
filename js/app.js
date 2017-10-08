$(document).ready(function(){

	// Main Function called after fetching details through ajax
	// For now we are getting data from .js file 
	function render_details(details){
		var $tbody = $("tbody");
		var $timeline = $(".timeline ul");
		render_case_details(details);

		details['events'].forEach( function(event, idx){
			$tbody.append(addTableRow(event));
			$timeline.append(addTimelineRow(event));
		});
	}

	render_details(case_details);

	// Function to pass event and return table row of event details section
	function addTableRow(event){

		var tableRow = `<tr class="event">
							<td class='col-md-3 '>${event['datetime']}</td> 
							<td class='col-md-3 event-title' data-title='${event['user_details']['name']}  ${event['type']}'>${event['user_details']['name']}  ${event['type']}</td>  
							<td class='col-md-3'><a class='event_details' data-id=${event['id']} href=/event_detials?id=${event['id']} > ${event['description']} </a></td> 
						</tr>`

		return tableRow;
	}

	// Function to pass event and return timeline li of event section
	function addTimelineRow(event){

		var div_color = ( event['type'] === 'Issuer') ? "blue" : (event['type'] === 'Acquirer') ? "orange" : "red"; 
		var li_position = ( event['type'] === 'Acquirer') ? "position_left" : "position_right";
		var timelineRow = ` <li class='in-view ${li_position}' id=${event['id']}> 
								<div class=${div_color} >
									<p class="event-time"> ${event['datetime']}</p> 
									<p class="event-title"> ${event['user_details']['name']}  ${event['type']} </p>
									<p> Event Description </p>
								</div>
							</li>`;

		return timelineRow;
	}



	// Function to render case details overview
	function render_case_details(details){

		$(".issuer-details").append(`<p> ${details['issuer_details']['name']} </p> <p>${details['issuer_details']['address']}</p>`);
		
		$(".card-holder-details").append(`<p>${details['cardholder_details']['name']}</p>
										<p>${details['cardholder_details']['card_number']}</p>
										<p>${details['cardholder_details']['address']}</p>`);
		
		$('.merchant-details').append(`<p>${details['merchant_details']['name']} </p>
									   <p>${details['merchant_details']['address']}</p>`);

		$('.acquirer-details').append(`<p>${details['acquirer_details']['name']}</p>
										<p> ${details['acquirer_details']['address']}</p>`);

	}

	// On click of description link - will toggle the section and 
	// take user to selected timeline view	
	$("a.event_details").on("click", function(e){
		e.preventDefault();
		
		$("#actor-details").hide();
		$("#events-details-section").show();

		// scroll to selected timeline view
		var e_id = $(this).attr("data-id");
		var scrollPos = $('#' + e_id).position().top ;
		$('.timeline ul').animate({ scrollTop: scrollPos }, 2000); 

		// highlight the selected event
        $(".timeline ul").find("li").find("div").removeClass("selected");
	    $("#" + e_id + " div").addClass("selected");

	    // change event-title to selected event
	    $(".event-title-text p").text($(this).closest(".event").find('.event-title').data("title"));
	    setHeight();
		
	});


	// Back to grid button takes back user to case details view and hide events view
	$(".back-to-grid").on("click", function(e){
		$("#events-details-section").hide();
		$("#actor-details").show();
	});

	// On click of chevron - toggle case details view
	$(".actor-details-chevron").on("click", function(e){
		e.preventDefault();
		$("#actor-details").toggle();
		if($("#events-details-section").is(":visible")){
			$("#events-details-section").hide();
		}
	});

	// On click on any timeline bubble will highlight the selected timeline 
	// and show relavant event details
	$(".timeline ul li").on("click", function(e){
		$(this).closest("ul").find("li").find("div").removeClass("selected");
		$(this).find("div").addClass("selected");
		$(".event-title-text p").text($(this).find(".event-title").text());
	});


	// Function to adjust window height of timeline, form as per the viewport visible
	function setHeight() {
	    var windowHeight = $(window).innerHeight();

	    if(windowHeight > 768){
		    if($('.case-detail-view').is(":visible"))
		    	$('.case-detail-view').css('height', windowHeight - $(".case-detail-view").offset().top - 30);
		  
		  	if($('#events-details-section .timeline').is(":visible")){
		  		$('#events-details-section').css('height', windowHeight - $("#events-details-section").offset().top - 30);
		    	$('#events-details-section .timeline').css('height', windowHeight - $("#events-details-section .timeline").offset().top - 30);
		    }
		    
		    if($('#events-details-section .form-vertical').is(":visible")){
		    	$('#events-details-section').css('height', windowHeight - $("#events-details-section").offset().top - 30);
		    	$('#events-details-section .form-vertical').css('height', windowHeight - $("#events-details-section .form-vertical").offset().top - 30);
		    }
		}
	  };
	  
	  setHeight();
	  
	  // On Resize of window adjust the viewport of timeline, form view
	  $(window).resize(function() {
	    setHeight();
	  });

});
