//import Images
import metamask from "../../assets/images/nft/wallet/metamask.png";
import coinbase from "../../assets/images/nft/wallet/coinbase.png";
import binance from "../../assets/images/nft/wallet/binance.png";

import wallet from "../../assets/images/nft/wallet.png";
import money from "../../assets/images/nft/money.png";
import add from "../../assets/images/nft/add.png";
import sell from "../../assets/images/nft/sell.png";

import avatar02 from "../../assets/images/users/avatar-2.jpg";
import avatar05 from "../../assets/images/users/avatar-5.jpg";
import avatar08 from "../../assets/images/users/avatar-8.jpg";
import avatar09 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

import img01 from "../../assets/images/nft/img-01.jpg";
import img02 from "../../assets/images/nft/img-02.jpg";
import img03 from "../../assets/images/nft/img-03.jpg";
import img05 from "../../assets/images/nft/img-05.jpg";
import img06 from "../../assets/images/nft/img-06.jpg";


import placeholder_possibilities from "../../assets/images/home/img_summit1.png";

import summit1 from "../../assets/images/home/img_summit1.png";
import summit2 from "../../assets/images/home/img_summit2.png";
import summit3 from "../../assets/images/home/img_summit3.png";
import summit4 from "../../assets/images/home/img_summit4.png";

import latest1 from "../../assets/images/home/img_latest1.png";
import latest2 from "../../assets/images/home/img_latest2.png";
import latest3 from "../../assets/images/home/img_latest3.png";
import latest4 from "../../assets/images/home/img_latest4.png";

//Speakers
import speaker1 from "../../assets/images/home/img_boye.png";
import speaker2 from "../../assets/images/home/img_abu_suleiman.png";
import speaker3 from "../../assets/images/home/img_bayo.png";
import speaker4 from "../../assets/images/home/img_iyinoluwa.png";
import speaker5 from "../../assets/images/home/speaker5.png";
import speaker6 from "../../assets/images/home/speaker6.png";

//Partners
import partner1 from "../../assets/images/home/partner1.png";
import partner2 from "../../assets/images/home/partner2.png";
import partner3 from "../../assets/images/home/partner3.png";
import partner4 from "../../assets/images/home/partner4.png";

//Profile
import profile_boye from '../../assets/images/profile/img_profile_boye.png';

// import img04 from "../../assets/images/nft/gif/img-4.gif";
// import gifImg01 from "../../assets/images/nft/gif/img-1.gif";

const connectData = [
    {
        img: summit1,
        title: "Expand Your Network",
        textContent: "Maximize your conference experience by connecting with industry leaders, innovators, and peers.",
        rowType: 0
    },
    {
        img: summit2,
        title: "Build Partnerships",
        textContent: "Forge meaningful partnerships that can drive your business forward.",
        rowType: 1
    },
    {
        img: summit3,
        title: "Collaborate for the Future",
        textContent: "Join forces with innovators, leaders, and visionaries to shape the future of financial services.",
        rowType: 1
    },
    {
        img: summit4,
        title: "Explore New Technologies",
        textContent: "Discover the latest advancements in financial technology and learn how they can transform your business.",
        rowType: 1
    },
];


const latestData = [
    {
        img: latest1,
        title: "Expert Presentations",
        textContent: "Examine how fintech innovations are making financial services more accessible to underserved populations.",
    },
    {
        img: latest2,
        title: "Roundtables",
        textContent: "Examine how fintech innovations are making financial services more accessible to underserved populations.",
    },
    {
        img: latest3,
        title: "Study Tour/ Field Visit",
        textContent: "Examine how fintech innovations are making financial services more accessible to underserved populations.",
    },
    {
        img: latest4,
        title: "Specialized Workshops",
        textContent: "Examine how fintech innovations are making financial services more accessible to underserved populations.",
    },
];

