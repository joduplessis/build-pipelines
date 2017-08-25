
        // Global object
        window.sliders = {
            sliderValues: [],
            updateValueUsingId: function(id, value) {
                $.each(window.sliders.sliderValues, function(index, object) {
                    if (object.id==id) {
                        object.value = value;
                    }
                });
            }
        }

        // From MONGO FIND
        var arrayFromDatabase = [
            {id: 0, text:'This is an item', checked: true, maximum: 25},
            {id: 1, text:'This is another item', checked: false, maximum: 325},
            {id: 2, text:'This is yet another item', checked: false, maximum: 125},
            {id: 3, text:'And another item', checked: false, maximum: 235},
            {id: 4, text:'Oh my, another item', checked: false, maximum: 1245},
            {id: 5, text:'And the very last item', checked: false, maximum: 1245}
        ];

        // Populate the global slider array from the DB - ONCE
        $.each(arrayFromDatabase, function(index, object){
            window.sliders.sliderValues.push({id: object.id, value: 0, maximum: object.maximum});
        });

        // Update it
        window.sliders.updateValueUsingId(2, 45);

        // Output the array (to the helper) the second time (will be done automatically)
        $.each(window.sliders.sliderValues, function(index, object){ console.log(object); });
