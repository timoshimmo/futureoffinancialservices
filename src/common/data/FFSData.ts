//import wallet from "../../assets/images/nft/wallet.png";
//import money from "../../assets/images/nft/money.png";
//import add from "../../assets/images/nft/add.png";
//import sell from "../../assets/images/nft/sell.png";

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
import img_boye from "../../assets/images/home/img_boye.png";
import img_abu_suleiman from "../../assets/images/home/img_abu_suleiman.png";
import img_bayo from "../../assets/images/home/img_bayo.png";
import img_iyinoluwa from "../../assets/images/home/img_iyinoluwa.jpeg";
import img_marie from "../../assets/images/speakers/img_marie.png";
import img_sabrina from "../../assets/images/speakers/img_sabrina.png";
import img_meaghan from "../../assets/images/speakers/img_meaghan.png";
import img_abdullo from "../../assets/images/speakers/img_abdullo.png";
import speaker5 from "../../assets/images/home/speaker5.png";
import speaker6 from "../../assets/images/home/speaker6.png";

//Partners
//import partner1 from "../../assets/images/home/partner1.png";
import partner2 from "../../assets/images/home/partner2.png";
import partner3 from "../../assets/images/home/partner3.png";

import partnerBazara from "../../assets/images/brands/img_bazara_logo.png";
import partnersPeerless from "../../assets/images/brands/peerless_logo_light.svg";
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
        img: partnersPeerless,
    },

]

const speakersData = [
    {
        img: img_sabrina,
        name: "Sabrina Del Prete",
        credentials: "Founder, KORE"
    },
    {
        img: img_iyinoluwa,
        name: "Iyinoluwa Aboyeji",
        credentials: "Founding Partner, Future Africa",
    },
    {
        img: img_marie,
        name: "Marie Walker",
        credentials: "Open Futurist, Radiam",
    },
    {
        img: img_abu_suleiman,
        name: "Abubakar Suleiman",
        credentials: "CEO, Sterling Bank",
    },
    {
        img: img_abdullo,
        name: "Abdullo Kurbanov",
        credentials: "Co-Founder, Ayan Capital and Alif Bank"
    },
    {
        img: img_boye,
        name: "Boye Ademola",
        credentials: "Founder/CEO, Bazara",
    },
    {
        img: img_bayo,
        name: "Bayo Adekanmbi",
        credentials: "Founder/CEO, DSNai",
    },
    {
        img: img_meaghan,
        name: "Meaghan Johnson",
        credentials: "Convener/CEO, FFS"
    },
]

