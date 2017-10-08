describe('Check App.js Functions ', function(){

    it('check addTableRow to return correct row', function(){
        var event = {
			"id" : "e1",
			"datetime" : "11/07/2016 12.55 PM GMT",
			"user_details" : {
				"name" : "John Maxwell",
				"address" : "Singapore"
			},
			"type" : "Issuer",
			"description" : "description about the event"
		};

        expect(addTableRow(event).indexOf('11/07/2016 12.55 PM GMT') !== -1).toBe(true);
    });

    it('check addTableRow not to return error row', function(){
        var event = {
			"id" : "e1",
			"datetime" : "11/07/2016 12.55 PM GMT",
			"user_details" : {
				"name" : "John Maxwell",
				"address" : "Singapore"
			},
			"type" : "Issuer",
			"description" : "description about the event"
		};

        expect(addTableRow(event).indexOf('10/07/2016 12.55 PM GMT') !== -1).toBe(false);
    });

    it('check addTimelineRow return correct li ', function(){
        var event = {
			"id" : "e1",
			"datetime" : "11/07/2016 12.55 PM GMT",
			"user_details" : {
				"name" : "John Maxwell",
				"address" : "Singapore"
			},
			"type" : "Issuer",
			"description" : "description about the event"
		};

        expect(addTimelineRow(event).indexOf('11/07/2016 12.55 PM GMT') !== -1).toBe(true);
    });

    it('check addTimelineRow not to return unexpected values ', function(){
        var event = {
			"id" : "e1",
			"datetime" : "11/07/2016 12.55 PM GMT",
			"user_details" : {
				"name" : "John Maxwell",
				"address" : "Singapore"
			},
			"type" : "Issuer",
			"description" : "description about the event"
		};

        expect(addTimelineRow(event).indexOf('10/07/2016 12.55 PM GMT') !== -1).toBe(false);
    });


})