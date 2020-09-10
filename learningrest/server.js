const express=  require('express');
const {route}=require('./routers/route');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const requestasync=require('async-request');
const { request } = require('express');
app.post(route.postlogin,function(req,res){

console.log(res.body);
req.send("Success");

})
//route,callback
/*app.get("/",function (req,res){

}));*/


app.get(route.def,function (req,res){
    res.sendFile(__dirname +'/routers/ht.html');
});
app.get(route.reg,function (req,res){
    res.sendFile(__dirname+'/routers/regi.html');
});
app.post(route.postreg,function(req,res){

    console.log(req.body)
})
app.get(route.pro,function (req,res){
    const products=[
        {
          "_id": "5f5860ea2828030a47115d61",
          "index": 0,
          "guid": "cd3aebe5-2aa4-46d5-93db-43919fb8684f",
          "isActive": false,
          "balance": "$2,349.03",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "green",
          "name": "Prince Norris",
          "gender": "male",
          "company": "OPTICOM",
          "email": "princenorris@opticom.com",
          "phone": "+1 (831) 574-2639",
          "address": "289 Schenectady Avenue, Jenkinsville, Utah, 4082",
          "about": "Aliqua et ea cillum fugiat qui commodo commodo cupidatat anim nisi nisi ex adipisicing Lorem. Reprehenderit voluptate nisi ut culpa laborum nostrud cupidatat duis irure. In cillum sint elit id excepteur veniam ea. Dolore in est fugiat voluptate quis consectetur duis.\r\n",
          "registered": "2016-10-07T12:14:58 -06:-30",
          "latitude": -25.542774,
          "longitude": 80.308237,
          "tags": [
            "cupidatat",
            "esse",
            "magna",
            "Lorem",
            "velit",
            "quis",
            "eu"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Kim Miles"
            },
            {
              "id": 1,
              "name": "Moss Graham"
            },
            {
              "id": 2,
              "name": "Aline Norman"
            }
          ],
          "greeting": "Hello, Prince Norris! You have 8 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5860ea718f94577a54155e",
          "index": 1,
          "guid": "240fe78f-8a43-4522-8410-80ff1015c56f",
          "isActive": true,
          "balance": "$1,677.50",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "green",
          "name": "Mayo Compton",
          "gender": "male",
          "company": "PHUEL",
          "email": "mayocompton@phuel.com",
          "phone": "+1 (956) 528-2811",
          "address": "116 Havens Place, Brownsville, Oregon, 8055",
          "about": "Sit cupidatat minim cillum id velit aute sunt quis ipsum sunt. Ea et cupidatat irure exercitation tempor nisi velit ea id. Dolore aliquip in dolor velit voluptate ex dolor minim exercitation mollit mollit. Dolor consectetur esse eiusmod sunt laborum mollit deserunt eiusmod ex. Lorem deserunt occaecat aliqua nostrud tempor. Nisi sit anim cupidatat sint. Id do anim esse minim voluptate amet consequat excepteur id deserunt pariatur labore excepteur.\r\n",
          "registered": "2018-04-07T05:26:13 -06:-30",
          "latitude": -21.049469,
          "longitude": -9.334658,
          "tags": [
            "eiusmod",
            "minim",
            "eu",
            "consectetur",
            "amet",
            "pariatur",
            "amet"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Myrtle Hensley"
            },
            {
              "id": 1,
              "name": "Duncan Marshall"
            },
            {
              "id": 2,
              "name": "Ramona Erickson"
            }
          ],
          "greeting": "Hello, Mayo Compton! You have 7 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860eaa1e9bb316d5ad1df",
          "index": 2,
          "guid": "a0ecb6ba-fb74-445e-8653-10a997edf794",
          "isActive": false,
          "balance": "$3,032.07",
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "blue",
          "name": "Decker Marks",
          "gender": "male",
          "company": "ISBOL",
          "email": "deckermarks@isbol.com",
          "phone": "+1 (879) 473-2509",
          "address": "263 Church Avenue, Sardis, New Jersey, 6851",
          "about": "Minim enim nisi sunt esse ullamco id nisi adipisicing tempor commodo do laborum commodo. Nostrud ad cillum nostrud enim sint consequat. Proident laborum exercitation exercitation et. Voluptate nisi cillum ullamco laboris amet ullamco quis.\r\n",
          "registered": "2016-04-24T06:12:09 -06:-30",
          "latitude": -29.647791,
          "longitude": 140.519082,
          "tags": [
            "mollit",
            "exercitation",
            "non",
            "laborum",
            "magna",
            "et",
            "officia"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Wendi Mcguire"
            },
            {
              "id": 1,
              "name": "Rowena Mathis"
            },
            {
              "id": 2,
              "name": "Tina Sampson"
            }
          ],
          "greeting": "Hello, Decker Marks! You have 8 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5860eac40c1f926e41d0a4",
          "index": 3,
          "guid": "a8c8dbda-ac17-4230-a848-b59a40ed4f6b",
          "isActive": true,
          "balance": "$1,878.76",
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "blue",
          "name": "Aisha Stevens",
          "gender": "female",
          "company": "NEXGENE",
          "email": "aishastevens@nexgene.com",
          "phone": "+1 (973) 479-2021",
          "address": "775 Nassau Avenue, Onton, Mississippi, 8577",
          "about": "Esse consequat aliquip deserunt aliqua voluptate dolore voluptate ipsum fugiat aute adipisicing cillum minim consectetur. Officia sint proident ut irure irure fugiat eiusmod excepteur voluptate cillum aute laboris excepteur. Ea est dolor amet consectetur esse mollit. Mollit voluptate mollit ea esse officia veniam ullamco est ad qui ipsum quis cupidatat.\r\n",
          "registered": "2014-05-31T07:16:00 -06:-30",
          "latitude": -53.229554,
          "longitude": 154.290784,
          "tags": [
            "excepteur",
            "mollit",
            "consectetur",
            "irure",
            "sunt",
            "ex",
            "ut"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Hoover Crane"
            },
            {
              "id": 1,
              "name": "Carmella Vasquez"
            },
            {
              "id": 2,
              "name": "Josefina Kirby"
            }
          ],
          "greeting": "Hello, Aisha Stevens! You have 1 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860eaef59f37b2c138230",
          "index": 4,
          "guid": "aebe913e-d072-48df-9fb0-a2133191bc64",
          "isActive": false,
          "balance": "$1,069.18",
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "blue",
          "name": "Roach Head",
          "gender": "male",
          "company": "FREAKIN",
          "email": "roachhead@freakin.com",
          "phone": "+1 (955) 518-3271",
          "address": "375 Aster Court, Sanford, American Samoa, 1992",
          "about": "Officia ea dolore aute cupidatat adipisicing ipsum Lorem qui non commodo. Irure enim amet do commodo culpa labore duis excepteur laborum in in et. Adipisicing voluptate excepteur laborum sunt laboris eiusmod pariatur aliqua proident eiusmod culpa. Cillum ex velit culpa eu dolor duis nulla id sunt veniam aliquip.\r\n",
          "registered": "2018-11-21T08:30:04 -06:-30",
          "latitude": 85.726197,
          "longitude": 158.528969,
          "tags": [
            "sint",
            "reprehenderit",
            "aute",
            "adipisicing",
            "dolore",
            "culpa",
            "anim"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Durham Higgins"
            },
            {
              "id": 1,
              "name": "Nikki Munoz"
            },
            {
              "id": 2,
              "name": "Darla Dickerson"
            }
          ],
          "greeting": "Hello, Roach Head! You have 6 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f5860ea513971f9a5b71526",
          "index": 5,
          "guid": "ec05d628-64a0-4687-808f-8f9370b4104c",
          "isActive": true,
          "balance": "$1,291.29",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Jordan Farley",
          "gender": "male",
          "company": "ISOPLEX",
          "email": "jordanfarley@isoplex.com",
          "phone": "+1 (963) 447-2056",
          "address": "854 Navy Walk, Hailesboro, Washington, 3880",
          "about": "Minim ex incididunt cillum nisi ipsum adipisicing aliquip est commodo officia magna nostrud enim commodo. Est aute sint eu do ullamco nostrud dolor minim ea aute. Sunt amet aliquip aliquip officia aliquip laboris occaecat eu esse do qui id. Dolore esse enim consequat cupidatat aute aute sunt deserunt consectetur. Sint Lorem nostrud adipisicing sit non ut nulla exercitation exercitation. Ad laboris et mollit laborum elit enim irure ut in amet sint pariatur est. Ipsum qui quis laborum adipisicing sit labore.\r\n",
          "registered": "2019-08-28T03:50:05 -06:-30",
          "latitude": -64.889023,
          "longitude": 85.64728,
          "tags": [
            "irure",
            "excepteur",
            "minim",
            "fugiat",
            "dolore",
            "laboris",
            "elit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Gill Wilkins"
            },
            {
              "id": 1,
              "name": "Sutton Byrd"
            },
            {
              "id": 2,
              "name": "Latisha Ingram"
            }
          ],
          "greeting": "Hello, Jordan Farley! You have 5 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5860ea3a9f81ee2c14884d",
          "index": 6,
          "guid": "69755544-6cca-4684-a107-a05641cd1aa7",
          "isActive": false,
          "balance": "$1,924.48",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "blue",
          "name": "Albert Nelson",
          "gender": "male",
          "company": "NUTRALAB",
          "email": "albertnelson@nutralab.com",
          "phone": "+1 (820) 405-2067",
          "address": "150 Brighton Avenue, Connerton, Wyoming, 2625",
          "about": "Esse eiusmod nostrud Lorem cupidatat exercitation qui voluptate adipisicing. Ex incididunt dolor veniam mollit veniam enim ex consequat. Excepteur Lorem ipsum tempor fugiat culpa sunt amet non. Cillum ipsum incididunt eiusmod id consequat. Incididunt enim excepteur reprehenderit duis ad quis magna velit nostrud qui eu. Labore occaecat dolore qui minim occaecat incididunt tempor reprehenderit non adipisicing ex. Ipsum veniam minim occaecat aute proident ex quis.\r\n",
          "registered": "2016-01-05T08:33:47 -06:-30",
          "latitude": 48.282581,
          "longitude": 152.894514,
          "tags": [
            "proident",
            "sunt",
            "ipsum",
            "incididunt",
            "enim",
            "aliqua",
            "mollit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Stout Reed"
            },
            {
              "id": 1,
              "name": "Angel Sheppard"
            },
            {
              "id": 2,
              "name": "Angelita Winters"
            }
          ],
          "greeting": "Hello, Albert Nelson! You have 3 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ];

      res.json(products);
});
const countryurl='https://api.github.com/users';

app.get(route.getcountries,async function (req,res){
  const response=await requestasync(countryurl);
  res.json(response);
});



/*app.get("/register",function (req,res{
    
}));
app.get("/products",function (req,res{
    
}));
*/
app.listen(3000);