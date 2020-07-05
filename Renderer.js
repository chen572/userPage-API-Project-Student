
class Renderer {
    render(data) {
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data: data });

        $('.container').empty().append(newHTML)
    }
}