const speakersFullData = [

    {
        id: 6,
        img: img_sabrina,
        pic: img_sabrina,
        name: "Sabrina Del Prete",
        tags: ["artificial-intelligence"],
        credentials: "Founder",
        company: "KORE",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55",
                tags: ["artificial-intelligence"],
            },
            
        ],
        bio: "is a business transformation expert, digital strategist, and fintech entrepreneur with over 30 years of experience in international financial services. As the Founder and CEO of Kore Labs, she drives innovation by digitizing financial product data through a cloud-enabled platform. \n\nSabrina has held senior roles at JP Morgan Chase, Barclays, and RBS Group, where she served as Chief Digital Transformation Officer. She sits on the Board of Governors of the London Foundation of Banking and Finance and has received multiple innovation awards, including the EISA Entrepreneur of the Year in 2023. \n\nSabrina holds a Master's in Finance from London Business School and a degree in Business and Economics from the University of Turin. "
    },
    {
        id: 4,
        img: img_iyinoluwa,
        pic: img_iyinoluwa,
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
        bio: "is a renowned African entrepreneur and visionary. He co-founded Flutterwave, an integrated payments platform that processed over $2.5 billion in transactions and raised a $250 million Series D that valued the company at $3 billion in February 2022. \n\nIyin also co-founded Andela, which develops Africa's top software engineers and has raised significant capital. Currently, he is a Founding Partner at Future Africa, empowering visionary leaders to turn Africa's biggest challenges into business opportunities. His work focuses on technological innovation, sustainable development, and empowering African talent."

    },
    {
        id: 3,
        img: img_marie,
        pic: img_marie,
        name: "Marie Walker",
        tags: ["artificial-intelligence"],
        credentials: "Open Futurist",
        company: "Radiam",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55",
                tags: ["artificial-intelligence"],
            },
            
        ],
        bio: "is an influential figure in open finance and open banking, serving as an Open Futurist at Raidiam. \nShe has authored modules and tutored courses at Cambridge University's Open Banking and Open Finance program. \n\nAs curator of open-conversations.org, she provides insights into global open data trends. Marie is also an expert contributor to the UK's Smart Data Council on Trust, Compliance, and Consumer Protection. With over 20 years of experience, she has been a driving force behind key data sharing ecosystems globally, including the UK's open banking trust framework and Brazil's open finance infrastructure."
    },
    {
        id: 2,
        img: img_abu_suleiman,
        pic: img_abu_suleiman,
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
        bio: "is an economist and banker with over 20 years of experience in consulting and financial services. As CEO of Sterling Bank Plc, he focuses on optimizing financial intermediation in key sectors: Health, Education, Agriculture, Renewable Energy, and Transportation (H.E.A.R.T). \n\nPreviously, he served as Executive Director and CFO of Sterling Bank and led its non-interest banking business. Abubakar holds a B.Sc. in Economics from the University of Abuja and an M.Sc. in Major Programme Management from the University of Oxford. \n\nHe has also worked in tax advisory at Arthur Andersen and financial markets at Citibank Nigeria. Abubakar serves on the boards of Noor Takaful and the Nigerian Economic Summit Group (NESG)."

    },
    {
        id: 8,
        img: img_abdullo,
        pic: img_abdullo,
        name: "Abdullo Kurbanov ",
        tags: ["artificial-intelligence"],
        credentials: "Co-Founder",
        company: "Ayan Capital and Alif Bank",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55",
                tags: ["artificial-intelligence"],
            },
            
        ],
        bio: "is the co-founder of Ayan and Alif Bank, focusing on Islamic finance, technology, education, and youth. With a team of over 1100, Alif Bank leads in POS-financing, mobile payments, Visa payments, and e-commerce in Tajikistan and Uzbekistan, serving 2 million clients. \n\nHe has driven the development of in-house banking technologies and launched Alif Academy, teaching over 2000 students. He is also the co-founder and CEO of Ayan Capital, providing vehicle finance in London. \n\nAbdullo holds an MS in Finance from LSE and has studied fintech and blockchain technologies at Harvard and Wharton."
    },
    {
        id: 1,
        img: img_boye,
        pic: img_boye,
        name: "Boye Ademola",
        tags: ["distribution-models", "digital-business-models"],
        credentials: "Founder/CEO",
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
        bio: "is the Founder/CEO of Bazara Technologies Inc., a software engineering & systems integration firm carving a niche for taking on audacious innovation projects in the B2B space. Bazara is reimagining and re-engineering systems that power financial services leveraging UI/UX, Microservices, APIs, AI & the cloud.\n\nPrior to Bazara, Boye was Partner and Head of Digital Transformation at KPMG in Africa, where he led digital strategy, AI implementation and cloud transformation projects for large corporates. \n\nHe served on KPMG’s Global Digital Transformation Leadership, Global Fintech Leadership and is an adviser to banks, Fintechs, FS players and regulators on the future of financial services."
    },
    {
        id: 5,
        img: img_bayo,
        pic: img_bayo,
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
        bio: "is an award-winning executive with over 22 years of experience in AI, Data Science, and Digital Innovation across 30 African markets. \n\nHe won the Bill and Melinda Gates Global Grand Challenge for AI-enabled financial tools and led five UNESCO/IRCAI Top 100 AI products. A top-ranking data scientist and prolific researcher, he has advanced education from prestigious institutions and a PhD from City, University of London. \n\nBayo also founded Data Scientist Network, training over 500,000 students and authored Africa's first AI book for kids."
    },
    {
        id: 7,
        img: img_meaghan,
        pic: img_meaghan,
        name: "Meaghan Johnson",
        tags: ["artificial-intelligence"],
        credentials: "Convener/CEO",
        company: "FFS",
        courses: [
            {
                title: "Insights From The Artificial Intelligence TL", 
                date: "Wednesday 15 October 2024",
                time: "11:00 - 11:55",
                tags: ["artificial-intelligence"],
            },
            
        ],
        bio: "is the CEO, FFS and the convener of the FFS Summit. She is an independent consultant to banks, fintechs, and regulators on digital transformation and customer experience.\n\n With over 10 years in digital banking and fintech, she founded Digital Magss, advising on product development and strategic partnerships.\n\nMeaghan is a Senior Lecturer at CFTE, a Subject Matter Expert at Manchester Business School, and a Fintech Contributor at Forbes. Her extensive experience includes roles at 11:FS, Mapa Research, and advisory positions at various fintech startups."
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
                img: img_boye,
                pic: img_boye,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_abu_suleiman,
                pic: img_abu_suleiman,
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
                img: img_abu_suleiman,
                pic: img_abu_suleiman,
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
                img: img_boye,
                pic: img_boye,
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
                img: img_bayo,
                pic: img_bayo,
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
                img: img_bayo,
                pic: img_bayo,
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
                img: img_iyinoluwa,
                pic: img_iyinoluwa,
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