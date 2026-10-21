const games = 
[
    {                                                        //1
        name: "Balatro",
        price: 20,
        genre: ["strategy", "indie"],
        image: "https://tse1.mm.bing.net/th/id/OIP.3qisZXm1iccgMKkYnccoQgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 45
    },

    {                                                        //2
        name: "City Skylines",
        price: 50,
        genre: ["strategy", "simulator"],
        image: "https://tse1.mm.bing.net/th/id/OIP.QkV8vkIH7Cx8qPM_FpqEoQHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 12
    },

    {                                                        //3
        name: "Lethal Company",
        price: 20,
        genre: ["horror", "indie"],
        image: "https://tse2.mm.bing.net/th/id/OIP.3geBKlvqbLNifotLFFPkYQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 85
    },

    {                                                       //4
        name: "Phasmophobia",
        price: 30,
        genre: ["puzzle", "indie", "tactical"],
        image: "https://tse2.mm.bing.net/th/id/OIP.zttTNRT69b3YHm_JYGTpxwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 30
    },

    {                                                         //5
        name: "Microsoft Flight Simulator",
        price: 180,
        genre: ["simulator"],
        image: "https://tse1.mm.bing.net/th/id/OIP.nd6Lubw5l6EoMhitSpcYvAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 5
    },

    {                                                         //6
        name: "DOTA 2",
        price: 0,
        genre: ["strategy", "multiplayer"],
        image: "https://wallpapers.com/images/hd/1920x1080-dota-2-background-8e058ihhfwziqvzo.jpg",
        stock: 500
    },

    {                                                         //7
        name: "CSGO",
        price: 0,
        genre: ["strategy", "multiplayer, shooter"],
        image: "https://th.bing.com/th/id/OIP.Z03_SblNFXtcK8B5ZM8RDAHaEK?w=324&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
        stock: 450
    },

    {                                                         //8
        name: "Dead by Daylight",
        price: 7.99,
        genre: ["survival", "horror", "action"],
        image: "https://images4.alphacoders.com/133/1334860.jpeg",
        stock: 25
    },

    {                                                         //9
        name: "Red Dead Redemption 2",
        price: 60,
        genre: ["action", "adventure", "open world"],
        image: "https://generacionxbox.com/wp-content/uploads/2022/11/red-dead-redemptio-2-saga.jpg",
        stock: 18
    },

    {                                                         //10
        name: "HELLDIVERS",
        price: 35,
        genre: ["co-op shooter", "action"],
        image: "https://images.wallpapersden.com/image/download/5k-helldivers-2-gaming-poster_bmZram6UmZqaraWkpJRmbmdlrWZlbWU.jpg",
        stock: 40
    },

    {                                                         //11
        name: "Stardew Valley",
        price: 15,
        genre: ["strategy", "indie", "adventure", "simulator"],
        image: "https://wallpapercave.com/wp/wp2234190.jpg",
        stock: 60
    },

    {                                                         //12
        name: "Overwatch",
        price: 0,
        genre: ["shooter", "multiplayer"],
        image: "https://cdn.wallpapersafari.com/5/34/sDpa8T.jpg",
        stock: 300
    },

    {                                                         //13
        name: "Maple Story 2",
        price: 0,
        genre: ["MMORPG", "multiplayer"],
        image: "https://images5.alphacoders.com/953/thumb-1920-953492.png",
        stock: 150
    },

    {                                                         //14
        name: "Cyberpunk 2077",
        price: 0,
        genre: ["open world", "action"],
        image: "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg:large",
        stock: 22
    },

    {                                                         //15
        name: "The Elder Scrolls",
        price: 30,
        genre: ["RPG", "fantasy"],
        image: "https://tse1.mm.bing.net/th/id/OIP.5m_h_V0WKt4fqGfSkiH0egHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        stock: 35
    },

    {                                                         //16
        name: "Baldur's Gate 3",
        price: 60,
        genre: ["RPG", "strategy"],
        image: "https://4kwallpapers.com/images/wallpapers/baldurs-gate-3-10k-1920x1080-12703.jpg",
        stock: 50
    },

    {                                                         //17
        name: "Forza Horizon 6",
        price: 70,
        genre: ["Racing", "multiplayer"],
        image: "https://images5.alphacoders.com/140/thumb-1920-1401537.jpg",
        stock: 14
    },

    {                                                         //18
        name: "NBA 2k26",
        price: 40,
        genre: ["single player", "multiplayer", "co-op"],
        image: "https://www.gaming.net/wp-content/uploads/2025/09/Your-paragraph-text-2025-09-09T204646.631.jpg",
        stock: 28
    },

    {                                                         //19
        name: "Unturned",
        price: 5,
        genre: ["survival", "multiplayer"],
        image: "https://wallpapercave.com/wp/wp1955423.png",
        stock: 200
    },

    {                                                         //20
        name: "No Man's Sky",
        price: 60,
        genre: ["open world", "singleplayer"],
        image: "https://4kwallpapers.com/images/wallpapers/no-mans-sky-2024-1920x1080-17979.jpg",
        stock: 24
    }
];

const Usercart = {}

function addtocart(cart,item){
   
        if(games[i].name == item && games[i].stock >0){
            if(cart[item.name]){
                cart[item.name].qty += 1;
                games[i].stock --; 
            } 
            else{cart[games[i].name] = games[i];
            cart[games[i].name].qty = 1;
            break
            }
        
        }
    
    }
addtocart(Usercart,"No Man's Sky" )
addtocart(Usercart,"No Man's Sky" )

console.log(Usercart);

function removefromcart(cart, item){
    cart.splice(cart.indexOf(item), 1)

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

function showcart_andtotal(gamelist, cart){
    let total = 0
    for(let i = 0; i < cart.length; i++)
    {
        for( let l = 0; l  < gamelist.length; l++)
        {
            if(cart[i] == gamelist[l].name)
            {
                console.log(`${cart[i]}:     $${gamelist[l].price}`)
                total = total + gamelist[l].price
            }
        }
    }
    console.log("------------------ ")
    console.log(`YOUR TOTAL :  $${total}`)
}

showcart_andtotal(games, Usercart)

addtocart(Usercart, "Unturned");
removefromcart(Usercart, "Unturned");


const imagess = document.getElementById('images')
for(let i = 0; i < games.length; i++)
{
    imagess.innerHTML += 
    `<img src=${games[i].image} width = "300" height = "300">`
}