const whatIsData = [
    {
        title: "Digital Business Models",
    },
    {
        title: "Customer Experience",
    },
    {
        title: "Financial Technology",
    },
    {
        title: "Artificial Intelligence",
    },
    {
        title: "Distribution Models",
    },

];

const numbersData = [
    {
        value: "12,000",
        caption: "Participants",
        color: "#FF0000",
    },
    {
        value: "20",
        caption: "Speakers",
        color: "#990001",
    },
    {
        value: "75",
        caption: "Partners",
        color: "#6C6CFB",
    },
    {
        value: "62",
        caption: "Pitches",
        color: "#66FFCC",
    },
    {
        value: "8",
        caption: "Countries",
        color: "#34CC33",
    },
    {
        value: "38",
        caption: "Regulatory & Government Organizations",
        color: "#7500BC",
    },
];


const partnerImgsData = [

    {
        img: partner1,
    },
    {
        img: partner4,
    },
    {
        img: partner2,
    },
    {
        img: partner3,
    },

]

const discoverItemsData = [
    {
        id: 1,
        cardImg: avatar02,
        author: "Nancy Martino",
        title: "Owners",
        img: img05,
        likes: "19.29k",
        price: "97.8 ETH",
        category: "Patterns arts & culture",
    },
    {
        id: 2,
        cardImg: avatar09,
        author: "Henry Baird",
        title: "Creators",
        img: img03,
        likes: "31.64k",
        price: "475.23 ETH",
        category: "Evolved Reality",
        isIcon: true,
    },
    {
        id: 3,
        cardImg: avatar10,
        author: "Diana Kohler",
        title: "Owners",
        img: "https://img.themesbrand.com/velzon/images/img-1.gif",
        likes: "8.34k",
        price: "701.38 ETH",
        category: "Long-tailed macaque",
    },
];

const speakersData = [
    {
        img: speaker1,
        name: "Boye Ademola",
        credentials: "Co-Founder, Bazara",
    },
    {
        img: speaker2,
        name: "Abubakar Suleiman",
        credentials: "CEO, Sterling Bank",
    },
    {
        img: speaker3,
        name: "Bayo Adekanmbi",
        credentials: "Founder/CEO, DSNai",
    },
    {
        img: speaker4,
        name: "Iyinoluwa Aboyeji",
        credentials: "Founding Partner, Future Africa",
    },
    {
        img: speaker5,
        name: "Funke Adebayo",
        credentials: "President, First Bank Nigeria",
    },
    {
        img: speaker6,
        name: "Yewande Akinyi",
        credentials: "Founder, AfriTech Solutions",
    },
]

