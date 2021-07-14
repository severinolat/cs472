$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        console.log(data);
        $("#msg").text("Data returned successfully");
        $("#cart-items-count").text(data);
        setTimeout(clearMsg, 1500);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#addtocart").submit(() => {
        console.log("here");
        $.post({
            url: "/addtocart",
            data: { productId: $("#id").val() },
        }).done(addedSuccess)
            .fail(function(xhr, textStatus, errorThrown) {
                console.log(xhr.responseText);
            });
        return false;
    });
});