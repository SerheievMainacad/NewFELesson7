$.ajax('/todos', {
  type: "GET",
  success: function(todos) {
    // Do something
  },
  error: function(xhr) {
    alert(xhr.responseText);
  }
});

$.ajax({
  type: "POST",
  url: '/todos',
  contentType: "application/json",
  data: JSON.stringify({
    title: "Walk the dog"
  }),
  success: function(todo) {
    // Do something
  }, 
  error: function(xhr) {
    alert(xhr.responseText);
  }
});