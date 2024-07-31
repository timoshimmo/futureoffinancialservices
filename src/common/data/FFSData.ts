//import wallet from "../../assets/images/nft/wallet.png";
//import money from "../../assets/images/nft/money.png";
//import add from "../../assets/images/nft/add.png";
//import sell from "../../assets/images/nft/sell.png";

import avatar02 from "../../assets/images/users/avatar-2.jpg";
import avatar05 from "../../assets/images/users/avatar-5.jpg";
import avatar08 from "../../assets/images/users/avatar-8.jpg";
import avatar09 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

//import img01 from "../../assets/images/nft/img-01.jpg";
//import img02 from "../../assets/images/nft/img-02.jpg";
//import img03 from "../../assets/images/nft/img-03.jpg";
//import img05 from "../../assets/images/nft/img-05.jpg";
//import img06 from "../../assets/images/nft/img-06.jpg";

import summit1 from "../../assets/images/home/img_one_summit1.png";
import summit2 from "../../assets/images/home/img_one_summit2.png";
import summit3 from "../../assets/images/home/img_one_summit3.png";
import summit4 from "../../assets/images/home/img_one_summit4.png";

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
//import partner1 from "../../assets/images/home/partner1.png";
import partner2 from "../../assets/images/home/partner2.png";
import partner3 from "../../assets/images/home/partner3.png";

import partnerBazara from "../../assets/images/brands/img_bazara_logo.png";
//import partner4 from "../../assets/images/home/partner4.png";

//Profile
//import profile_boye from '../../assets/images/profile/img_profile_boye.png';

// import img04 from "../../assets/images/nft/gif/img-4.gif";
// import gifImg01 from "../../assets/images/nft/gif/img-1.gif";

const connectData = [
    {
        img: summit1,
        title: "Expand Your Network",
        textContent: "Maximize your conference experience by connecting with industry leaders, innovators, and peers.",
        rowIndex: 0
    },
    {
        img: summit2,
        title: "Build Partnerships",
        textContent: "Forge meaningful partnerships that can drive your business forward.",
        rowIndex: 2
    },
    {
        img: summit3,
        title: "Collaborate for the Future",
        textContent: "Join forces with innovators, leaders, and visionaries to shape the future of financial services.",
        rowIndex: 3
    },
    {
        img: summit4,
        title: "Explore New Technologies",
        textContent: "Discover the latest advancements in financial technology and learn how they can transform your business.",
        rowIndex: 4
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
        value: "300",
        caption: "Participants",
        color: "#FF0000",
    },
    {
        value: "62",
        caption: "Sessions",
        color: "#990001",
    },
    {
        value: "20",
        caption: "Speakers",
        color: "#66FFCC",
    },
    {
        value: "8",
        caption: "Countries",
        color: "#34CC33",
    },
];

  /* {
        img: partner1,
    },
    {
        img: partner4,
    },
    */

