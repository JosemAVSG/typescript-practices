const a: number = 1
const b: number = 2

const sumar = (a: number, b: number) : number => a + b

console.log(sumar(a, b));

interface AudioBooks {
    name:string,
    duration:number,
    author: {
        name:string
    }
}
interface Podcasts {
    name:string,
    duration:number,
    author: {
        name:string
    }
}
interface Videos {
    name:string,
    duration:number,
    author: {
        name:string
    }
}

interface PlayList{
    name:string,
    items: (AudioBooks | Podcasts | Videos)[]
}

const myPlaylist: PlayList = {
    name: "My Playlist",
    items: ([
        {
            name: "AudioBook",
            duration: 100,
            author: {
                name: "Author 1"
            }
        },
        {
            name: "Podcast",
            duration: 200,
            author: {
                name: "Author 2"
            }
        },
        {
            name: "Video",
            duration: 300,
            author: {
                name: "Author 3"}
        }
    ])
}