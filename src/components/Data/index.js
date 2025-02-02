const Data = [
    {
      id: 1,
      title: "Daisy",
      artist: "Ashnikko",
      thumbnail: require('../../images/ashniko.jpeg'),
      src: require('../../audio/Ashnikko-Daisy.mp3'),
      duration: "02:29"
    },
    {
      id: 2,
      title: "Bamb Aagya",
      artist: "Gur Sidhu ft Jasmine Sandlas",
      thumbnail: require('../../images/bamb.jpg'),
      src: require('../../audio/BAMB AAGYA 8D Gur Sidhu _ Jasmine Sandlas _ New Punjabi Song 2022 _ Punjabi Songs.mp3'),
      duration: "04:04"
    },
    {
      id: 3,
      title: "Burj Khalifa",
      artist: "Shashi-DJ Khushi ft Nikhita Gandhi",
      thumbnail: require('../../images/burj.jpeg'),
      src: require('../../audio/urjKhalifa.mp3'),
      duration: "03:07"
    },
    {
      id: 4,
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh ft Sweetaj Brar",
      thumbnail: require('../../images/care ni krda.jpeg'),
      src: require('../../audio/Care Ni Karda.mp3'),
      duration: "03:13"
    },
    {
      id: 5,
      title: "Kya Tum Naraz Ho",
      artist: "B Praak",
      thumbnail: require('../../images/ek bat.jpeg'),
      src: require('../../audio/ek baat batao tum yaadon mein marte ho, b praak new song, kya tum ab bhi humse mohabbat karte ho.mp3'),
      duration: "06:44"
    },
    {
      id: 6,
      title: "Evergreen",
      artist: "Jigar ft Kaptaan",
      thumbnail: require('../../images/evergreen.jpeg'),
      src: require('../../audio/Evergreen (Official Video) Jigar _ Kaptaan _ Desi Crew _ Nikkesha _ Latest Punjabi Songs 2021.mp3'),
      duration: "03:00"
    },
    {
      id: 7,
      title: "Ladeya Na Kar",
      artist: "Kaka",
      thumbnail: require('../../images/hijan.jpeg'),
      src: require('../../audio/pareshan hon di.mp3'),
      duration: "04:23"
    },
    {
      id: 8,
      title: "Izhaar",
      artist: "Gagan Deep Thamber",
      thumbnail: require('../../images/izhar.jpeg'),
      src: require('../../audio/Izhaar _ Gagan Deep Thamber _ Mistabaaz _ Punjabi Songs _  Gringo Entertainments.mp3'),
      duration: "04:21"
    },
    {
      id: 9,
      title: "Jai Jai Shivshankar",
      artist: "Vishal-Shekhar ft Benny Dayal, Neeti Mohan",
      thumbnail: require('../../images/jai jai.jpeg'),
      src: require('../../audio/Jai Jai Shivshankar _ 8D Audio _ Bass Boosted _ 3D Song _ War _ Teen D Network _ Outro Mussoorie.mp3'),
      duration: "04:38"
    },
    {
      id: 10,
      title: "Kana Yaari",
      artist: "Kaifi Khalil, Eva B, Abdul Wahab Bugti",
      thumbnail: require('../../images/kanayari.jpeg'),
      src: require('../../audio/Kana Yaari _ Kaifi Khalil x Eva B x Abdul Wahab Bugti.mp3'),
      duration: "04:05"
    },
    {
      id: 11,
      title: "Mast Nazron Se",
      artist: "Rochak Kohli ft Jubin Nautiyal",
      thumbnail: require('../../images/mast nazron.jpeg'),
      src: require('../../audio/Video_ Mast Nazron Se _ Rochak K ft Jubin Nautiyal, Nikita Dutta _ Manoj M _ Ashish P _ Bhushan K.mp3'),
      duration: "05:00"
    },
    {
      id: 12,
      title: "Main Yahaan Hoon",
      artist: "Udit Narayan",
      thumbnail: require('../../images/men yahan.jpeg'),
      src: require('../../audio/Main Yahaan Hoon Full Song Veer-Zaara Shah Rukh Khan, Preity Zinta Madan Mohan, Udit Nar.mp3'),
      duration: "04:56"
    },
    {
      id: 13,
      title: "Na Gal Mere Vas Di Rahi",
      artist: "Gur Sidhu",
      thumbnail: require('../../images/na gal meray.jpeg'),
      src: require('../../audio/Na Gal Mere Vas Di Rahi - Latest Punjabi Song - Udaarian.mp3'),
      duration: "05:39"
    },
    {
      id: 14,
      title: "Naach Meri Rani",
      artist: "Guru Randhawa ft Nora Fatehi",
      thumbnail: require('../../images/nach meri.jpeg'),
      src: require('../../audio/Naach Meri Rani.mp3'),
      duration: "03:32"
    },
    {
      id: 15,
      title: "Kehndi Hundi Si",
      artist: "Taare Ne Pasand Mainu",
      thumbnail: require('../../images/pata lagu.jpeg'),
      src: require('../../audio/Kehndi Hundi Si Chan Tak Raah Bana De (Official Video) _ Reels Hits Song _ Taare Ne Pasand Mainu.mp3'),
      duration: "03:47"
    },
    {
      id: 16,
      title: "Rafta Rafta",
      artist: "TikTok Trending Remix",
      thumbnail: require('../../images/rafta.jpeg'),
      src: require('../../audio/Rafta Rafta Woh Meri Remix (Trophical Mix) _ TikTok Trending Remix.mp3'),
      duration: "04:56"
    },
    {
      id: 17,
      title: "Saawariya",
      artist: "Kumar Sanu ft Aastha Gill",
      thumbnail: require('../../images/sanvariya.jpeg'),
      src: require('../../audio/Kumar Sanu & Aastha Gill_ Saawariya _ Arjun Bijlani _ Official Video _ Latest Dance Song 2021.mp3'),
      duration: "03:33"
    },
    {
      id: 19,
      title: "Glock",
      artist: "Shivjot ft Gurlej Akhtar",
      thumbnail: require('../../images/shivjot.jpeg'),
      src: require('../../audio/Shivjot_ Glock (Full Song) Gurlej Akhtar _ The Boss _ New Punjabi Songs 2021.mp3'),
      duration: "05:01"
    },
    {
      id: 20,
      title: "Tich Button",
      artist: "Simar Sehajpal",
      thumbnail: require('../../images/tich button.jpeg'),
      src: require('../../audio/Tich_Button_Cover_Song_-_Simar_Se_(getmp3.pro).mp3'),
      duration: "03:27"
    },
    {
      id: 21,
      title: "Titliaan Warga",
      artist: "Harrdy Sandhu",
      thumbnail: require('../../images/titliyan.jpeg'),
      src: require('../../audio/Titliaan Warga.mp3'),
      duration: "03:48"
    },
    {
      id: 22,
      title: "Toma Tussi",
      artist: "Sözer Sepetci",
      thumbnail: require('../../images/toma.jpeg'),
      src: require('../../audio/TomaTussi.mp3'),
      duration: "02:39"
    },
    {
      id: 23,
      title: "Tumse Pyaar Karke",
      artist: "Jubin Nautiyal ft Tulsi Kumar",
      thumbnail: require('../../images/tumse.jpeg'),
      src: require('../../audio/Tumse Pyaar Karke (Video) Tulsi Kumar, Jubin N, Gurmeet C, Ihana D, Payal, Kunaal, Navjit, Bhushan K.mp3'),
      duration: "04:23"
    },
    {
      id: 24,
      title: "Yarri Yeah",
      artist: "Mickey Singh ft Nani",
      thumbnail: require('../../images/yari yeah.jpeg'),
      src: require('../../audio/Yarri Yeah (Official Video) _ Mickey Singh Ft. Nani (Anjali) _ New Latest Punjabi Song 2018.mp3'),
      duration: "04:33"
    },
  ];
  
  export default Data;
  