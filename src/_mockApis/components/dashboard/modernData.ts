import type { userCard, weeklyStats,topProjects,topCards } from '@/types/components/dashboard/modernDashboard';

import user1 from "@/assets/images/profile/user-1.jpg";
import user2 from "@/assets/images/profile/user-2.jpg";
import user3 from "@/assets/images/profile/user-3.jpg";
import user4 from "@/assets/images/profile/user-4.jpg";

/*--Top cards--*/
import card_icon1 from "@/assets/images/svgs/icon-user-male.svg"
// import card_icon2 from "@/assets/images/svgs/icon-briefcase.svg"
import card_icon2 from "@/assets/images/sju/play-button.png"
// import card_icon3 from "@/assets/images/svgs/icon-mailbox.svg"
import card_icon4 from "@/assets/images/sju/totalCourse.png"
import card_icon5 from "@/assets/images/sju/dollar.png"
// import card_icon6 from "@/assets/images/svgs/icon-connect.svg"

/*--Blog Cards--*/
const userCardData: userCard[] = [
    { img: user4 },
    { img: user3 },
    { img: user2 },
    { img: user1 },
];

/*--Weeekly Stas--*/
const weeklyStatsData: weeklyStats[] = [
    {
        title: "Top Sales",
        subtitle: "Johnathan Doe",
        rank: "+68",
        bgcolor: "primary",
        textcolor: "primary",
    },
    {
        title: "Best Seller",
        subtitle: "Footware",
        rank: "+45",
        bgcolor: "success",
        textcolor: "success",
    },
    {
        title: "Most Commented",
        subtitle: "Fashionware",
        rank: "+14",
        bgcolor: "error",
        textcolor: "error",
    },
];

/*--Top Projects --*/
const topProjectsData: topProjects[] = [
    {
        activestate: "",
        programname: "4 YEAR Medical Doctor",
        videosCount: "60",
        totalSubscription: "300",
        statuscolor: "success",
        statustext: "Low",
        programAmount: "$12k",
    },
    {
        activestate: "",
        programname: "5 Year Medical Doctor",
        videosCount: "55",
        totalSubscription: "230",
        statuscolor: "warning",
        statustext: "Medium",
        programAmount: "$8K",
    },
    {
        activestate: "",
        programname: "Bachelor of Culinary Arts",
        videosCount: "58",
        totalSubscription: "210",
        statuscolor: "error",
        statustext: "High",
        programAmount: "$11.8K",
    },
    {
        activestate: "",
        programname: "Bachelor of Marine Biology",
        videosCount: "30",
        totalSubscription: "180",
        statuscolor: "secondary",
        statustext: "Very High",
        programAmount: "$6K",
    },

    {
        activestate: "",
        programname: "Bachelor of Midwifery",
        videosCount: "24",
        totalSubscription: "160",
        statuscolor: "success",
        statustext: "Low",
        programAmount: "$3.9K",
    },
    {
        activestate: "",
        programname: "Bachelor of Pharmacy",
        videosCount: "48",
        totalSubscription: "158",
        statuscolor: "warning",
        statustext: "Medium",
        programAmount: "$9.5K",
    },
    {
        activestate: "",
        programname: "Bachelor of Nursing",
        videosCount: "34",
        totalSubscription: "150",
        statuscolor: "error",
        statustext: "High",
        programAmount: "$7.5K",
    },
    {
        activestate: "",
        programname: "Bachelor in Business Administration",
        videosCount: "55",
        totalSubscription: "130",
        statuscolor: "secondary",
        statustext: "Very High",
        programAmount: "$2.4K",
    },
    {
        activestate: "",
        programname: "Bachelor in Business Management",
        videosCount: "40",
        totalSubscription: "128",
        statuscolor: "error",
        statustext: "High",
        programAmount: "$8.8K",
    },
    {
        activestate: "",
        programname: "Bachelor of Hospitality Management",
        videosCount: "36",
        totalSubscription: "106",
        statuscolor: "secondary",
        statustext: "Very High",
        programAmount: "$2.4K",
    },
];

/*--Top Cards --*/
const topCardsData: topCards[] = [
    {
        img: card_icon1,
        title: "All Student",
        number: "356",
        bgcolor: "lightsecondary",
        textcolor: "secondary",
        colorcode: "#033b4c",
    },
    {
        img: card_icon2,
        title: "All Videos",
        number: "2530",
        bgcolor: "lightwarning",
        textcolor: "warning",
        colorcode: "#033b4c",
    },
    
    {
        img: card_icon4,
        title: "Total Courses",
        number: "48",
        bgcolor: "lighterror",
        textcolor: "error",
        colorcode: "#033b4c",
    },
    {
        img: card_icon5,
        title: "Total Earning",
        number: "$96k",
        bgcolor: "lightsuccess",
        textcolor: "success",
        colorcode: "#033b4c",
    },
    
]

export { userCardData, weeklyStatsData, topProjectsData,topCardsData}