import React from 'react'
import { Name, ID, Text, Th, Tr, Td, TextPrice, LoaderText, Loader, Load, LoadingContainer } from '../../styles/Generic/HeaderTable.styles';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';

interface TableProps {
    titles: { key: string, name: string, width?: string }[];
    datas: any[]
    actions: null;
    activeFilter?: string;
    loading: boolean
}

export default function Table({ titles, datas, actions, activeFilter, loading }: TableProps) {
    const dispatch = useDispatch();

    const filteredDatas = datas.filter((data) => {
        if (!activeFilter) return true;
        return data.status === activeFilter;
    })

    const finalDatas = filteredDatas.length === 0 ? datas : filteredDatas

    return (
        <>
            {loading ?
                <LoadingContainer>
                    <Loader>
                        <LoaderText>Loading</LoaderText>
                        <Load />
                    </Loader>
                </LoadingContainer> :
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <Tr>
                            <Th>Name</Th>
                            {titles.map((title) =>
                                <Th key={title.key}>
                                    {title.name}
                                </Th>
                            )}
                        </Tr>
                    </thead>
                    <tbody>
                        {finalDatas.map((data) => (
                            <Tr key={data.id}>
                                <Td>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                        <img src={data.photo} alt={`Guest ${data.name}`} style={{ height: '70px', width: 'auto', borderRadius: '10px' }} />
                                        <div style={{ textAlign: 'left' }}>
                                            <Name>{data.name}</Name>
                                            <ID style={{ fontSize: '0.4em' }}>#{data.id}</ID>
                                        </div>
                                    </div>
                                </Td>
                                {titles.map((title) => (
                                    <Td key={title.key} style={{ width: title.width || 'auto' }}>
                                        {Array.isArray(data[title.key])
                                            ? (<Text status=''>{data[title.key].join(', ')}</Text>)
                                            : title.key === 'price' ? (
                                                <>
                                                    <TextPrice>{data[title.key]}$ <span>/night</span></TextPrice>

                                                </>
                                            ) : (
                                                <Text status={data[title.key]}>{data[title.key]}</Text>
                                            )
                                        }
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </table>}
        </>
    )
}
