import mock from '../../mockAdapter';
// import type { ContactType } from '@/types/apps/ContactType';

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';
import user6 from '@/assets/images/profile/user-6.jpg';
import user7 from '@/assets/images/profile/user-7.jpg';
import user8 from '@/assets/images/profile/user-8.jpg';
import user9 from '@/assets/images/profile/user-9.jpg';
import user10 from '@/assets/images/profile/user-10.jpg';


// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

const contacts: KeyedObject[] = [
    {
        id: '#123',
        avatar: user1,
        userinfo: 'Hanna Gover',
        usermail: 'hgover@gmail.com',
        phone: '+123 456 789',
        jdate: '12-10-2014',
        status: true,
        rolestatus: 'primary'
    },
    {
        id: '#452',
        avatar: user2,
        userinfo: 'Daniel Kristeen',
        usermail: 'danielkristeen@gmail.com',
        phone: '+234 456 789',
        jdate: '10-09-2014',
        status: false,
        rolestatus: 'secondary'
    },
    {
        id: '#565',
        avatar: user3,
        userinfo: 'Julian Josephs',
        usermail: 'julianjosephs@gmail.com',
        phone: '+345 456 789',
        jdate: '01-10-2013',
        status: false,
        rolestatus: 'error'
    },
    {
        id: '#785',
        avatar: user4,
        userinfo: 'Jan Petrovic',
        usermail: 'janpetrovic@gmail.com',
        phone: '+456 456 789',
        jdate: '02-10-2017',
        status: true,
        rolestatus: 'success'
    },
    {
        id: '#564',
        avatar: user5,
        userinfo: 'Leanne Graham',
        usermail: 'leannegraham@gmail.com',
        phone: '+567 456 789',
        jdate: '10-9-2015',
        status: false,
        rolestatus: 'info'
    },
    {
        id: '#980',
        avatar: user6,
        userinfo: 'Mrs. Dennis Schulist',
        usermail: 'dennisschulist@gmail.com',
        phone: '+678 456 789',
        jdate: '10-5-2013',
        status: true,
        rolestatus: 'warning'
    },
    {
        id: '#521',
        avatar: user7,
        userinfo: 'Kurtis Weissnat',
        usermail: 'kurtisweissnat@gmail.com',
        phone: '+123 456 789',
        jdate: '05-10-2012',
        status: true,
        rolestatus: 'primary'
    },
    {
        id: '#450',
        avatar: user8,
        userinfo: 'Nicholas Runolfsdottir V',
        usermail: 'hgover@gmail.com',
        phone: '+234 456 789',
        jdate: '11-10-2014',
        status: true,
        rolestatus: 'secondary'
    },
    {
        id: '#212',
        avatar: user9,
        userinfo: 'Glenna Reichert',
        usermail: 'hgover@gmail.com',
        phone: '+345 456 789',
        jdate: '12-5-2017',
        status: true,
        rolestatus: 'error'
    },
    {
        id: '#152',
        avatar: user10,
        userinfo: 'Clementina DuBuque',
        usermail: 'hgover@gmail.com',
        phone: '+456 456 789',
        jdate: '18-5-2009',
        status: false,
        rolestatus: 'success'
    },
    
    {
        id: '#564',
        avatar: user5,
        userinfo: 'Leanne Graham',
        usermail: 'hgover@gmail.com',
        phone: '+567 456 789',
        jdate: '10-9-2015',
        status: false,
        rolestatus: 'info'
    },
    {
        id: '#980',
        avatar: user6,
        userinfo: 'Mrs. Dennis Schulist',
        usermail: 'hgover@gmail.com',
        phone: '+678 456 789',
        jdate: '10-5-2013',
        status: true,
        rolestatus: 'warning'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

// mock.onGet('/api/products/list').reply(200, { products });
mock.onGet('/api/contacts').reply(() => {
    return [200, contacts];
});


export default contacts;
