interface Song {
    title: string;
    year: number;
    genre: string;
    length: string;
    links: SongLink[];
}

interface SongLink {
    url: string;
    name: string;
    icon: string;
}

// TODO: Make this data easier to handle instead of just putting it in a const
const songs: Song[] = [
    {
        title: "上昇の旅 ～ The Ascending Journey",
        year: 2022,
        genre: "Artcore",
        length: "2:32",
        links: [
            {
                url: "https://youtu.be/NAqdOfIVm2A",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/the-ascending-journey",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/the-ascending-journey",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:3LJLsYrCz7COMf6mww1is4",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://music.apple.com/us/album/%E4%B8%8A%E6%98%87%E3%81%AE%E6%97%85-the-ascending-journey-single/1647818320?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Awaken",
        year: 2022,
        genre: "Swing Downtempo",
        length: "4:12",
        links: [
            {
                url: "https://youtu.be/snrc9j6HegM",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/awaken",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/awaken",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:699cR3vfXGSm8gfD7QoxM1",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/awaken-single/1638861998?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Commencement",
        year: 2022,
        genre: "Drone / Orchestral",
        length: "5:45",
        links: [
            {
                url: "https://youtu.be/43OgXi1tsPw",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/commencement",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/commencement",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:462JFoVGbKnuRBLUFZ2f6X",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/commencement-single/1638844498?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "FALL",
        year: 2022,
        genre: "Polyrhythmic Orchestral",
        length: "2:25",
        links: [
            {
                url: "https://youtu.be/_FlHUWVjHvY",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/fall",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/fall",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:1ImNhPQO1iFdm2fPuQKMF2",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/fall-single/1586479956?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Acrimony",
        year: 2021,
        genre: "Hybrid Orchestral",
        length: "2:43",
        links: [
            {
                url: "https://youtu.be/YPMWOXOxGg8",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/acrimony",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/acrimony",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:1xKQiNpoSUBd7bCzSJoVqP",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/acrimony-single/1545808953?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Chima",
        year: 2021,
        genre: "Drum & Bass",
        length: "3:50",
        links: [
            {
                url: "https://youtu.be/hcmBAqJoFDU",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/chima",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/chima",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:4DGzWQ09F25uVyn3epAyUx",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/chima-single/1545809080?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Sleep",
        year: 2021,
        genre: "Dubstep",
        length: "6:03",
        links: [
            {
                url: "https://youtu.be/bp5UBpU2eRE",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/sleep",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/sleep",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:0tPOVommjTqeZI2xtDwGnw",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/sleep-single/1545807010?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Don't Want Any",
        year: 2021,
        genre: "Lo-Fi Hiphop",
        length: "1:37",
        links: [
            {
                url: "https://youtu.be/x_Y9ywgcA3A",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/dont-want-any",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/dont-want-any",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:5684CFzCInIF0wcHniVQ7n",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/dont-want-any-single/1545808798?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Time To Think",
        year: 2021,
        genre: "Chillout",
        length: "2:45",
        links: [
            {
                url: "https://youtu.be/1cKD1Bw_REY",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/time-to-think",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/time-to-think",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:1zws9KxX3UIWLGdVtH7KwF",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/time-to-think-single/1545382269?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Facade",
        genre: "Hybrid Orchestral",
        length: "2:55",
        year: 2018,
        links: [
            {
                url: "https://youtu.be/lH278b_WFsc",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/facade",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/facade",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:5gb33S9kKA3yX0uyJVbjw5",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/facade-single/1378037820?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Greetings (Extended Mix)",
        genre: "Drum and Bass",
        length: "6:38",
        year: 2018,
        links: [
            {
                url: "https://youtu.be/cEhLC31Q1ZI",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/greetings-extended-mix",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/greetings-extended-mix",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:48XeGNjEVKHT1moISiOuZR",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/greetings-extended-mix-single/1354600978?app=music&ign-mpt=uo%3D4",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Free",
        genre: "Hard Dance",
        length: "3:56",
        year: 2018,
        links: [
            {
                url: "https://youtu.be/-L1m5_J0oKc",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/free",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/free",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:0jKc2sxrv8BskH8vf7oIPB",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/free/1348077022?i=1348077023",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Sidetracked Day",
        genre: "Drum and Bass",
        length: "5:38",
        year: 2018,
        links: [
            {
                url: "https://youtu.be/-40fLtf9Hio",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/sidetracked-day",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/sidetracked-day",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:04tHEujy90CzUZB9PPDhzC",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/sidetracked-day/1342478466?i=1342478757",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Nostalgia (w. Emeskey)",
        genre: "Chillout",
        length: "1:54",
        year: 2016,
        links: [
            {
                url: "https://youtu.be/rTMmGP7xJCs",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/vinxis-emeskey-nostalgia",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/nostalgia-feat-emeskey",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:0R617kgT8SBboHXlXqnl2o",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/nostalgia-feat-emeskey/1434341206?i=1434341213",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Take",
        genre: "Drum and Bass / Drumstep",
        length: "5:58",
        year: 2016,
        links: [
            {
                url: "https://youtu.be/2EtkxNE_2Ag",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/take",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/take",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:7CYp4VIgykATjhKqyUyh0O",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/take/1344405182?i=1344405183",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Left Behind",
        genre: "Drum and Bass",
        length: "2:33",
        year: 2016,
        links: [
            {
                url: "https://youtu.be/KjqFrZvqqh4",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/left-behind",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/left-behind",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:64fGzCIXZHWZTxl1NGfZPW",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/left-behind/1344562134?i=1344562140",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Three Times The Original Charm",
        genre: "Downtempo",
        length: "3:52",
        year: 2015,
        links: [
            {
                url: "https://youtu.be/hkSytekVwfM",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/three-times-the-original-charm",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/three-times-the-original-charm",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:0ruEuHEcEIRqns0ZKGeiLE",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/three-times-the-original-charm-single/1346223158",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "Applause",
        genre: "Electronic",
        length: "1:06",
        year: 2015,
        links: [
            {
                url: "https://youtu.be/bj7gFQ4XzBU",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/applause",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://vinxis.bandcamp.com/track/applause",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
            {
                url: "spotify:track:7kODgYR50TGRFUndVaKTQE",
                name: "spotify",
                icon: "/discography/spotify.png",
            },
            {
                url: "https://itunes.apple.com/us/album/applause-single/1409295678",
                name: "Apple",
                icon: "/discography/apple.png",
            },
        ],
    },
    {
        title: "The Side Effects Of Mental Paralysis",
        genre: "Glitch",
        length: "2:50",
        year: 2015,
        links: [
            {
                url: "https://soundcloud.com/vinxis/the-side-effects-of-mental-paralysis",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
    {
        title: "A Centralized View",
        genre: "Drum and Bass",
        length: "2:31",
        year: 2015,
        links: [
            {
                url: "https://youtu.be/K5UL_RxK0lk",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/a-centralized-view",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
    {
        title: "Greetings",
        genre: "Drum and Bass",
        length: "1:18",
        year: 2015,
        links: [
            {
                url: "https://youtu.be/R9hsAmo2Gho",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/greetings",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
    {
        title: "Blissful Murder",
        genre: "Hardcore / Gabber",
        length: "3:13",
        year: 2014,
        links: [
            {
                url: "https://youtu.be/E3ZDL1cmciI",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/blissful-murder",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
    {
        title: "Black Dust",
        genre: "Orchestral",
        length: "2:45",
        year: 2014,
        links: [
            {
                url: "https://youtu.be/Yqp099-vu3g",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/vinxis-black-dust",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
    {
        title: "Reach the Dreams (w. Emeskey)",
        genre: "Chillout",
        length: "4:37",
        year: 2014,
        links: [
            {
                url: "https://youtu.be/JuUs0R0XeR0",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/vinxis-emeskey-reach-the",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
            {
                url: "https://soullessafternoons.bandcamp.com/track/reach-the-dreams",
                name: "Bandcamp",
                icon: "/discography/bandcamp.png",
            },
        ],
    },
    {
        title: "Vole",
        genre: "Experimental",
        length: "2:55",
        year: 2013,
        links: [
            {
                url: "https://youtu.be/CDizagF4vEc",
                name: "Youtube",
                icon: "/discography/youtube.png",
            },
            {
                url: "https://soundcloud.com/vinxis/vole",
                name: "Soundcloud",
                icon: "/discography/soundcloud.png",
            },
        ],
    },
];

export default defineEventHandler(() => {
    return songs;
});