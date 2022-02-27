// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
  
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
  
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
  
// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "SOORAJ DOOBA HAI",
    artist: "Arijit Singh",
    image: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Sooraj Dooba Hain.jpg",
    path: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Sooraj Dooba Hain.mp3",
  },
  {
    name: "CHOTE CHOTE PEG" ,
    artist: "Honey Singh & Navraj Hans & Neha Kakkar",
    image: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Chote Chote Peg.jpg",
    path: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Chote Chote Peg.mp3"
  },
  {
    name: "ABHI TOH PARTY SHURU HUI HAI",
    artist: "Badshah",
    image: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Abhi Toh Party Shuru Hui Hai.jpg",
    path: "C:\Users\Laxmi\Desktop\Ambience\party\Hindi\Abhi Toh Party Shuru Hui Hai.mp3",
  },
];