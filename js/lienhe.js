$(document).ready(function(){
    $(".contact-us").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true
            }
        },
        messages: {
            name: "Vui lòng nhập họ tên!",
            // subject: "Please enter your subject",
            message: "Vui lòng nhập nội dung!",
            email: "Vui lòng nhập email!",
        }
    })
})