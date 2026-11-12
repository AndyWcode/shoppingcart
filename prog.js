const games = 
[
    {                                                        //1
        name: "Balatro",
        price: 20,
        genre: ["strategy", "indie"],
        image: "img/Balatro.webp",
        stock: 45,
        description: "A poker-themed roguelike deck-building game focused on playing illegal poker hands and acquiring game-changing jokers."
    },

    {                                                        //2
        name: "City Skylines",
        price: 50,
        genre: ["strategy", "simulator"],
        image: "img/City Skylines.jpg",
        stock: 12,
        description: "A comprehensive city-building simulator where players design, manage, and expand road networks, zones, and public services."
    },

    {                                                        //3
        name: "Lethal Company",
        price: 20,
        genre: ["horror", "indie"],
        image: "img/Lethal Company.webp",
        stock: 85,
        description: "A co-op horror game where players scavenge industrial scrap moons while evading terrifying monsters to meet a corporate quota."
    },

    {                                                         //4
        name: "Phasmophobia",
        price: 30,
        genre: ["puzzle", "indie", "tactical"],
        image: "img/Phas.webp",
        stock: 30,
        description: "A psychological ghost-hunting co-op game where investigators use specialized equipment to identify paranormal entities."
    },

    {                                                        //5
        name: "Microsoft Flight Simulator",
        price: 180,
        genre: ["simulator"],
        image: "img/Mflightsim.webp",
        stock: 5,
        description: "An ultra-realistic flight simulation game featuring a globally scaled map powered by real satellite imagery and weather data."
    },

    {                                                        //6
        name: "DOTA 2",
        price: 0,
        genre: ["strategy", "multiplayer"],
        image: "img/dota2.jpg",
        stock: 500,
        description: "A classic multiplayer online battle arena (MOBA) game where two teams of five compete to destroy the opposing base's Ancient."
    },

    {                                                        //7
        name: "CSGO",
        price: 0,
        genre: ["strategy", "multiplayer, shooter"],
        image: "img/csgo.avif",
        stock: 450,
        description: "A tactical multiplayer first-person shooter pitting teams of terrorists and counter-terrorists against each other in objective-based rounds."
    },

    {                                                        //8
        name: "Dead by Daylight",
        price: 7.99,
        genre: ["survival", "horror", "action"],
        image: "img/dbd.jpeg",
        stock: 25,
        description: "An asymmetrical multiplayer survival horror game where one ruthless killer hunts down four survivors trying to escape."
    },

    {                                                        //9
        name: "Red Dead Redemption 2",
        price: 60,
        genre: ["action", "adventure", "open world"],
        image: "img/reddead.jpg",
        stock: 18,
        description: "An epic open-world Western adventure following outlaw Arthur Morgan and the Van der Linde gang at the dawn of the modern age."
    },

    {                                                        //10
        name: "HELLDIVERS",
        price: 35,
        genre: ["co-op shooter", "action"],
        image: "img/helldiver.jpg",
        stock: 40,
        description: "A chaotic co-op shooter focused on fighting galactic alien threats across hostile planets with heavy firepower."
    },

    {                                                        //11
        name: "Stardew Valley",
        price: 15,
        genre: ["strategy", "indie", "adventure", "simulator"],
        image: "img/stardew.jpg",
        stock: 60,
        description: "A relaxing farming life sim where players cultivate land, raise animals, fish, mine, and befriend local villagers."
    },

    {                                                        //12
        name: "Overwatch",
        price: 0,
        genre: ["shooter", "multiplayer"],
        image: "img/ow2.webp",
        stock: 300,
        description: "A vibrant hero-based team shooter featuring diverse characters with unique roles and abilities."
    },

    {                                                        //13
        name: "Maple Story 2",
        price: 0,
        genre: ["MMORPG", "multiplayer"],
        image: "img/maplestory.png",
        stock: 150,
        description: "A 3D block-based MMORPG offering social gameplay, custom housing, exploration, and dungeon crawling."
    },

    {                                                        //14
        name: "Cyberpunk 2077",
        price: 60,
        genre: ["open world", "action"],
        image: "img/cyberp.jpg_large",
        stock: 22,
        description: "An open-world action RPG set in a dystopian futuristic metropolis centering on a mercenary tangled up in a cybernetic conspiracy."
    },

    {                                                        //15
        name: "The Elder Scrolls",
        price: 30,
        genre: ["RPG", "fantasy"],
        image: "img/elderR.webp",
        stock: 35,
        description: "A grand fantasy role-playing franchise known for massive open worlds, deep lore, and absolute character freedom."
    },

    {                                                        //16
        name: "Baldur's Gate 3",
        price: 60,
        genre: ["RPG", "strategy"],
        image: "img/bald.jpg",
        stock: 50,
        description: "A critically acclaimed story-driven Dungeons & Dragons RPG featuring tactical turn-based combat and immense narrative choice."
    },

    {                                                        //17
        name: "Forza Horizon 6",
        price: 70,
        genre: ["Racing", "multiplayer"],
        image: "img/forza.jpg",
        stock: 14,
        description: "An open-world arcade racing game focused on high-speed exploration, dynamic weather, and diverse car collections."
    },

    {                                                        //18
        name: "NBA 2k26",
        price: 40,
        genre: ["single player", "multiplayer", "co-op"],
        image: "img/nba2k26.jpg",
        stock: 28,
        description: "A premier basketball simulation game featuring realistic player mechanics, career modes, and online league competitions."
    },

    {                                                        //19
        name: "Unturned",
        price: 5,
        genre: ["survival", "multiplayer"],
        image: "img/unturned.png",
        stock: 200,
        description: "A sandbox zombie survival game where players scavenge supplies, build bases, and cooperate or fight in open multiplayer servers."
    },

    {                                                        //20
        name: "No Man's Sky",
        price: 60,
        genre: ["open world", "singleplayer"],
        image: "img/noman.jpg",
        stock: 24,
        description: "A sci-fi exploration game set in a procedurally generated universe featuring space combat, planetary base-building, and discovery."
    }
];