const speakersFullData = [
    {
        id: 1,
        img: speaker1,
        pic: profile_boye,
        name: "Boye Ademola",
        tags: ["distribution-models", "digital-business-models"],
        credentials: "Co-Founder, Bazara",
        courses: [
            {
                title: "The Impact of Quantum Computing on Fianancial Services", 
                date: "Tuesday 14 October 2024",
                time: "13:00 - 15:30"
            },
            {
                title: "The Impact of AI on Ditribution Models", 
                date: "Tuesday 14 October 2024",
                time: "16:00 - 17:00"
            }
            
        ],
        bio: "is a visionary leader and the CEO of Zenith Innovations, a cutting-edge technology firm revolutionizing the financial services industry in Nigeria and beyond. With over 15 years of experience in the fintech sector, Jimmy has a proven track record of driving digital transformation and fostering innovation. Under his leadership, Zenith Innovations has developed several groundbreaking solutions that streamline financial operations and enhance customer experiences. Jimmy is known for his strategic thinking, exceptional management skills, and commitment to leveraging technology to solve complex financial challenges. He holds a Master's degree in Business Administration from Lagos Business School and a Bachelor's degree in Computer Science from Obafemi Awolowo University, Ile-Ife. Jimmy is a frequent speaker at industry conferences and a passionate advocate for the role of technology in financial inclusion."
    },
    {
        id: 2,
        img: speaker2,
        pic: speaker2,
        name: "Abubakar Suleiman",
        tags: ["fintech", "customer-experience", "distribution-models"],
        credentials: "CEO, Sterling Bank",
        courses: [
            {
                title: "Customer Experience Through Leadership", 
                date: "Tuesday 14 October 2024",
                time: "15:35 - 16:00"
            },
            
        ],
        bio: "is a visionary leader and the CEO of Zenith Innovations, a cutting-edge technology firm revolutionizing the financial services industry in Nigeria and beyond. With over 15 years of experience in the fintech sector, Jimmy has a proven track record of driving digital transformation and fostering innovation. Under his leadership, Zenith Innovations has developed several groundbreaking solutions that streamline financial operations and enhance customer experiences. Jimmy is known for his strategic thinking, exceptional management skills, and commitment to leveraging technology to solve complex financial challenges. He holds a Master's degree in Business Administration from Lagos Business School and a Bachelor's degree in Computer Science from Obafemi Awolowo University, Ile-Ife. Jimmy is a frequent speaker at industry conferences and a passionate advocate for the role of technology in financial inclusion."

    },
    {
        id: 3,
        img: speaker3,
        pic: speaker3,
        name: "Bayo Adekanmbi",
        tags: ["artificial-intelligence"],
        credentials: "Founder/CEO, DSNai",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55"
            },
            
        ],
        bio: "is a visionary leader and the CEO of Zenith Innovations, a cutting-edge technology firm revolutionizing the financial services industry in Nigeria and beyond. With over 15 years of experience in the fintech sector, Jimmy has a proven track record of driving digital transformation and fostering innovation. Under his leadership, Zenith Innovations has developed several groundbreaking solutions that streamline financial operations and enhance customer experiences. Jimmy is known for his strategic thinking, exceptional management skills, and commitment to leveraging technology to solve complex financial challenges. He holds a Master's degree in Business Administration from Lagos Business School and a Bachelor's degree in Computer Science from Obafemi Awolowo University, Ile-Ife. Jimmy is a frequent speaker at industry conferences and a passionate advocate for the role of technology in financial inclusion."

    },
    {
        id: 4,
        img: speaker4,
        pic: speaker4,
        name: "Iyinoluwa Aboyeji",
        tags: ["digital-business-models", "fintech"],
        credentials: "Founding Partner, Future Africa",
        courses: [
            {
                title: "Technologies Powering Financial Services", 
                date: "Wednesday 15 October 2024",
                time: "13:00 - 13:45"
            },
            
        ],
        bio: "is a visionary leader and the CEO of Zenith Innovations, a cutting-edge technology firm revolutionizing the financial services industry in Nigeria and beyond. With over 15 years of experience in the fintech sector, Jimmy has a proven track record of driving digital transformation and fostering innovation. Under his leadership, Zenith Innovations has developed several groundbreaking solutions that streamline financial operations and enhance customer experiences. Jimmy is known for his strategic thinking, exceptional management skills, and commitment to leveraging technology to solve complex financial challenges. He holds a Master's degree in Business Administration from Lagos Business School and a Bachelor's degree in Computer Science from Obafemi Awolowo University, Ile-Ife. Jimmy is a frequent speaker at industry conferences and a passionate advocate for the role of technology in financial inclusion."

    },
]

