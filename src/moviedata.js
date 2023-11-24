import{v4 as uuidv4}from "uuid"

const data=[
    {id:uuidv4(),
    title: "Cendrillon",
     description:'Cendrillon est un conte ancien et le nom de son personnage central.LOccident connaît surtout cette histoire à travers les versions fixées par Giambattista Basile dans La gatta Cenerentola',
     posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JGAKNqtg8apxEf8AobtognM6FuGvqPC9Mw&usqp=CAU",
     rating:5,
     trailerURL:"https://www.youtube.com/embed/tlhOeK_fhJs?si=8scDuxETv-TZ_efM" ,

    },

    {id:uuidv4(),
    title: 'Spider-Man',
    description:'SPIDER-MAN : NEW GENERATION présente Miles Morales, un adolescent vivant à Brooklyn, et révèle les possibilités illimitées du Spider-Verse, un univers où plus d’un peut porter le masque…',
    posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQUDSNn5f0_z8sjjYBPlDA70jJ1xIXG-iYw&usqp=CAU',
     rating:3,
     trailerURL:"https://www.youtube.com/embed/t06RUxPbp_c?si=J7uPaPbaeZ1STxI-",

    },

    { id:uuidv4(),
    title: "Batman",
    description:' Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à lunivers de DC Comics. Créé par le dessinateur Bob Kane et le scénariste Bill Finger, il apparaît pour la première fois dans le comic book ',
    posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu__I6ByL9S0cMtHBVBaDCDBwbVWvAORjOaQ&usqp=CAU",
     rating:'8',
     trailerURL:"https://www.youtube.com/embed/mqqft2x_Aa4?si=b5JrmVCfEAwh0L-E",
    }

]
export default data;