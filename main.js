let user = new APIManager()
const renderer = new Renderer()

$('.container').on('click', '#load', () => {
    user = new APIManager()
    user.loadUser()
})

$('.container').on('click', '#display', () => {
    renderer.render(user.data);
})
