//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = { main: { loaded: false }, friends: [] }
    }

    randUser() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            method: 'GET',
            success: (data) => {
                data.results.forEach((u, i) => {
                    i == 0 ? this.data.main.user = {
                        name: `${u.name.first} ${u.name.last}`,
                        address: `${u.location.city}, ${u.location.state}`,
                        picture: u.picture.large
                    } : this.data.friends.push({
                        name: `${u.name.first} ${u.name.last}`
                    })
                })
            },
            error: (xhr, text, err) => { this.data.main.loaded = false; console.log(text) }
        });
    };

    kanyeQ() {
        $.ajax({
            url: 'https://api.kanye.rest/?format=text',
            method: 'GET',
            success: (data) => {
                this.data.main.kq = data;
            },
            error: (xhr, text, err) => { this.data.main.loaded = false; console.log(text) }
        });
    };

    pokemon() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 950)}`,
            method: 'GET',
            success: (data) => {
                this.data.main.pokemon = { name: data.name, picture: data.sprites.front_shiny };
            },
            error: (xhr, text, err) => { this.data.main.loaded = false; console.log(text) }
        });
    };

    baconIpsum() {
        $.ajax({
            url: `https://baconipsum.com/api/?type=all-meat&sentences=3`,
            method: 'GET',
            success: (data) => {
                this.data.main.aboutMe = data.join(' ');
            },
            error: (xhr, text, err) => { this.data.main.loaded = false; console.log(text) }
        });
    };

    loadUser() {
        this.data = { main: { loaded: false }, friends: [] }
        this.kanyeQ()
        this.randUser()
        this.pokemon()
        this.baconIpsum()
        this.data.main.loaded = !this.data.main.loaded
    };
}