const agendaData = [
    {
        id: 1,
        date: "Tue, 08 Oct",
        time: "8:00AM",
        dateCode: "Tue",
        duration: "60",
        topic: "Registration and Welcome Address",
        theme: null,
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 2,
        date: "Tue, 08 Oct",
        time: "9:00AM",
        dateCode: "Tue",
        duration: "20",
        topic: "Welcome Address/Opening Remarks",
        theme: null,
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 3,
        date: "Tue, 08 Oct",
        time: "9:20AM",
        dateCode: "Tue",
        duration: "30",
        topic: "Keynote Presentation on Digital Business Models",
        theme:  "digital-business-models",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 4,
        date: "Tue, 08 Oct",
        time: "9:55AM",
        dateCode: "Tue",
        duration: "50",
        topic: "Panel Session on Digital Business Models",
        theme:  "digital-business-models",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 5,
        date: "Tue, 08 Oct",
        time: "10:50AM",
        dateCode: "Tue",
        duration: "30",
        topic: "Keynote Presentation on Distribution Models",
        theme:  "distribution-models",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 6,
        date: "Tue, 08 Oct",
        time: "11:25AM",
        dateCode: "Tue",
        duration: "20",
        topic: "Fire Chat on Distribution Models",
        theme:  "distribution-models",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 7,
        date: "Tue, 08 Oct",
        time: "1:10PM",
        dateCode: "Tue",
        duration: "30",
        topic: "Keynote Presentation on Customer Experience",
        theme:  "customer-experience",
        speaker: [
            {
                img: speaker2,
                pic: speaker2,
                name: "Abubakar Suleiman",
                tags: ["fintech", "customer-experience", "distribution-models"],
                credentials: "CEO, Sterling Bank",
            }
           
        ]
    },
    {
        id: 8,
        date: "Tue, 08 Oct",
        time: "2:30PM",
        dateCode: "Tue",
        duration: "50",
        topic: "Panel Session on Customer Experience",
        theme:  "customer-experience",
        speaker: [
            {
                img: speaker2,
                pic: speaker2,
                name: "Abubakar Suleiman",
                tags: ["fintech", "customer-experience", "distribution-models"],
                credentials: "CEO, Sterling Bank",
            }
           
        ]
    },
    {
        id: 9,
        date: "Wed, 09 Oct",
        time: "8:00AM",
        dateCode: "Wed",
        duration: "60",
        topic: "Breakfast Networking",
        theme: null,
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: profile_boye,
                credentials: "Co-Founder, Bazara",
                tags: ["distribution-models", "digital-business-models"],
            }
           
        ]
    },
    {
        id: 10,
        date: "Wed, 09 Oct",
        time: "9:00AM",
        dateCode: "Wed",
        duration: "60",
        topic: "Keynote Presentation on Artificial Intelligence",
        theme: "artificial-intelligence",
        speaker: [
            {
                img: speaker3,
                pic: speaker3,
                name: "Bayo Adekanmbi",
                tags: ["artificial-intelligence"],
                credentials: "Founder/CEO, DSNai",
            }
           
        ]
    },
    {
        id: 11,
        date: "Wed, 09 Oct",
        time: "10:50AM",
        dateCode: "Wed",
        duration: "10",
        topic: "Lauch of Artificial Intelligence Thought Leadership",
        theme: "artificial-intelligence",
        speaker: [
            {
                img: speaker3,
                pic: speaker3,
                name: "Bayo Adekanmbi",
                tags: ["artificial-intelligence"],
                credentials: "Founder/CEO, DSNai",
            }
           
        ]
    },
    {
        id: 12,
        date: "Wed, 09 Oct",
        time: "3:15PM",
        dateCode: "Wed",
        duration: "60",
        topic: "Keynote Presentation on Technologies Powering Financial Services",
        theme: "fintech",
        speaker: [
            {
                img: speaker4,
                pic: speaker4,
                name: "Iyinoluwa Aboyeji",
                tags: ["digital-business-models", "fintech"],
                credentials: "Founding Partner, Future Africa",
            }
           
        ]
    },

]

