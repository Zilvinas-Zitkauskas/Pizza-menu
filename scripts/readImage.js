// reads and saves dataURL from the selected image and puts it for a preview
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#pic')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}