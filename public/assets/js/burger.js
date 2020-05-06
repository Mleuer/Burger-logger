$(function() {

    $(".devBtn").on('click', function(event) {

      event.preventDefault();
      let id = $(this).attr('data-id');
      let newDevoured = {
        devoured : true
      }

      $.ajax({
        type: "PUT",
        url: '/api/burgers/' + id
      }).then(
        function() {
          console.log("Updated Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );

    })

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        let newBurger = {
          burger_name: $("#bur").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});