const partnerImgsData = [
    {
        img: partnerBazara,
    },
    {
        img: partnerBazara,
    },

]

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
        pic: speaker1,
        name: "Boye Ademola",
        tags: ["distribution-models", "digital-business-models"],
        credentials: "Co-Founder",
        company: "Bazara",
        courses: [
            {
                title: "The Impact of Quantum Computing on Fianancial Services", 
                date: "Tuesday 14 October 2024",
                time: "13:00 - 15:30",
                tags: ["fintech"],
            },
            {
                title: "The Impact of AI on Ditribution Models", 
                date: "Tuesday 14 October 2024",
                time: "16:00 - 17:00",
                tags: ["distribution-models", "artificial-intelligence"],
            }
            
        ],
        bio: "is the Founder/CEO of Bazara Technologies Inc., a software engineering & systems integration firm carving a niche for taking on audacious innovation projects in the B2B space. \nBazara is reimagining and re-engineering core banking systems leveraging UI/UX, Microservices, APIs, AI & the cloud. \n\nPrior to Bazara, Boye was Partner and Head of Digital Transformation at KPMG in Africa, where he led digital strategy, AI implementation and cloud transformation projects for large corporates. \nHe served on KPMG’s Global Digital Transformation Leadership, Global Fintech Leadership and is an adviser to banks, Fintechs, FS players and regulators on the future of financial services."
    },
    {
        id: 2,
        img: speaker2,
        pic: speaker2,
        name: "Abubakar Suleiman",
        tags: ["fintech", "customer-experience", "distribution-models"],
        credentials: "CEO",
        company: "Sterling Bank",
        courses: [
            {
                title: "Customer Experience Through Leadership", 
                date: "Tuesday 14 October 2024",
                time: "15:35 - 16:00",
                tags: ["customer-experience"],
            },
            
        ],
        bio: "Abubakar Suleiman is an economist and banker with over 20 years of experience in consulting and financial services. As CEO of Sterling Bank Plc, he focuses on optimizing financial intermediation in key sectors: Health, Education, Agriculture, Renewable Energy, and Transportation (H.E.A.R.T). \nPreviously, he served as Executive Director and CFO of Sterling Bank and led its non-interest banking business. \n\nAbubakar holds a B.Sc. in Economics from the University of Abuja and an M.Sc. in Major Programme Management from the University of Oxford. He has also worked in tax advisory at Arthur Andersen and financial markets at Citibank Nigeria. Abubakar serves on the boards of Noor Takaful and the Nigerian Economic Summit Group (NESG)."

    },
    {
        id: 3,
        img: speaker3,
        pic: speaker3,
        name: "Bayo Adekanmbi",
        tags: ["artificial-intelligence"],
        credentials: "Founder/CEO",
        company: "DSNai",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55",
                tags: ["artificial-intelligence"],
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
        credentials: "Founding Partner",
        company: "Future Africa",
        courses: [
            {
                title: "Technologies Powering Financial Services", 
                date: "Wednesday 15 October 2024",
                time: "13:00 - 13:45",
                tags: ["fintech"],
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
        type: "Welcome Address",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        type: "Welcome Address",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme:  ["digital-business-models"],
        type: "Keynote Presentation",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme:  ["digital-business-models"],
        type: "Panel Session",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme:  ["distribution-models"],
        type: "Keynote Presentation",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme:  ["distribution-models"],
        type: "Fireside Chat",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme: ["customer-experience"],
        type: "Keynote Presentation",
        speaker: [
            {
                img: speaker2,
                pic: speaker2,
                name: "Abubakar Suleiman",
                tags: ["fintech", "customer-experience", "distribution-models"],
                credentials: "CEO",
                company: " Sterling Bank",
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
        theme:  ["customer-experience"],
        type: "Panel Session",
        speaker: [
            {
                img: speaker2,
                pic: speaker2,
                name: "Abubakar Suleiman",
                tags: ["fintech", "customer-experience", "distribution-models"],
                credentials: "CEO",
                company: " Sterling Bank",
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
        type: "Networking",
        speaker: [
            {
                name: "Boye Ademola",
                img: speaker1,
                pic: speaker1,
                credentials: "Co-Founder",
                company: "Bazara",
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
        theme: ["artificial-intelligence"],
        type: "Keynote Presentation",
        speaker: [
            {
                img: speaker3,
                pic: speaker3,
                name: "Bayo Adekanmbi",
                tags: ["artificial-intelligence"],
                credentials: "Founder/CEO",
                company: "DSNai",
            }
           
        ]
    },
    {
        id: 11,
        date: "Wed, 09 Oct",
        time: "10:50AM",
        dateCode: "Wed",
        duration: "10",
        topic: "Launch of Artificial Intelligence Thought Leadership",
        theme: ["artificial-intelligence"],
        type: "Roundtable",
        speaker: [
            {
                img: speaker3,
                pic: speaker3,
                name: "Bayo Adekanmbi",
                tags: ["artificial-intelligence"],
                credentials: "Founder/CEO",
                company: "DSNai",
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
        theme: ["fintech"],
        type: "Keynote Presentation",
        speaker: [
            {
                img: speaker4,
                pic: speaker4,
                name: "Iyinoluwa Aboyeji",
                tags: ["digital-business-models", "fintech"],
                credentials: "Founding Partner",
                company: "Future Africa",
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


export {connectData, speakersData, whatIsData, numbersData, partnerImgsData, latestData, faqData, faqFullData, speakersFullData, agendaData}