const faqData = [
    {
        id: "1",
        label: 'What is the date and location of the conference?',
        content: 'The conference is taking place from the 8th - 10th October 2024 at L39 Canary Wharf, London.',
    },
    {
        id: "2",
        label: 'Who should attend the conference?',
        content: 'The conference is ideal for professionals in the finacial technology industry',
    },	
    {
        id: "3",
        label: 'Will session recordings be available after the conference?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },
];


const faqFullData = [
    {
        id: "1",
        label: 'What is the date and location of the conference?',
        content: 'The conference is taking place from the 8th - 10th October 2024 at L39 Canary Wharf, London.',
    },
    {
        id: "2",
        label: 'Who should attend the conference?',
        content: 'The conference is ideal for professionals in the finacial technology industry',
    },	
    {
        id: "3",
        label: 'Will session recordings be available after the conference?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },

    {
        id: "4",
        label: 'How can I become a sponsor for the conference?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },


    {
        id: "5",
        label: 'Will there be opportunities for networking?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },

    {
        id: "6",
        label: 'What topics will be covered in the conference sessions?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },

    {
        id: "7",
        label: 'Can I get a refund if I’m unable to attend?',
        content: `Yes we will provide a section to view previous activities in our coferences. That is videos and in writing`,
    },
];

const featuresData = [
    {
        img: wallet,
        title: "Set up your wallet",
        textConent: "You have to choose whether to use a hot wallet a cold wallet.",
    },
    {
        img: money,
        title: "Create your collection",
        textConent: "Create a collection in Opensea and give it a proper art.",
    },
    {
        img: add,
        title: "Add your NFT's",
        textConent: "Go to your profile icon and top right corner creation page.",
    },
    {
        img: sell,
        title: "Sell Your NFT's",
        textConent: "Create a collection in Opensea and give Add items and art.",
    },
]

const productData = [
    {
        id: 1,
        img: img03,
        likes: "19.29k",
        title: "Creative Filtered Portrait",
        category: "Photography",
        highest: "75.3ETH",
        price: "67.36 ETH",
        isClass: "artwork crypto-card 3d-style",
        categories: "artwork",
    },
    {
        id: 2,
        img: img02,
        likes: "23.63k",
        title: "The Chirstoper",
        category: "Music",
        highest: "412.30ETH",
        price: "394.7 ETH",
        isClass: "music crypto-card games",
        categories: "crypto-card",
    },
    {
        id: 3,
        img: "https://img.themesbrand.com/velzon/images/img-4.gif",
        likes: "15.93k",
        title: "Evolved Reality",
        category: "Video",
        highest: "2.75ETH",
        price: "3.167 ETH",
        isClass: "artwork music games",
        categories: "artwork",
    },
    {
        id: 4,
        img: img01,
        likes: "14.85k",
        title: "Abstract Face Painting",
        category: "Collectibles",
        highest: "122.34ETH",
        price: "97.8 ETH",
        isClass: "crypto-card 3d-style",
        categories: "3d-style",
    },
    {
        id: 5,
        img: img05,
        likes: "64.10k",
        title: "Long-tailed Macaque",
        category: "Artwork",
        highest: "874.01ETH",
        price: "745.14 ETH",
        isClass: "games music 3d-style",
        categories: "music",
    },
    {
        id: 6,
        img: img06,
        likes: "36.42k",
        title: "Robotic Body Art",
        category: "Artwork",
        highest: "41.658 ETH",
        price: "34.81 ETH",
        isClass: "artwork music crypto-card",
        categories: "games",
    },
];

const topCreatorData = [
    {
        id: 1,
        img: img01,
        title: "Timothy Smith",
        price: "4,754 ETH",
    },
    {
        id: 2,
        img: avatar05,
        title: "Alexis Clarke",
        price: "81,369 ETH",
    },
    {
        id: 3,
        img: img06,
        title: "Glen Matney",
        price: "13,156 ETH",
    },
    {
        id: 4,
        img: img05,
        title: "Herbert Stokes",
        price: "34,754 ETH",
    },
    {
        id: 5,
        img: avatar08,
        title: "Michael Morris",
        price: "13,841 ETH",
    },
    {
        id: 6,
        img: img02,
        title: "James Morris",
        price: "63,710 ETH",
    },
];

export {connectData, discoverItemsData, featuresData, speakersData, productData, topCreatorData, whatIsData, numbersData, partnerImgsData, latestData, faqData, faqFullData, speakersFullData, agendaData}