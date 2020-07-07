let user = new APIManager();
const renderer = new Renderer();
let users = JSON.parse(localStorage.users || '[]');
let id = users.length;

$('.container').on('click', '#load', () => {
    // user = new APIManager()
    user.loadUser()
})

$('.container').on('click', '#display', () => {
    user.data.main.loaded ? renderer.render(user.data, users) : renderer.renderNotLoaded();
})

$('.container').on('click', '#save-user-page', () => {
    localStorage.clear();
    users.push({ user, id: id++ })
    localStorage.users = JSON.stringify(users);
})

$('.container').on('click', '#load-user-page', () => {
    user = JSON.parse(localStorage.users || '[]');
    const userID = $('#user-to-load').val()
    renderer.render(user[userID].user.data, users);
})