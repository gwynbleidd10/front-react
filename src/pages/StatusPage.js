import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook';
import Table from '../components/Table';
import { MDBDataTable } from 'mdbreact';

export const StatusPage = () => {
    const [data, setData] = useState("")
    const { loading, error, request } = useHttp()

    const getData = async () => {
        const res = await request('/api/esed/status')
        setData(res)
        console.log('s')
    }

    function Load(props) {
        if (props.loading) {
            return <div>Loading...</div>
        }

        return (
            <MDBDataTable
                searchLabel="Поиск"
                barReverse={true}
                entries={20}
                entriesLabel="Записей на страницу"
                data="/api/esed/status"
            />
        )
    }

    return (
        <>
            <button onClick={getData}>Обновить</button>
            <Load loading={loading} />
        </>
    )
}