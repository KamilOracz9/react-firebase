import React, { useState } from 'react'
import Table from '../../components/Table/Table';

const RecentSeals = () => {
    const [data, setData] = useState([
        {
            date: '01 Jan 2045',
            invoice: 'INV-0123',
            customer: 'Jhon Doe',
            amount: '$123',
            status: 'Paid',
        },
        {
            date: '01 Jan 2045',
            invoice: 'INV-0123',
            customer: 'Jhon Doe',
            amount: '$123',
            status: 'Paid',
        },
        {
            date: '01 Jan 2045',
            invoice: 'INV-0123',
            customer: 'Jhon Doe',
            amount: '$123',
            status: 'Paid',
        },
        {
            date: '01 Jan 2045',
            invoice: 'INV-0123',
            customer: 'Jhon Doe',
            amount: '$123',
            status: 'Paid',
        },
        {
            date: '01 Jan 2045',
            invoice: 'INV-0123',
            customer: 'Jhon Doe',
            amount: '$123',
            status: 'Paid',
        },
    ]);

    return (
        <Table data={data}/>
    )
}

export default RecentSeals;
