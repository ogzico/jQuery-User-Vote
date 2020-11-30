$(document).ready(function () {

    $("#toggle").click(function () {
        $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {

            const html =
                data.map(e => {
                    return `
                    <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title" id="title">${e.name}</h5>
                                <p class="card-text">${e.phone}</p>
                                <p class="card-text">${e.website}</p>
                                <p class="card-text">${e.email}</p>
                                <button type="button" class="btn btn-outline-primary" id="vote">Upvote</button>
                            </div>
                    </div>
                `
                }
                ).join('')
            $("#div2").html(html)
        }
        )
    })
})