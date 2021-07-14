$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        $("#question").val(data);
        $("#question").select();
        $("#msg").text("Data returned successfully");
        $("#question").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        $.get({
            url: "/8ball",
            data: { question: $("#question").val() },
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});