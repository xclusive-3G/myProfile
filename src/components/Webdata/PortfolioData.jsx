import spaceWeb from '../Assets/images/portfolio/spaceWeb.PNG'
import portfolioImg from '../Assets/images/portfolio/portfolio.PNG'
import ccusingann from '../Assets/images/portfolio/cc_using_ann.PNG'
import modal from '../Assets/images/portfolio/modal.PNG'
import fanta from '../Assets/images/portfolio/fanta.PNG'
import ecom from '../Assets/images/portfolio/ecom.PNG'
import simon from '../Assets/images/portfolio/simon.PNG'
import file from '../Assets/images/portfolio/filestructure.PNG'
import todo from '../Assets/images/portfolio/todolist.PNG'
import shoplikeitF from '../Assets/images/portfolio/shoplikeitF.png'
import dashboard from '../Assets/images/portfolio/dashboard.png'
import { title } from 'framer-motion/client'

export const portfolio = [
    {
        id:1,
        title:"Shop Like It - E-commerce Website",
        imgscr:shoplikeitF ,
        demoLink:"https://shop-like-it.netlify.app/",
        codeLink:"https://github.com/xclusive-3G/shop-like-it-user-interface-frontend"
    },
    {
        id:2,
        title:"Shop Like It - Admin Dashboard",
        imgscr:dashboard,
        demoLink:"https://shop-like-it-dashboard.netlify.app/",
        codeLink:"https://github.com/xclusive-3G/Shot-like-it-DashBoard-Frontend"
    },
    {
        id: 3,
        title:"Space Tour - Travel Website",
        imgscr:spaceWeb,
        demoLink:'https://spacetour022.netlify.app/',
        codeLink:'https://github.com/xclusive-3G/spaceTour'

    },
    {
        id: 4,
        title:"Personal Portfolio Website",
        imgscr:portfolioImg,
        demoLink:'https://sekani-portfolio.netlify.app/',
        codeLink:'https://github.com/xclusive-3G/myProfile'

    },
    {
        id: 5,
        title:"Credit Card Fraud Detection using ANN",
        imgscr:ccusingann,
        demoLink:'#',
        codeLink:'https://github.com/xclusive-3G/-Credit-Card-detection-using-ANN/blob/main/Fraud%20Detection.ipynb'

    },
    {
        id: 6,
        title:"Modal Component using React JS",
        imgscr:modal,
        demoLink:'https://app.netlify.com/sites/superlative-dango-0dc941/overview',
        codeLink:'https://github.com/xclusive-3G/Modal'

    },
    {
        id:7,
        title:"Coca-Cola Web Design",
        imgscr:fanta,
        demoLink:"https://674af1dfc73b73ef038b35b2--sekanicokeweb.netlify.app/",
        codeLink:"https://github.com/xclusive-3G/cokeWebDesign"
    },
    {
        id:8,
        title:"E-Commerce Website Template",
        imgscr:ecom,
        demoLink:"https://sekani-store.netlify.app/",
        codeLink:"https://github.com/xclusive-3G/e-commerce-"
    },
    {
        id:9,
        title:"Simon Game",
        imgscr:simon,
        demoLink:"https://simons-game-task.netlify.app/",
        codeLink:"https://github.com/xclusive-3G/simon-game"
    },
    {
        id:10,
        title:"Folder Test Structure",
        imgscr:file,
        demoLink:"https://folder-test-structure.netlify.app",
        codeLink:"https://github.com/xclusive-3G/folder-structure"
    },
    {
        id:11,
        title:"To-Do List Application",
        imgscr:todo,
        demoLink:"https://todo-lis-by-sekani.netlify.app",
        codeLink:"https://github.com/xclusive-3G/todoList_React"
    }
]