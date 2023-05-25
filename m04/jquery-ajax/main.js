// 1) Accesing elements through selectors
const paragraph = $("p");
console.log(paragraph);
const myParagraph = $("#my-paragraph");

// 2) Handling events or actions with those elements
myParagraph.click(function() {
  myParagraph.css("background-color", "yellow");
})

// 3) Let's execute an HTTP Request using jQuery and AJAX
const img = $("img");
const button = $("button");

button.click(function(){
  console.log('Button clicked!');
  $.ajax({
    url: "https://randomfox.ca/floof/",
    success: function(response){
      console.log('this is the response:', response);
      const newImageUrl = response.image;

      // 4) How to transform the attributes of an html element?
      img.attr('src', newImageUrl);
    }
  });
});