// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Fill the publications table

var authors;
var selectedAuthor = null;
var pageNumber;

const onur =  [
    {
        id: "f7ba63054e8587a9810dcc2f34e7607e34281bb9",
        title: "Regulating Software Development Process by Formal Contracts",
        paperAbstract: "While the notion of formal contract regulating the behavior of software agents is accepted, the concept of contract regulating the activities of software developers is quite vague. In general there is not documented contract establishing obligations and benefits of members of the development team. However, a disciplined software development methodology should encourage the use of formal contracts between developers. We propose to apply the notion of formal contract to the object-oriented software development process itself. That is to say, the software development process can be seen as involving a number of agents (the development team and the software artifacts) carrying out actions with the goal of building a software system that meets the user requirements. In this way, contracts can be used to reason about correctness of the development process, and comparing the capabilities of various groupings of agents (coalitions) in order to accomplish a particular contract.",
        authors: [
            {
                name: "Claudia  Pons",
                ids: [
                    "145771312"
                ],
                structuredName: null
            },
            {
                name: "Gabriel  Baum",
                ids: [
                    "31230837"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [
            "70d0b13df21b61e943b1758ecb9fb7b4438f10d3",
            "64a197302a13a96c209a9d796c24cb7a0935e8c9",
            "3134e783fb8043170f0703f9d4a0d56b2024cc7f",
            "f881bda103c5a8aaf55bbc31ac8e782c1f23b5a7",
            "39a0b8b9e7e49f6d2a4d256e5bccf6e4ef33a194",
            "3dfcdf5c7c9e74ce03138c151b32cdf3d091eaa1",
            "f95e1fab5bd7657eac362412012507bede95616b",
            "5d1e07cbdfad946fc4215a6066fb22df1cd1d9b0",
            "f4676402f772af3b17228f1f1aca3fca5f2e2892",
            "b278056eb1d8483e583e6d2f0eafc65466de5417",
            "5ada347492332825d38c7f7cfcc760842476ee52",
            "c6d677690537573413ac4fda30b64d0408ccbd9c",
            "faa1f1f3bf3f1b3262757f6d3260d77a2486ffcc",
            "48035838f7be1fdc18bd375136a350e81989fa03",
            "3e01e1f810b0ded8aec038e12970f3c6eb68296b",
            "3c31175c612d6f42fecb40ef328960310432f790",
            "45058f4d0d980f056b8a6731f6631fb56790c23a",
            "68743ba5f4c2dee51bc77a9b6e305e37abb1afaf",
            "3d6a5a446e9323d0d429d8ea2359d7380b0505f6",
            "bf52ed3cea8308ef3cd7666713f7cde05b968d2c",
            "5fc5818f46a350da33f921f772fdb72a6a2e3623",
            "734709781e9c7220f6f2e616937cc5b69af286a1",
            "4bcb40301c0769450c371f1df7a15462a28aa76c",
            "aa2872c663a5ade2497ce96ef006930e6fdab8c3",
            "a5bfad5358b048edb6e1121f28c5f40faebd7139",
            "fb165598f50ab3604e73d67f64f1a1a79477b3ad",
            "ed5850d266ab3d99a63314980ed2494bdb2e8d43",
            "2a11650973859eab53c4e3619c881cf7f3a4efbb",
            "58be2acecc1f491a3c20a0ad15472641898b5fd2",
            "482b5dd3d4acd609b93f113515d07f07dc12f4cc"
        ],
        year: null,
        s2Url: "https://semanticscholar.org/paper/f7ba63054e8587a9810dcc2f34e7607e34281bb9",
        sources: [],
        pdfUrls: [
            "http://sol.info.unlp.edu.ar/~cpons/papers/TR01-ffse.pdf",
            "http://www-lifia.info.unlp.edu.ar/~cpons/papers/TR01-ffse.pdf"
        ],
        venue: "",
        journalName: "",
        journalVolume: "",
        journalPages: "",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [],
        magId: "",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "11290029f9a81344bb9029235b9368100fc0b891",
        title: "Application and Improvement of Statistical Process Control in Software Process Metrics",
        paperAbstract: "This paper introduces the theory of software process metrics as well as the structure and analyzes method of Shewhart control charts.It discusses the role Statistical Process Control(SPC) plays in software process metrics using an example.As traditional Shewhart control charts can not distinguish the causes from other processes,an improvement is proposed with the help of select cause control charts,which can conquer the deficiencies in the field of software process metrics.It can analyze the stability and performance characteristics of software process both qualitatively and quantitatively.",
        authors: [
            {
                name: "Ma  Hui-jun",
                ids: [
                    "2103577989"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [],
        year: 2009,
        s2Url: "https://semanticscholar.org/paper/11290029f9a81344bb9029235b9368100fc0b891",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Computer Engineering",
        journalVolume: "",
        journalPages: "",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2379311302",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "79c48bb8fc9b1fc196bf58efa3f86eb186f8b5de",
        title: "Software Design of the Modularized Measurement and Control System based on Object-Oriented Technology",
        paperAbstract: "Recently, the measurement and control system is used in the industrial measurement and control area. As the application of the object-oriented technology into the measurement and control software design, it improves the efficiency of this software design. It’s possible for the second-use of the primary measurement and control software based on the object-oriented technology and multi-software technology. In this paper, it implements the modularized measurement and control software integrated platform based on Visual Basic. Net environment, and finishes the software design of the modularized database building, modularized dispatching and measurement and control task management.",
        authors: [
            {
                name: "Yang  Ling-ming",
                ids: [
                    "2093549327"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [],
        year: 2008,
        s2Url: "https://semanticscholar.org/paper/79c48bb8fc9b1fc196bf58efa3f86eb186f8b5de",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Microcomputer Information",
        journalVolume: "",
        journalPages: "",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2373673736",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "0103184feab4b7e82f26318814f296b45f86c843",
        title: "Research on Industrial Software Testing Knowledge Database Based on Ontology",
        paperAbstract: "Industrial software testing is the key part before the release of industrial software. The software test engineers without industrial knowledge and manufacturing experience cannot test for its unique functional performance requirements and industry characteristics. Therefore, the industrial software testing knowledgeis studied basedon ontologyinthis paper. The knowledge of industrial software testing domain is represented by the ontology whichis constructed by the improved seven-step method. Andthe graphdatabase is usedto store knowledge. The management of industrial software testing knowledge is standardized by the Industrial Software Testing Knowledge Base, which is helpful to improve the quality and efficiency of industrial software test.",
        authors: [
            {
                name: "Ping  Chen",
                ids: [
                    "2119039263"
                ],
                structuredName: null
            },
            {
                name: "An  Xi",
                ids: [
                    "2079772126"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [
            "15c4900b3e9f98899c6f1955906a67828784ead7",
            "38d87fe1b60f205c17affe826ebc8bc66e9d5105"
        ],
        year: 2020,
        s2Url: "https://semanticscholar.org/paper/0103184feab4b7e82f26318814f296b45f86c843",
        sources: [
            "DBLP"
        ],
        pdfUrls: [
            "https://doi.org/10.1109/DSA.2019.00066"
        ],
        venue: "2019 6th International Conference on Dependable Systems and Their Applications (DSA)",
        journalName: "2019 6th International Conference on Dependable Systems and Their Applications (DSA)",
        journalVolume: "",
        journalPages: "425-429",
        doi: "10.1109/DSA.2019.00066",
        doiUrl: "https://doi.org/10.1109/DSA.2019.00066",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "3013107757",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "f5e3a6e3a496de3f831e591f7697e9ade25b8873",
        title: "An approach for optimizing of the aerospace software regression test cases",
        paperAbstract: "Owing to complex development phases and frequent requirement changes of the aerospace software, the workload of the regression test is more than half of the total amount of software test. And aerospace software requires high reliability, so each revision of the test requirements must be covered in the process of the regression testing. Therefore in the process of the aerospace software regression test it is an urgent problem be solved that how to complete the full coverage of the changes under the less manpower cost. In this paper, an approach for optimizing of the aerospace software regression test cases is proposed, which can save more test resources and ensure the coverage of the changed contents.",
        authors: [
            {
                name: "Hong-Yuan  WANG",
                ids: [
                    "2109800110"
                ],
                structuredName: null
            },
            {
                name: "Ji  Qi",
                ids: [
                    "2112611778"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [],
        year: 2019,
        s2Url: "https://semanticscholar.org/paper/f5e3a6e3a496de3f831e591f7697e9ade25b8873",
        sources: [],
        pdfUrls: [],
        venue: "2019 3rd International Conference on Electronic Information Technology and Computer Engineering (EITCE)",
        journalName: "2019 3rd International Conference on Electronic Information Technology and Computer Engineering (EITCE)",
        journalVolume: "",
        journalPages: "1471-1474",
        doi: "10.1109/EITCE47263.2019.9095192",
        doiUrl: "https://doi.org/10.1109/EITCE47263.2019.9095192",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "3028190996",
        s2PdfUrl: "",
        entities: []
    }
]
const tolga = [
    {
        id: "ae685e3ad0b530e90403914e510a47204af1afc1",
        title: "Relations among Actors in Governmental Projects : The Case of Paraná mGov",
        paperAbstract: "Cloud is a service oriented platform where all kinds of virtual resources are treated as services to users. Several cloud service providers have offered different capabilities for a variety of market segments over the past few years. The most important aspects of cloud computing are resource scheduling, performance measures, and user requests. Sluggish access to data, applications, and web pages spoils employees and customers alike, as well as cause application crashes and data losses. In this paper, the authors propose an analytical queuing model for performance evaluation of cloud server farms for processing bulk data. Some important performance measures such as mean number of tasks in the queue, blocking probability, and probability of immediate service, and waiting-time distribution in the system have also been discussed. Finally, a variety of numerical results showing the effect of model parameters on key performance measures are presented. DOI: 10.4018/ijcac.2012100104 54 International Journal of Cloud Applications and Computing, 2(4), 53-65, October-December 2012 Copyright © 2012, IGI Global. Copying or distributing in print or electronic forms without written permission of IGI Global is prohibited. technology into the field of high performance computing. Virtualization offers both flexibility and security through custom user images and user isolation. Due to commercial interests, a cloud provider normally has a proprietorship where a user makes an image that only runs on the provider’s site. Many cross-site technologies applied in grid computing can easily be adopted by cloud computing. The actual configuration and management of cloud computing differs from traditional computing paradigms as it is scalable, can be encapsulated as an abstract entity, and the services are dynamically configurable. Cloud Computing infrastructure allows users to achieve more efficient use of their IT hardware and software investments with super-user privileges on-demand. This is accomplished by analyzing the physical barrier inherent in isolated systems, automating the management of the group of the systems as a single entity. Any task request sent to the cloud management system (CMS) is serviced within a suitable service node; after the completion of the service, the task leaves the center. A service node may contain resources such as web servers, database servers, directory servers and others. A service level agreement (SLA) outlines all aspects of cloud service usage and the obligations of both service providers and clients, including various descriptors collectively referred to as Quality of Service (QoS). Cloud computing may be considered as a resource available as a service for virtual data centers. For example, in Amazons S3 Storage Service cloud computing and virtual data centers are not the same (Rittinghouse, & Ransome, 2010). QoS is the criterion which measures the satisfaction of users using the Cloud Computing services. Due to dynamic nature of cloud environments, diversity cloud computing delivers three kinds of services: Infrastructure as a service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS) (Foster, Fidler, Roy, Sander, & Winkler, 2004, Rimal & Eunmi, 2009). These services are available to users in a Pay per-use-on-demand model, which can access shared IT resources like server, data storage, application, network and so on through internet. Iosup et al. (2011) analyzed the performance of cloud computing services for scientific computing workloads. Users of cloud computing services are faced with the problem of transferring large amounts of data across a geographically dispersed network under time and budget constraints. This problem arises because cloud computing services work on the scale of terabyte and are composed of geographically dispersed and distant sites. Cloud partners like to combine large amounts of data, from multiple distributed locations to a single datacenter. There are many reasons to transfer data between sites, for example, users may have to perform initial transfers, cloud service provider migrations, site backups, or user data migrations. Furthermore to perform their data transfers within a certain time deadline and to minimize the cost of the transfer. In particular, the challenge of reducing the latency of the transfer, without incurring excessive costs is the bottleneck for cloud users (Chung, 2000). Cloud providers charge their cloud users for bandwidth utilization when the size of data transfer is high, or when the transfers are frequent. A variety of cloud applications require bulk data transfer, such as scientific computing, internet protocol television (IPTV) and real time multimedia steaming, etc. For such applications, data resources provide large amounts of data and users to access the data which is geographically dispersed in most cases. To improve the performance of the system, they must be processed in bulk in accordance to the service level agreement (SLA). In case of IPTV service, it simply relies on the availability of sufficient network and data resource which must be operated within the limitation of time constraints, otherwise the corresponding application requirements may not be guaranteed. Therefore, the reservation and utility optimization of the combined resources become critical issues to guarantee the bulk data transfer in cloud computing. It provides optimized and efficient computing through enhanced collaboration, agility, scalability and availability. 11 more pages are available in the full version of this document, which may be purchased using the \"Add to Cart\" button on the product's webpage: www.igi-global.com/article/performance-analysis-cloudcomputing-centers/75116?camid=4v1 This title is available in InfoSci-Journals, InfoSci-Journal Disciplines Computer Science, Security, and Information Technology. Recommend this product to your librarian: www.igi-global.com/e-resources/libraryrecommendation/?id=2",
        authors: [
            {
                name: "Veena  Goswami",
                ids: [
                    "145121331"
                ],
                structuredName: null
            },
            {
                name: "Sudhansu Shekhar Patra",
                ids: [
                    "10794282"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "f41d453f7522a35aff74cdcd863a7619e3318270",
            "807bf489f6de318a5678cb25511a0a47bb5d2ce2",
            "777149d3af15dd6cd409247357de4d100df9d458",
            "a225bd048ca0d60cfc504f12b53f1ec0a474bc68",
            "2b161f7928dc1f0e5af295d1218cac0b38b804b6",
            "733aefce4bce337a01fce84fbea605ce3ba80ca9",
            "8c4b489812911a912ef6b4ae1aadd08f8cc2c1e0"
        ],
        outCitations: [
            "0f85e8770d352a8c18f8a7604799bba2ac260fe2",
            "8a6a4f73192758cc2c07138fdc82d10962e7e794",
            "b7811370c04efc867ea778cc6092cc0c2a5a3fce",
            "86b4914f028c7a3d69378c003ca96b688a2a771d",
            "3bacf2f7b144d18de3cbf8235ccebcd835a8d76a"
        ],
        year: 2015,
        s2Url: "https://semanticscholar.org/paper/ae685e3ad0b530e90403914e510a47204af1afc1",
        sources: [],
        pdfUrls: [
            "http://www.igi-global.com/viewtitlesample.aspx?id=75116&ptid=59560&t=performance+analysis+of+cloud+computing+centers+for+bulk+services"
        ],
        venue: "",
        journalName: "",
        journalVolume: "",
        journalPages: "",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [],
        magId: "",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "21bd09d6d911a4533d6f3fd44e4acee22f80ebe1",
        title: "Adaptive Reliable Control for Time-Delay Systems",
        paperAbstract: "",
        authors: [
            {
                name: "Guang-Hong  Yang",
                ids: [
                    "1684017"
                ],
                structuredName: null
            },
            {
                name: "Dan  Ye",
                ids: [
                    "143703922"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "e30d23457f9a2f95d9569667599890f1990f42cf",
            "7d6a457838f756eb17b7877595467d58d0da05c2"
        ],
        outCitations: [],
        year: 2010,
        s2Url: "https://semanticscholar.org/paper/21bd09d6d911a4533d6f3fd44e4acee22f80ebe1",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "",
        journalVolume: "",
        journalPages: "79-137",
        doi: "10.1201/EBK1439835227-c6",
        doiUrl: "https://doi.org/10.1201/EBK1439835227-c6",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2484444136",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "8e19a5b6c86526440fbe288e3449e95563cf8aaf",
        title: "Toward a New Methodology for an Efficient Test of Reconfigurable Hardware Systems",
        paperAbstract: "This paper deals with the test of a reconfigurable hardware system (RHS). The latter is a hardware device that allows to change the hardware resources at runtime in order to modify the system functions and therefore to dynamically adapt the system to its environment. The increasing functional complexity of embedded systems and the transition to the RHS make the hardware testing a challenging task, especially under the confine of providing a high quality with a low cost. Considering the fact that the hardware test represents a key cost factor in a production process, an optimal test strategy can be advantageous in the competitive industrial market. Accordingly, this paper introduces a new methodology for an efficient hardware test of RHS. For an RHS, the number of stuck-at faults can be very large, which leads to a significant slowdown in the testing process. Because of the redundancy of faults between the different circuits composing an RHS, the proposed methodology aims at minimizing the number of faults using the inter-circuits relationships and consequently at providing an optimal fault set that can be effectively used for testing. Efficient techniques for test generation and test set validation are proposed to provide the test patterns for faults reduced by inter-circuits fault collapsing. The application of the generated test patterns is typically sufficient to provide an overall fault coverage. The proposed methodology is implemented in a new visual environment named TnTest. An experimental study confirms and validates the expected findings. Note to Practitioners—This paper addresses possible challenges for future generations of adaptive embedded systems. It proposes an original methodology for an efficient reconfigurable hardware system (RHS) hardware test. The main objective is to significantly reduce time and cost needed for the testing process. For an RHS, the number of stuck-at faults can be very large, which can cause a major slowdown in the hardware test. Based on the inter-circuits relations existing between the different circuits composing an RHS, the proposed methodology decreases considerably not only the number of the faults but also the test patterns needed for testing. The application of the generated test patterns is typically sufficient to provide an overall fault coverage. The proposed methodology is implemented in a new visual software environment named TnTest, which is capable of providing the smallest fault set as well as the efficient test set that can be effectively used for testing. This environment can be applied to test any embedded device that can be deployed in any new application based on flexible technologies. It can also be useful in manufacturing industries for a required improvement of the production process in relation to time and cost.",
        authors: [
            {
                name: "Asma Ben Ahmed",
                ids: [
                    "2119174976"
                ],
                structuredName: null
            },
            {
                name: "Olfa  Mosbahi",
                ids: [
                    "1763744"
                ],
                structuredName: null
            },
            {
                name: "Mohamed  Khalgui",
                ids: [
                    "1691225"
                ],
                structuredName: null
            },
            {
                name: "ZhiWu  Li",
                ids: [
                    "66454750"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "368ef08d96ff85e8744664a52d14ba7d51ab4bc5",
            "43c41b9a7c95bb7fe3d65f21278652a47822aff0",
            "d346391853678af7b902cd040d29e09030712b83",
            "cd7c5e4430a7dda446aa1049dccf95a229a4e7c3",
            "8302703e4cdfb94fd34a2585cf36792823ac49f3",
            "055514c713cec9a34fc56bf1967c7f1a1c0355ef",
            "dee3a89cb6863a4c12f1c18d1e19759fd351a2cd",
            "99a7604ad39f4efb1b79b2765f3c53eacfa4561a",
            "326612e51678a791fd2a66814804744abf840f9d",
            "a3a532c189d612e597358f1908f422b3e1462e63",
            "3c4efb3c46ff7f824c39d3413f01c27c0587447a",
            "6658ecefee4db957061b87fdd3be35f66238b94e",
            "c8c62c408e3ebf1ad9f918f7927f5ec9989e8604"
        ],
        outCitations: [
            "eb9f2c4bd2c75c98d9281c261bbc150974f77a8f",
            "f397e5b2f779b4b4cf92678da3e9aa25a73fd0e8",
            "97de60d708d5c2fb52a9751db570d74b70ab840f",
            "9805315a5ebba717ab8c9cefed67c0384e890ee7",
            "5bd625863f5f7a77c22eb17494bbcb5f661612e5",
            "4fe2d039554c2ce473ca6afe668f206e41c1daa8",
            "2a817bf61f75e6ba5e4bca9949be4665e1ba5d05",
            "a53664187f3cbc4f29f52042365f46dbd96e92a2",
            "9ced420bd2bd7ed9e1d61c051be8f820840c2d43",
            "96dfe7c5db1ea829eb59cd18372a703130b153a7",
            "82d48a933ff6d77819023170b45867987852216c",
            "2b735ada9ff763bd0ecae01666d2001ba0b3a168",
            "30445d775d6c615f0250fa605280bed0820cd4cc",
            "215d23a2c10b2adda72d46dc781facd57797899a",
            "57f7ce7d8e1822243c2a5a236ce73c9a2e7b7ed3",
            "3c877cab4a318ffeb6802a051a0290eacffb54be",
            "0a9f08d3f53032fb34088046ff7c8a31c11ee438",
            "e98cdfcbdbf58e40c4757241750665a03b66f073",
            "df3b13a8502bfd6a6558d41ecf63c3abcb39a37f",
            "9a0379be965b791341fb778fd6d1fe38bc6294db",
            "7faca9fbb38897beac1f36251edb923045349d0b",
            "83456ca379b400b2c84117748bce9954451b5f2d",
            "92abbffe9acb32f2aeee341cf7fe684b12c35dd8",
            "dada5908903d1109d5453193dad52afdb4864a0b",
            "5967388981d3d705a2223822e37f510050648a52",
            "342fc1e8bdfdd7ef163fc41a896c7a8f5bb19355",
            "35309493ce18c3b1c4f94a817373895145419488",
            "819d827bd503cc7f7665ea2943f3e234913c5044",
            "e1e0ff250324a6380c9a48fe5138d2a7c23e2b68",
            "6a662900078009ac7155d41e1a5bb1653432b4bd",
            "7f8c8388d612581e2143b11b246553d199885fd6",
            "c0ca088824eaef6ed2d9bd99c5c5f5c4c5a55be3",
            "2d03209fb066efa7bf4cb38ed7765df2c6717516",
            "a8ffbfc86fbca7fa5fb32adc97239c187dfabf7b",
            "9f74124200ee1f7601c213752bf5ef6161d203a6",
            "7e3795a909ffcd532bb86fabf8bc43ded81b40a7",
            "46e5ba136bda28fd2d1b22c574c96fca9aa442d5",
            "24a0da9df0e6638e37d221d358b5e3c5405e9456",
            "0b81df4f41f693c2248eab3c63a871e0ca29ccc3"
        ],
        year: 2018,
        s2Url: "https://semanticscholar.org/paper/8e19a5b6c86526440fbe288e3449e95563cf8aaf",
        sources: [
            "DBLP"
        ],
        pdfUrls: [
            "https://doi.org/10.1109/TASE.2018.2822050"
        ],
        venue: "IEEE Transactions on Automation Science and Engineering",
        journalName: "IEEE Transactions on Automation Science and Engineering",
        journalVolume: "15",
        journalPages: "1864-1882",
        doi: "10.1109/TASE.2018.2822050",
        doiUrl: "https://doi.org/10.1109/TASE.2018.2822050",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2801698466",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "ed4f052e5afb0b5524bf624efb5d2faa32bf831a",
        title: "Communication-aware Fault-tolerant Scheduling Strategy for Precedence Constrained Tasks in Heterogeneous Distributed Systems",
        paperAbstract: "Abstract Fault-tolerant scheduling is an important issue for optimal heterogeneous distributed systems because of a wide range of resource failures. Primary-backup approach is a common methodology used for fault tolerance wherein each task has a primary copy and a backup copy on two different processors. For independent tasks, the backup copy can overload with other backup copies on the same processor, as long as their corresponding primary copies are scheduled on different processors. Unfortunately, most of the scheduling algorithms developed on a simple model where communication contention is not taken into account. In this paper we proposed a improve list scheduling algorithm, called heterogeneous communication-aware fault-tolerant scheduling (HCFS). The new approach for computing task priority is proposed which considers the performance difference in heterogeneous systems. Simulation results show that compared with existing scheduling algorithms in the literature, our scheduling algorithm improves the reliability and performance.",
        authors: [
            {
                name: "Weipeng  Jing",
                ids: [
                    "2831961"
                ],
                structuredName: null
            },
            {
                name: "Yaqiu  Liu",
                ids: [
                    "1961373"
                ],
                structuredName: null
            },
            {
                name: "Qu  Wu",
                ids: [
                    "47506675"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "da1548fcaf5517457babdf52a01c39dde553608c",
            "c186f158d981bf863295a22e8ee5a11750b1848e",
            "925b5e91c2bb30616b90b3fdd93f853acbef6522"
        ],
        outCitations: [
            "7c17419610bcc11f82d6ffef5420e54a3d9ef806",
            "43f8a2b4d58d602e206b87044654ea05636fce54",
            "355b0f55c4e4dc33fee11205eadf2b26019aad2b",
            "61f082394c23273eeae29ef594dce7836ed01d85",
            "6f0859eb31cb85ca3bd4f92aa1f0297077af63b0",
            "2fe975f926709155ee090e9ec2345e56f8deee31",
            "033205ef2e263564a6c59c3c8bf271d51de8f966",
            "b654caeacf048a07e249bd21725c87b6101d9d8d",
            "8ebace9b022e7ab14b87e9beb24505873605c55a",
            "679bbe11b5ebe34597fb9b670fa2f918638d755f",
            "921d25c6e0ccd806131bc87f4c5281da27e3dc9e",
            "5f0952e5d357864fab21408a7e403f961cb63ecc",
            "0736e6ee6dc4b6add542b4419811f13360e7f9cf",
            "0a928d5660264659457ce293071f3d122a5865ab",
            "23a69c9f80f0f979224df1812c7aa572ca599f29",
            "4c54896295fbc52ddda3ce9f47078000560ce923"
        ],
        year: 2011,
        s2Url: "https://semanticscholar.org/paper/ed4f052e5afb0b5524bf624efb5d2faa32bf831a",
        sources: [],
        pdfUrls: [
            "http://www.aicit.org/jdcta/ppl/30_%20JDCTA_June-34.pdf"
        ],
        venue: "",
        journalName: "International Journal of Digital Content Technology and Its Applications",
        journalVolume: "5",
        journalPages: "252-260",
        doi: "10.4156/JDCTA.VOL5.ISSUE6.30",
        doiUrl: "https://doi.org/10.4156/JDCTA.VOL5.ISSUE6.30",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2323757930",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "64cd4320ac33ebd25fcb866307f6e00007c0c762",
        title: "Based on the FPGA design of real-time multi-tasking system",
        paperAbstract: "Since the embedded system development in a long time and after the system software design patterns:the main program is an infinite loop which single task order execution.By setting one or more interrupt handling asynchronous events.This system for simple applications,but relatively high for the real-time requirements,more applications processing tasks,it reveals poor real-time,system reliability,poor stability shortcomings.",
        authors: [
            {
                name: "Zheng  Zhen-feng",
                ids: [
                    "1409136351"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [],
        year: 2012,
        s2Url: "https://semanticscholar.org/paper/64cd4320ac33ebd25fcb866307f6e00007c0c762",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Hunan Agricultural Machinery",
        journalVolume: "",
        journalPages: "",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2369078912",
        s2PdfUrl: "",
        entities: []
    }
]
const tugkan = [
    {
        id: "21eef2f35b69916b99409bc4b28804f74561e877",
        title: "Testing Domain Dependent Software Reliability Growth Models",
        paperAbstract: "Software Reliability Growth Models (SRGMs) are supporting software industries in expecting and scrutinizing quality of software. Numerous SRGMs have been proposed; majority of which concentrate on testing period of software. For testing, domain specific knowledge plays a very crucial role. Based on necessity condition, a set of programmes are in testing phase of software development. “Domain testing is a software technique in which small number of test cases is selected for trial. These sets of testing paths, all of which are to be eventually influenced by designed test cases are called the testing domain which expands with the progress of testing”. Keeping this concept in mind, we propose SRGMs with the concept of testing domain with exponential coverage. Utility of proposed framework has been emphasized in this paper through some models pertaining to different distribution i.e Exponential, Logistic, Weibull and Rayleigh. Moreover, the data analysis is performed to find the estimates of parameters by fitting the models on authentic data sets.",
        authors: [
            {
                name: "Deepika",
                ids: [
                    "49201287"
                ],
                structuredName: null
            },
            {
                name: "Ompal  Singh",
                ids: [
                    "145574169"
                ],
                structuredName: null
            },
            {
                name: "Adarsh  Anand",
                ids: [
                    "2175948"
                ],
                structuredName: null
            },
            {
                name: "Jyotish N. P. Singh",
                ids: [
                    "2185921"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "7f32f93ff22e35e87a4dc438f7ef635ed7e6c8e2",
            "bf8221d0f7854f56e1c44cb375daf6c27bb33e8c",
            "283dd7cb553cf33d860fdc7a69ac9b09c49e5e2e",
            "458656845b62782d05e32a693c50bfaa9e2815c4",
            "230f08c6dddf57dcae99253950748cc4137dda9c",
            "d5eb6b4167503befc427c1df81f7b815eddb6402",
            "570bd99b803c2cdcb4996489b3f1f1f737050409",
            "5887a5ba6608b0e698344a6c40640ef53fef53c9",
            "cdd6ec9c648eeae06c4a8af016bb8221b35d664b",
            "6732ba62687237c2b7fc400a72d2eceb4de688ec"
        ],
        outCitations: [
            "a165024b5b308fb17ee5af0ac20aa9e401d22009",
            "3aa488d6b4948da59d7c038695069c04e85d34bf",
            "68225a0ebb0ff04697f35c279ffdd2c27ddf0cf8",
            "134b60aefbe72a9bf12b3751d77bd97c92232ef8",
            "323b72f7e568f4cc681fa24216595fd2d258b050",
            "1944aae6a8b02b64d8cb50a64b5297b48257d123",
            "e051e46c9eb9b8b4cedc0c2987210fdb4466a177",
            "9e3db438ee324f80489cfe8d4296119f219e2605",
            "e10d961be5ad210510a93bc449f3e06d01d99513",
            "379b970e0d91e40030de64939349f0121df4e71f",
            "767ddf03cb59e7cb89f7936bd91cf8e019e2f756",
            "06e62122dd49dad169ff144240f17474bbf954ba",
            "377d3a22b5d5c6c410c0db839b5cf38fa67ffa0b"
        ],
        year: 2017,
        s2Url: "https://semanticscholar.org/paper/21eef2f35b69916b99409bc4b28804f74561e877",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "",
        journalVolume: "2",
        journalPages: "140-149",
        doi: "10.33889/IJMEMS.2017.2.3-013",
        doiUrl: "https://doi.org/10.33889/IJMEMS.2017.2.3-013",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2921497620",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "346ae6c609228769307b8d702777e954f72fac0d",
        title: "Automated Product Line Methodologies to Support Model-Based Testing",
        paperAbstract: "Testing products in a cost-efficient way remains an attractive topic for Model-Based Testing (MBT) of product lines in both academia and industry, which can be addressed by employing systematic and automated approaches based on models (such as feature models and UML models). Cost-effective testing products can be divided into three main problems, i.e., test selection, test generation, and test minimization. Driven by the needs of our industrial problems for testing Video Conferencing Systems (VCSs) product line developed by Cisco, Norway, this paper presents Product Line Model-based Testing Methodologies (PL-MTM) to tackle the above-mentioned three problems for costeffective testing a product in product line, which includes: 1) an systematic and automated test selection methodology; 2) an automated test minimization approach; and 3) an automated and systematic test generation methodology.",
        authors: [
            {
                name: "Shuai  Wang",
                ids: [
                    "2118511351"
                ],
                structuredName: null
            },
            {
                name: "Shaukat  Ali",
                ids: [
                    "144324321"
                ],
                structuredName: null
            },
            {
                name: "Arnaud  Gotlieb",
                ids: [
                    "34962645"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "badee66cb47744676db1b7e316d1a4347c931ba6"
        ],
        outCitations: [
            "7c62fdbfc2baa5dd3e9ab2ac55153dfc9553dda0",
            "f8b274d9e5976b2dd19ff6515a90d27e6cb3321d",
            "a8dd7b84612101207681e77c013ee7c155e501de",
            "1d7fbe618c7e7fdf20cb5582e95ad1484fe5e004",
            "52f8392c5b897dc9767fa5947e997540e2fa6635"
        ],
        year: 2013,
        s2Url: "https://semanticscholar.org/paper/346ae6c609228769307b8d702777e954f72fac0d",
        sources: [
            "DBLP"
        ],
        pdfUrls: [
            "http://ceur-ws.org/Vol-1115/poster1.pdf"
        ],
        venue: "MoDELS",
        journalName: "",
        journalVolume: "",
        journalPages: "56-60",
        doi: "",
        doiUrl: "",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2403968444",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "868f8a97d14d659406f165c4816778c74dcafc0e",
        title: "Multi-level software testing based on cyclomatic complexity",
        paperAbstract: "A structured approach to testing software based on the principles of the McCabe cyclomatic complexity metric is described. This approach is being applied to current Naval embedded weapon system software projects for unit, integration, and computer software configuration item (CSCI) requirements-level testing. The primary automated tool supporting this process is the Vitro Automated Structured Testing Tool (VASTT), which analyzes and generates reports from a variety of inputs, including data flow diagrams (DFDs), program design language (PDL), and several programming languages. The reports include complexity metrics, flow graphs, test paths, and test cases. This approach to testing provides an early assessment of testability and a comprehensive and quantifiable framework for the testing program.<<ETX>>",
        authors: [
            {
                name: "K. O. Emergy",
                ids: [
                    "70227859"
                ],
                structuredName: null
            },
            {
                name: "B. K. Mitchell",
                ids: [
                    "2054227995"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "ed9e637af268d63ae0ff1421d1c32aab8704e6dc",
            "acb2e84ba796742e33ae59e3c8bce025cdbd096c",
            "95f544a2cb439e31dfe879e3f6b9af9b405006cb",
            "bb5e690bed9872a3b7ed44ea78e65f3d35268609"
        ],
        outCitations: [],
        year: 1989,
        s2Url: "https://semanticscholar.org/paper/868f8a97d14d659406f165c4816778c74dcafc0e",
        sources: [],
        pdfUrls: [],
        venue: "Proceedings of the IEEE National Aerospace and Electronics Conference",
        journalName: "Proceedings of the IEEE National Aerospace and Electronics Conference",
        journalVolume: "",
        journalPages: "500-507 vol.2",
        doi: "10.1109/NAECON.1989.40255",
        doiUrl: "https://doi.org/10.1109/NAECON.1989.40255",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2164107641",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "0103184feab4b7e82f26318814f296b45f86c843",
        title: "Research on Industrial Software Testing Knowledge Database Based on Ontology",
        paperAbstract: "Industrial software testing is the key part before the release of industrial software. The software test engineers without industrial knowledge and manufacturing experience cannot test for its unique functional performance requirements and industry characteristics. Therefore, the industrial software testing knowledgeis studied basedon ontologyinthis paper. The knowledge of industrial software testing domain is represented by the ontology whichis constructed by the improved seven-step method. Andthe graphdatabase is usedto store knowledge. The management of industrial software testing knowledge is standardized by the Industrial Software Testing Knowledge Base, which is helpful to improve the quality and efficiency of industrial software test.",
        authors: [
            {
                name: "Ping  Chen",
                ids: [
                    "2119039263"
                ],
                structuredName: null
            },
            {
                name: "An  Xi",
                ids: [
                    "2079772126"
                ],
                structuredName: null
            }
        ],
        inCitations: [],
        outCitations: [
            "15c4900b3e9f98899c6f1955906a67828784ead7",
            "38d87fe1b60f205c17affe826ebc8bc66e9d5105"
        ],
        year: 2020,
        s2Url: "https://semanticscholar.org/paper/0103184feab4b7e82f26318814f296b45f86c843",
        sources: [
            "DBLP"
        ],
        pdfUrls: [
            "https://doi.org/10.1109/DSA.2019.00066"
        ],
        venue: "2019 6th International Conference on Dependable Systems and Their Applications (DSA)",
        journalName: "2019 6th International Conference on Dependable Systems and Their Applications (DSA)",
        journalVolume: "",
        journalPages: "425-429",
        doi: "10.1109/DSA.2019.00066",
        doiUrl: "https://doi.org/10.1109/DSA.2019.00066",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "3013107757",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "0a9657c615e1bba75d6ec96ed5783662f7eef62b",
        title: "Model-Based Development of firewall rule sets: Diagnosing model inconsistencies",
        paperAbstract: "The design and management of firewall rule sets is a very difficult and error-prone task because of the difficulty of translating access control requirements into complex low-level firewall languages. Although high-level languages have been proposed to model firewall access control lists, none has been widely adopted by the industry. We think that the main reason is that their complexity is close to that of many existing low-level languages. In addition, none of the high-level languages that automatically generate firewall rule sets verifies the model prior to the code-generation phase. Error correction in the early stages of the development process is cheaper compared to the cost associated with correcting errors in the production phase. In addition, errors generated in the production phase usually have a huge impact on the reliability and robustness of the generated code and final system. In this paper, we propose the application of the ideas of Model-Based Development to firewall access control list modelling and automatic rule set generation. First, an analysis of the most widely used firewall languages in the industry is conducted. Next, a Platform-Independent Model for firewall ACLs is proposed. This model is the result of exhaustive analysis and of a discussion of different alternatives for models in a bottom-up methodology. Then, it is proposed that a verification stage be added in the early stages of the Model-Based Development methodology, and a polynomial time complexity process and algorithms are proposed to detect and diagnose inconsistencies in the Platform-Independent Model. Finally, a theoretical complexity analysis and empirical tests with real models were conducted, in order to prove the feasibility of our proposal in real environments.",
        authors: [
            {
                name: "Sergio Pozo Hidalgo",
                ids: [
                    "6909576"
                ],
                structuredName: null
            },
            {
                name: "Rafael  Ceballos",
                ids: [
                    "143979365"
                ],
                structuredName: null
            },
            {
                name: "Rafael M. Gasca",
                ids: [
                    "1784908"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "d5c3f66babf1f89bc7338aa88a594242b071b08d",
            "3d36ac6b18d67d09cb9b0351e81fa0ed01aaf6c3",
            "fa0cc7cb8d9191a061bb222b389f3aea9f4cba14",
            "ec4b16e20c5b3f78508d4a046798a595838d818c",
            "9871a2106cb75e8831642506bd0229856ca10aee",
            "b0be192583e3fe10fb0c2dc428a8b58a6832891a",
            "5bd7baf49cc326b1011d0adbffc9b14c8bc3a484",
            "fc896fb7f41b22653a1c7127487cd181e6d1dd46",
            "2916707c9e2b9de0d93c47785b86ead51a223baa",
            "ec3bd85d09a888f75e6508dc99f20a1c4e7b0129",
            "f623e9274e6e99b541a46e7f54634d9df8a72422",
            "11f4b18f2490b413eb9d28aaeafb0ae35c72ccf7",
            "ae3d863091d65fe2b94596b82c6a7196ec24a034",
            "956f7be4bfe07fcaad5bde1347a44a302d6aecf5",
            "ec80f803b7675d37f2b81ec85286d9e3fc3b4bee",
            "0b34b68d0d280352aa82589c543c0f994b3bcfd2",
            "49b627cce72dea4b3a44b3b0d5e05398949b1329",
            "9df4428006f2e403d510b3caac8284e2b39f4dc5"
        ],
        outCitations: [
            "4f0a604df901cdd0600d8c4050f8a3d6e93958f0",
            "7aecbfbb592e910a7802c2ce4439eb16f7aefb3b",
            "7f1176c89d04ac537d9bc8021b5bcc00883d16d8",
            "7aff15f99cc4b47f0174b2e2dcba9a52c33c2caa",
            "86cdac674ed92592576a27080743d0c4f5c3acce",
            "575427da19cc406731299e749769bc1db56d7584",
            "ce91001853303a637dcd743d4312befc8161bde4",
            "4aa2141feb36e7ed5daf7caea27d040df661337d",
            "ac3d31a0de858497ebb41d8f363e21a8efe0c153",
            "60f83533dafb9642b5b92132f484d00cc41fbd40",
            "42286ff5b6bb4a624e89726a4f64f1aa71fa42c1",
            "c008cab902941d3a8f1ae13d3a07f80f167d8d88",
            "a50853d8a3d2db58f63444da1ccd86c982b2a962",
            "aa124864f2f38b3f83df3c26ca55599ce9584c93",
            "107ea769a797f1de53743db9f7a71912b8980d86",
            "ac06e82bdfa95d5367378ebd36c7ad96c1ffc141",
            "2341186e3e1e6b8aa8393a85c2d772f44457b86c",
            "e1cfadb87793b3346ad6d17c0b4ff1995467efc7",
            "719cc3faaef0c8c75654bc683e975f3ce7fcb30b",
            "acbc1b024c1219b573fdeff69577d6c0afc966f6",
            "a468444ed480a6b314899b00b2e6bb84742777cf",
            "6b39570f7b185d34be21ac937099201565bd6476",
            "13adec394497516da1a469936f2bef87c2a9b409",
            "b609506dd114eb549da39afae1bd833f9beccd5c",
            "d1db64a9eb62d745aef6610a6748da9992a15f6a",
            "0f0e762b7a2753844c0b37cb80d3b97a2e719686",
            "37621249b6c7e9b310a9d50a22d9b0fe4b0ebb45",
            "a58717f14c0d691aadfd15a7c22a85b84c0aeea6",
            "47896660f62208824ad68cc3f063ca48a54badfc",
            "b5b20046f399feb2252e76af00ca411261ef92ff"
        ],
        year: 2009,
        s2Url: "https://semanticscholar.org/paper/0a9657c615e1bba75d6ec96ed5783662f7eef62b",
        sources: [
            "DBLP"
        ],
        pdfUrls: [
            "https://doi.org/10.1016/j.infsof.2008.05.001"
        ],
        venue: "Inf. Softw. Technol.",
        journalName: "Inf. Softw. Technol.",
        journalVolume: "51",
        journalPages: "894-915",
        doi: "10.1016/j.infsof.2008.05.001",
        doiUrl: "https://doi.org/10.1016/j.infsof.2008.05.001",
        pmid: "",
        fieldsOfStudy: [
            "Computer Science"
        ],
        magId: "2057059836",
        s2PdfUrl: "",
        entities: []
    }
]
const sokur = [
    {
        id: "d86ecc9faefc2e3f2fba7736c29309605214706f",
        title: "Chemical Composition and Electrical Properties of Tin Oxide Films Prepared by Vapor Deposition",
        paperAbstract: "",
        authors: [
            {
                name: "J. A. Aboaf",
                ids: [
                    "71608257"
                ],
                structuredName: null
            },
            {
                name: "V. C. Marcotte",
                ids: [
                    "92416190"
                ],
                structuredName: null
            },
            {
                name: "N. J. Chou",
                ids: [
                    "91135920"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "a51e038f53737e1960e430fcff3c20a8979eb1c8",
            "343f73250c70648f584cf3babd82b4c8b5e894f2",
            "251f3b095a99af9c77a0cea7fadb5bcb9c4ba5a5",
            "5ccb30355891fbaf89eac888754a6f99cb42cd47",
            "dbc29056e1bf5624a138f40c07321b0980f049ec",
            "05497d94f731615ed21470a7574a7f5299b00cad",
            "b2d72c555565966d3ed19f50f6e16563978a7a69",
            "e31625476209cb4c786032553ce9ee18675fa847",
            "4507ce7d48e3cba8c1ed4da6985145a7953256d1",
            "8083ce64fe7ff37ca543bd322d1a844b316120c1",
            "5aae8e10c60fbf47093357997851176217f26cec",
            "fd76d6e6236bb8889eb86bfd46cab5e759914936",
            "529db3b0defb7dcd742abfebd72cf7cbbccf6e83",
            "17b71b5dd38b4d3a8b7c9f6212725c92be04d290",
            "eac9ec7dd5fa43804c59ab7e87e21eee3c56fd47",
            "bba927eef4cd8b156db81689771197c394f93c0d",
            "01307ba89aa53b662fe8310ad8eadcabfc91cf4f",
            "6dc0e4e29f56003a7f1344cbf99c41ebe4595d89",
            "95cdc329fea76be6a6df877d21d5be2ad3463eb8",
            "8b5c7f6b5a2bcc1153868dd60ef9a669fc79e799",
            "e796880818646de748748d43859478a6ab1bf94d",
            "0f2b7f6ed791ad46ef800e46f79280b3d95833f4",
            "da5933d5d46b818d824a0665f84ce71abef2dd91",
            "cec951a15beac049b36b6fec69770c8e10a2645f",
            "8a90d05c2829e366d34a27b4c442811d415a0d2f",
            "c1370454451726da3e91a41fc8fcf21fd079fe68",
            "d05af534eb9f0d84d139ff7fb7c3b34f20a7270a",
            "6a7e9f2a7e9295f1ad05819accf7e53c4b85863e",
            "bdac27b92ff1a4bd98f9af46bdd6ddb4c4e6da11",
            "8ca935cf9e7b05ad04ada16b3ff3c0712ffb05f1",
            "5a44f20e7e3754484a984dd12d67fde8f5d04fe7",
            "c060d9ca90bda68edf89faa6711f0a0b2772cbd7",
            "8241021aec9e78495cfb7104b69b9172e8922275",
            "50494fbd41e5bb190814544a6cd208d13c03a640",
            "39392beddb9e3392353906a84440ef4dfc0ea3bb",
            "a5e357646d15ff1076f55ce80efc5115396bc276",
            "88a512f61875da802ac398171993555ab6292b8d",
            "958a7dc4175bad3e56f7ea4592bf32808b375d04",
            "319cf3ca65a28a04da9c26fd8b2e3c88875ae861",
            "0fc3d5339aa443cb36a7038cd9922f8ca9e90a16",
            "1eb7ef08085260cee86081cc289e038c8719bb73",
            "68999350207743e60645cdc7cbfe38dd602b637d",
            "d4f20809bc711c1a6715a91a9d05a25335ff092d",
            "a5a554763f12908981e808b3aee36f742b660ddb",
            "fb02aec2405ad442bccb37cd67584640a7ee9a01",
            "456c079e7786ea0631d56adf4aaee8079eaed999",
            "fc890dcb45fa8876e63741388254696524a0ad8e",
            "db903892441b21f8664e65dd1618eea3a398a48c",
            "e52cbca1d298ca0afbb7e38a4258a4455ed05e2d",
            "b00b862e3a074cd53df468e5b7e493ab23a89db4",
            "9a979c638474221c6060cb971ad93d8355dc5e92",
            "5137024283abe1a6ddbf10d5d0bcfce082d09ed4",
            "755e152a1889f3f0ba8badfa17029fde9d432688",
            "04b3dd8ba58522203a476e4731e9741df6d16d10",
            "29a10906c20816117f4f25c331f2ee32a5276ae8",
            "122a8fd0dde1ef9b53ae55398587f446ff6ba03f",
            "22ecf2bbe42346df5872e3e235e5dc4e112200eb",
            "401b37b62f52f73a4d66d662316936993db18ad7",
            "354728b142f3177728f301cb04e63dae89a6736a",
            "d51e3a87b220e8bcf6d53da0fc83eef3f6454933",
            "12eb113c5d16e756c15d1f209a90c7f148de02a0",
            "31f1f6ecd5aa2aca446c0eb1e9c3ca9d25fddbd7",
            "fedd48f65ebe30b7441425ee79ba10f863fffeda",
            "12a6f3ae0d0bf56d46c549fc5e3fa6925796ced7",
            "efbc7ffb83af5cf920c66bff5681eae5f13edeff",
            "da0905db5463359751f8db856de2db5ad3d9549c",
            "530f6ef13e65be8e662d450b5c9fcc82e06ed571",
            "491d5f0922c88ab1a653a6bc2754f973b569bff5",
            "bcf598d60e81fa991aa08356cebc57e6eea0ec81",
            "64ab663e231b8ac879cfc5347ecd61fe510e8146",
            "21638bc376c2096fe59949a0d566cc7012e46c35",
            "ac92a21441657477b2d18d6b9970433fb94f82a3",
            "b6f05ffe904215fc0870319abe16634d02d0c2f6",
            "8afcd45e53d7dc69b64d7a0696b3c0250fc13b00",
            "2684aa5fcbb1dd12c97b978719281e5f4a187b94",
            "c58ead11f1d5c4be5fe32c57eeb33b7364690b28",
            "ba65de04f3a40b455a0a77b0707bcd7726d5326d",
            "74c1eb3b574aeea4ea845db55fccca9694afa6aa"
        ],
        outCitations: [],
        year: 1973,
        s2Url: "https://semanticscholar.org/paper/d86ecc9faefc2e3f2fba7736c29309605214706f",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Journal of The Electrochemical Society",
        journalVolume: "120",
        journalPages: "701-702",
        doi: "10.1149/1.2403539",
        doiUrl: "https://doi.org/10.1149/1.2403539",
        pmid: "",
        fieldsOfStudy: [
            "Chemistry"
        ],
        magId: "2114308851",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "2002a268fc205712b11269f8bab08f333b546bab",
        title: "Work function measurements of copper nanoparticle intercalated polyaniline nanocomposite thin films",
        paperAbstract: "The nature of contact between the electrode and the sensing material plays a crucial role in governing the sensing mechanism. Thin films of polyaniline (PANI) and copper-polyaniline nanocomposite (NC) have been deposited at room temperatures by in-situ oxidative polymerization of aniline in the presence of Cu nanoparticles. For sensing applications a thin film Au (gold) ∼100 nm is deposited and used as a conducting electrode. To understand the nature of contact (i.e., ohmic or Schottky) the work function of the conducting polyaniline and nanocomposite films were measured using Kelvin Probe method. I-V characteristics of PANI and NC films investigated at room temperatures further corroborates and confirms the formation of Ohmic contact as evident from work function measurements.",
        authors: [
            {
                name: "U. V. Patil",
                ids: [
                    "120525147"
                ],
                structuredName: null
            },
            {
                name: "Niranjan S. Ramgir",
                ids: [
                    "15077512"
                ],
                structuredName: null
            },
            {
                name: "A.  Bhogale",
                ids: [
                    "12123434"
                ],
                structuredName: null
            },
            {
                name: "A. K. Debnath",
                ids: [
                    "47004565"
                ],
                structuredName: null
            },
            {
                name: "K. P. Muthe",
                ids: [
                    "1381639100"
                ],
                structuredName: null
            },
            {
                name: "S. C. Gadkari",
                ids: [
                    "81606483"
                ],
                structuredName: null
            },
            {
                name: "D. C. Kothari",
                ids: [
                    "49638850"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "fa3f24bfe91e61416fef6a22e2b1b17ff275b43f",
            "6239b24c5237acc4d23d96a9ecf32cd7a4b992a4"
        ],
        outCitations: [
            "8430882b1cf74cc2bfd2d8482967ebca2b719324",
            "38184c12945583e3c81458d4b2a8337e443fb56d",
            "c1ef0b064153a39d9175f8025e1874f5f836ca4b",
            "b10d89b9d18b27ac6bb0b2d4941eeaaef2e912ff",
            "2c430155de045492fcfa1141d82135cf0ebc6d73",
            "d228cebe85a47589235da16e64d10c5285f3c61f",
            "d6069a2861f854aebeacfa60e3da7d55dcb8d07d",
            "d8c2fa35e9e76c2e3816bb90ad8899be01b2f9bb"
        ],
        year: 2017,
        s2Url: "https://semanticscholar.org/paper/2002a268fc205712b11269f8bab08f333b546bab",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "",
        journalVolume: "1832",
        journalPages: "080092",
        doi: "10.1063/1.4980552",
        doiUrl: "https://doi.org/10.1063/1.4980552",
        pmid: "",
        fieldsOfStudy: [
            "Materials Science"
        ],
        magId: "2620520753",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "90a12f385cc7333200f35bcc27acc689e76f1520",
        title: "Structure and optical properties of tin oxide films",
        paperAbstract: "Abstract In the study, we investigated the relationship between macroscopic and microscopic properties of tin oxide films. Three kinds of tin oxide films were evaluated: (1) amorphous films deposited by thermal evaporation of SnO2 powder; (2) spray-deposited tin oxide films with poor crystallinity (DBDA films); and (3) spray-deposited tin oxide films with high crystallinity (MBTC films). Optical properties of these films were evaluated in terms of the macroscopic properties of TO. X-ray diffraction studies for morphologic investigation and FTIR spectra for bond properties were also evaluated to define the micro-macro properties relationship.",
        authors: [
            {
                name: "H.  Demiryont",
                ids: [
                    "15266091"
                ],
                structuredName: null
            },
            {
                name: "K. E. Nietering",
                ids: [
                    "11884458"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "e1b6197653c210f08a74cc3c704e8ed55e960211",
            "ef6cca5f0b4744afa1207f499d738d6b7b54e282",
            "0d8a026e973cf67d00426e06a10be59d432e3659",
            "f6d4fb2765cbfd2a631688a7557354c00e132c71",
            "ed47bdde79e829dc4aaf3b5ff672643f8831cb24",
            "547adae34299f14b9130d3c7be2b9a9c31c5f91e",
            "cbdce766a7f42afc0c8ca8e3dfc03b9a06156e3f",
            "1406f38276c2188ca7d312317f9f509933198c93",
            "b9183863709139a5e713af6bbcc1db089edb7f7e",
            "eecb17350572fb46aab2ad0d57e56afdf9290b23",
            "f09796f40ff9aaa3353313e1f87ee8ce69bb2a78",
            "82676220caee77f0184f445c666f7ca31bd5a4c3",
            "cd60d91dcdc8caaa353daf82d962c7a316d2f216",
            "5947429544ca18a125c336f97244472031ff9d1f",
            "33fc86951717e0e9a9e1247b5e0c42dc7473cacb",
            "79408cfbbc0c037442547f589f6d4148fd5053ca",
            "030775d30b6eed86ee074ee6158f07c722edfb48",
            "49973473e8cc8030c506ac574e5fefdfdc4225f7",
            "8f134e839c5179b6f71a57239053baaa446762d5",
            "69be67bde192439864d1bc1cbc7fd209decbadb0",
            "bf72603174d1dfe0815f5b2c5b23a8b43e8807f3",
            "0bf483c04b1505b3a5d2340d0ebd7556b9361428",
            "8f575eadd3f8dc5729df0847614105e9b0ded105",
            "13e268e1e5dd91cb878fa467a37704c6192496b5",
            "7f6c1bec77676197f378ec9f7953b0311862c395",
            "229534e0729853aa31374fe819ff1e2fe49d8e40",
            "2d5ae12eed16edce68f2e8060f7199b95726c67e",
            "1ad7987d198f8384d69e05e74e80d2750884baba",
            "48e4a043db9ed99225d91dd4c8c10784eab78789",
            "0a360a6a0ccc0cd3f73dbe3a7e802f2a67df06f0",
            "6feb9cb6b35f529ad129f8c1a75200c3d39b713a",
            "e000f0e146a812e3274c8184173b0642d1d09f46",
            "263490c52fd9304350e08500fe8b0782c4bf6918",
            "726bc1b5cfa60a6e5365c769a764a98a83cd922e",
            "b014c8c3ea8d45808bfa98741d0f64243a9707c8",
            "450c789e87da364907fa7cef89bf3cf3de5ccf6e",
            "75336c654ea624238ce34f6a8c587a20cd3139a4",
            "be67fc1bd4542f1d25e6211b08d83d3fc0a3afc1",
            "31f6edbf20d41456b4e2adf168cc0b1515d235db",
            "6df9aeee00fa1b6a9a5d69a29cab80ce64b6f875",
            "81f44bcbfd7eab6fc435031f8c47f678b778c446",
            "31d6c9ec6acf27863b06458811b5481a6faf26b2",
            "0229ed6698ec8c9ea372493c3ffb627899f7aa5e",
            "e788675bb19400025f6cba81d26bfb8d39292652",
            "6147be2a7c96f1d903a65cdf741f32a5fa351379",
            "41863dfc7a06d747d31ea99978c7d523a5bd6479"
        ],
        outCitations: [
            "75dad9e4359996aa92f2de53b44e85be76b393c6",
            "22fc6f0be9f82dd98b441517f43742ccaaa3e3ea",
            "8e98346a99610e6a2babfa6b4c4c5de24f31aacf",
            "d66e9d0b4cd390d88e5d53f8862dbe082e0591d4",
            "11571e40f02c8d90ff86253c083e261eb0be52d8",
            "69c2fa0858c6af8d1c5cc5bb55b8d9acfdb33a47",
            "dae00e4639f139da82b6e52b230986fbf8b085b3",
            "e5ec42d7363c25e87e491fd5e9ff2aa7678760e0",
            "19c0b70df2c8371c21194b425daa04a7b1e8ac32",
            "5e33d26c37a5d5ac5a642d262c984093c0917c03"
        ],
        year: 1989,
        s2Url: "https://semanticscholar.org/paper/90a12f385cc7333200f35bcc27acc689e76f1520",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Solar Energy Materials",
        journalVolume: "19",
        journalPages: "79-94",
        doi: "10.1016/0165-1633(89)90025-7",
        doiUrl: "https://doi.org/10.1016/0165-1633%2889%2990025-7",
        pmid: "",
        fieldsOfStudy: [
            "Materials Science"
        ],
        magId: "2094215812",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "af9f48711498910e147364a8e7598d12926e8cc5",
        title: "Remote plasma chemical vapor deposition silicon oxynitride thin films: Dielectric properties",
        paperAbstract: "Silicon oxynitride thin films have been deposited using remote plasma chemical vapor deposition from SiCl4+NH3+O2 gas mixtures. The stoichiometry of the deposited films varies from that corresponding to the silicon oxide to a stoichiometry very close to silicon nitride when the NH3/O2 gas ratio is changed in the plasma. The approximate compositions of the films were determined by Rutherford backscattering spectroscopy and nuclear reaction analysis, and the local bonding arrangements were determined by infrared spectroscopy. Analysis of metal–insulator–semiconductor devices under the effect of and external sinusoidal electric field (dielectric spectrometry) indicates the presence of traps centers in the Si–SiO2 interface. Correlations between the local bonded structures in the oxynitride and the conduction and polarization processes detected in the films are also discussed.",
        authors: [
            {
                name: "M. Hernández Vélez",
                ids: [
                    "144695233"
                ],
                structuredName: null
            },
            {
                name: "O Sánchez Garrido",
                ids: [
                    "93768150"
                ],
                structuredName: null
            },
            {
                name: "F. Fernández Gutiérrez",
                ids: [
                    "50452225"
                ],
                structuredName: null
            },
            {
                name: "C.  Falcony",
                ids: [
                    "1774046"
                ],
                structuredName: null
            },
            {
                name: "J. M. Martínez Duart",
                ids: [
                    "79709068"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "eec1e27f5d71c172dd55551ca0641bc804cc99ba",
            "74768eac3b402a242cba8b0ddd6b88137f2ec16a",
            "e18ffec5adcc1625f866a98f78fb920e4f26feaf"
        ],
        outCitations: [],
        year: 1998,
        s2Url: "https://semanticscholar.org/paper/af9f48711498910e147364a8e7598d12926e8cc5",
        sources: [],
        pdfUrls: [],
        venue: "",
        journalName: "Journal of Vacuum Science & Technology B",
        journalVolume: "16",
        journalPages: "1087-1092",
        doi: "10.1116/1.590013",
        doiUrl: "https://doi.org/10.1116/1.590013",
        pmid: "",
        fieldsOfStudy: [
            "Chemistry"
        ],
        magId: "2033493945",
        s2PdfUrl: "",
        entities: []
    },
    {
        id: "1edb80274d2fa7675dfa1242b26c793c4519578d",
        title: "Carboxymethyl Cellulose/Graphene Oxide Composite Film-Coated Humidity Sensor Based on Thin-Core Fiber Mach-Zehnder Interferometer",
        paperAbstract: "In this paper, a carboxymethyl cellulose (CMC)/graphene oxide (GO) composite film-coated humidity sensor was proposed based on thin-core fiber Mach-Zehnder interferometer (TCMZI). A segment of thin-core fiber (TCF) was spliced between two segments of single-mode fiber (SMF), and the TCF cladding was first corroded with hydrofluoric acid and then coated with a layer of CMC/GO film via optical driven deposition method. The relative humidity (RH) sensing characteristics of the sensor were experimentally investigated by observing the wavelength shift of resonant dips in the transmission spectrum, which showed that the CMC/GO composite film-coated TCMZI has good repeatability and stability in the measurement of humidity. A maximum average humidity sensitivity of −75.6 pm/%RH was obtained in the RH range of 35%-80%, nearly 2.048 and 3.237 times higher than that of CMC and GO single film coated ones. To the best of our knowledge, this is the first report on using the CMC/GO composite film for humidity measurement, and its excellent performance is expected to be extended to humidity sensitization of more fiber-optic sensors. The proposed sensor has the advantages of simple structure, easy fabrication, low cost, good stability and high performance, which can be applied to the fields of bio-chemical and medicine.",
        authors: [
            {
                name: "Wei  Liu",
                ids: [
                    "2157221343"
                ],
                structuredName: null
            },
            {
                name: "Fan  Zhang",
                ids: [
                    "2153305814"
                ],
                structuredName: null
            },
            {
                name: "Xin  Yan",
                ids: [
                    "143646944"
                ],
                structuredName: null
            },
            {
                name: "Fang  Wang",
                ids: [
                    "7572514"
                ],
                structuredName: null
            },
            {
                name: "Xuenan  Zhang",
                ids: [
                    "8682599"
                ],
                structuredName: null
            },
            {
                name: "Takenobu  Suzuki",
                ids: [
                    "2246679"
                ],
                structuredName: null
            },
            {
                name: "Yasutake  Ohishi",
                ids: [
                    "3024831"
                ],
                structuredName: null
            },
            {
                name: "Tonglei  Cheng",
                ids: [
                    "35770281"
                ],
                structuredName: null
            }
        ],
        inCitations: [
            "8d1c79f44d44cf150a216ae7404cab4a87f8d5ca"
        ],
        outCitations: [],
        year: 2021,
        s2Url: "https://semanticscholar.org/paper/1edb80274d2fa7675dfa1242b26c793c4519578d",
        sources: [],
        pdfUrls: [],
        venue: "IEEE Sensors Journal",
        journalName: "IEEE Sensors Journal",
        journalVolume: "21",
        journalPages: "23767-23775",
        doi: "10.1109/jsen.2021.3115621",
        doiUrl: "https://doi.org/10.1109/jsen.2021.3115621",
        pmid: "",
        fieldsOfStudy: [],
        magId: "",
        s2PdfUrl: "",
        entities: []
    }
]



function loadTableForAuthor(ids, pageNumber) {
    console.log(selectedAuthor);
    var publications;
    switch (selectedAuthor) {
        case 'Tugkan Tuglular':
            publications = tugkan;
            break;
        case 'Onur Demirörs':
            publications = onur;
            break;
        case 'S. Okur':
            publications = sokur;
            break;
        case 'Tolga Ayav':
            publications = tolga;
            break;
        default:
            break;
    }
    console.log(publications);
    var i = 1;
    for (publication of publications) {
        buildPublicationResultDiv(publication, i);
        i++;
    }
}

function loadAuthors() {
    $.ajax({
        method: "GET",
        url: "Home/LoadAuthors"
    })
        .done(function (result) {
            authors = result;
            for (author of result) {
                var string = "<option data-value=" + '"[' + author.name + ']"' + ' value="' + author.name + '"></option>'
                $("#authors-dropdown").append(string);
            }
        });
}

$(document).ready(function () {
    $("#publication-result").html("");
    console.log("ready!");
    pageNumber = 1;
    loadAuthors();


    $('#search-author').click(function () {
        pageNumber = 1;
        var value = $('#selected').val();
        selectedAuthor = value;
        //var ids = ($('#authors-dropdown [value="' + value + '"]').data('value'));
        for (auth of authors) {
            if (auth.name == selectedAuthor) {
                loadTableForAuthor(auth.publications, pageNumber);
                break;
            }
        }
    });
    
});