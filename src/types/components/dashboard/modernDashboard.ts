/*User cards*/
type userCard ={
    img: string;
};

/*Weekly stats*/
type weeklyStats={
    title: string;
    subtitle: string;
    rank: string;
    bgcolor: string;
    textcolor: string;
};

/*Top Projects*/
type topProjects={
    activestate: string;
    programname: string;
    videosCount: string;
    programAmount: string;
    statuscolor: string;
    statustext: string;
    totalSubscription: string;
};

/*Top Cards*/
type topCards={
    img: string;
    title: string;
    number: string;
    bgcolor: string;
    textcolor: string;
    colorcode:string;
};

export type{userCard, weeklyStats,topProjects,topCards}