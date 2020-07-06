Handlebars.registerHelper('properCase', str => {
    return str.split(' ').map((n, i) => str[i] = n[0].toUpperCase() + n.slice(1)).join(' ')
});

class Renderer {

    render(data, usersData) {
        const user = this.renderUser(data);
        const quote = this.renderQuote(data);
        const content = this.renderContent(data);
        const friends = this.renderFriends(data);
        const savedUsers = this.renderSavedUsers(usersData)

        $('.container').empty().append(user + quote + content + friends + savedUsers);
        // this.renderSavedUsers(usersData)
    }

    renderNotLoaded() {
        $('.quote-container').append('<p class="not-loaded">Please press the Load User Data button first</p>');
    }

    renderUser(data) {
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        return template({ data: data });
    }

    renderQuote(data) {
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        return template({ data: data });
    }

    renderContent(data) {
        const source = $('#content-template').html();
        const template = Handlebars.compile(source);
        return template({ data: data });
    }

    renderFriends(data) {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        return template({ data: data });
    }

    renderSavedUsers(userData) {
        const source = $('#users-template').html();
        const template = Handlebars.compile(source);
        return template({ userData });
    }
}