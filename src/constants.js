export const COLORS = {
    EDUCATION: "#05668D",
    JOB: "#028090",
    MODAL: "#87CEFA",
    PROJECTS: "#02C39A",
    SKILLS: "#00A896",
    EXTRA: "#05668D",
    CONTACTS: "#028090"
}

export const url = {
    image: require('./assets/khajabox.png')
}

export const EDUCATION = {
    config: {},

    data: [
        {
            title: "SLC",
            name: "Birat English S. School",
            passed_year: "2012 AD"
        }, {
            title: "+2/HSEB",
            name: "Shikshadeep H.S.S",
            passed_year: "2014 AD"
        }, {
            title: "BE in Computer Engineering",
            name: "Pulchowk Campus",
            passed_year: "2018 AD"
        }
    ]
}

export const SKILLS = {
    config: {},

    technical_data: [
        {
            title: "React.js",
            score: 90
        }, {
            title: "UI/UX",
            score: 90
        }, {
            title: "Laravel",
            score: 80
        }, {
            title: "Wordpress",
            score: 60
        }, {
            title: "Android",
            score: 75
        }, {
            title: "Firebase",
            score: 80
        }
    ],
    softskill_data: [
        {
            title: "Communication",
            score: 85
        }, {
            title: "Presentation",
            score: 85
        }, {
            title: "",
            score: 0
        }
    ],
    tools_data: [
        {
            title: "Android Studio",
            icon: require('./assets/icons/android_studio.png'),
            link:"https://developer.android.com/studio"
        },
        {
            title: "Adobe XD",
            icon: require('./assets/icons/adobe_xd.png'),
            link:"https://www.adobe.com/products/xd.html"
        }
    ]
}

export const JOB_EXPERIENCE = {

    data: [
        {
            date: "Febraury-August 2018",
            company_name: "LIS Nepal Pvt. Ltd.",
            company_address: "Manbhawan, Lalitpur",
            position: "Intern",
            job_duration: "7 months",
            job_type: "Part Time",
            logo:require('./assets/icons/lis.png')
        },
        {
            date:"September 2018-Present",
            company_name:"nLocate Pvt. Ltd.",
            company_address:"Manbhawan, Lalitpur",
            position:"Software Engineer",
            job_duration:"..",
            job_type:"Full Time",
            logo:require('./assets/icons/nlocate.jpeg')
        }
    ]
}

export const PROJECTS={

    data:[{
        date:"",
        image:"",
        title:"",
        description:"",
        duration:"",
        type:"",
        technology:[""]
    }]
}

export const CONTACTS={

    data:[
        {
            title:"Call",
            sub_title:"+977 9860167527",
            icon:require('./assets/icons/call.png'),
            color:"#3AD939",
            link:'tel:9860167527'
        },
        {
            title:"Gmail",
            sub_title:"prasidkarki95@gmail.com",
            icon:require('./assets/icons/gmail.png'),
            color:"#B93129",
            link:"mailto:prasidkarki95@gmail.com?subject=Hello"
        },
        {
            title:"LinkedIn",
            sub_title:"@prasid444",
            icon:require('./assets/icons/linkedin.png'),
            color:"#0084C0",
            link:'https://www.linkedin.com/in/prasid444'
        },
        {
            title:"Github",
            sub_title:"@prasid444",
            icon:require('./assets/icons/github.png'),
            color:"#161614",
            link:'https://github.com/prasid444'
        },
        {
            title:"Facebook",
            sub_title:"Prasidha Karki",
            icon:require('./assets/icons/facebook.png'),
            color:"#1D529B",
            link:'https://www.facebook.com/prasid.karki'
        },
        {
            title:"Skype",
            sub_title:"+977 9860167527",
            icon:require('./assets/icons/skype.png'),
            color:"#0098E1",
            link:'skype:live:prasidkarki95?chat'
        }
    ]
}