discountCodes = [
    {
        code:"ACTION1010",
        discount: .85,
    },
    {
        code: "CHRISTMAZZ",
        discount: .70,
    }
]
const Usercart = {}



function rbg(thing){

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    thing.style.borderColor = `rgb(${r}, ${g}, ${b})`;
}

function inject(item,ind){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("beforeend",
    `<div class = "card" data-item = ${ind}>
           <h1>${item.name}</h1>
           <img  class = "card-img" src="${item.image}" alt="${item.name}">
           <div class ="carddesc">${item.description}</div>
           <p>${item.price}$</p>
           <button class = "cBTN">Add to Cart</button>
    </div>`
    
    );
}



function addtocart(item, index){
    if(games[index].stock>0){
    if(Usercart[item.name]){
        Usercart[item.name].stock ++;
        games[index].stock --;
    }
    else{
        Usercart[item.name] = {...item};
        Usercart[item.name].stock = 1;
        games[index].stock --;
        
    }
}
}

function removefromcart(item){
    if(Usercart[item.name].stock > 1){
        Usercart[item.name].stock --; 
    }
    else{delete Usercart[item.name]}

}

function filterbymoney(gamelist, maxprice){
    for(let i = 0 ; i <gamelist.length; i++)
        {
            if(gamelist[i].price <= maxprice)
                console.log(gamelist[i].name);

        }
}

function filterbygenre(gamelist, genre){
    for(let i = 0 ; i <gamelist.length; i++)
        {
            if( gamelist[i].genre.includes(genre)){
                console.log(gamelist[i].name);
            }
        }
}


function cart_show_total(){
    let total = 0
    for(let i in Usercart){
        console.log(`${Usercart[i].name}: ${Usercart[i].price}`)
    }
    
    for(let i in Usercart){
        total += Usercart[i].stock * Usercart[i].price
    }

    return total
}

for(let i = 0; i<games.length;i++){
    
    inject(games[i],i);
    

}


const addtocartbuttons = document.querySelectorAll(".cBTN");
        addtocartbuttons.forEach((button) => button.addEventListener("click", function(event){
        let data = event.target.closest(".card").getAttribute("data-item");
        addtocart(games[data], data);
        console.log(Usercart)
    }
    )
)   

    
