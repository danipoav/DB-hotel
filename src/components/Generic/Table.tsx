import React from 'react'
import { Name, ID, Text, Th, Tr, Td, TextPrice } from '../../styles/Generic/HeaderTable.styles';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';

export default function Table({ titles, datas, actions }) {

    const dispatch = useDispatch();

    return (
        <>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <Tr>
                        <Th>Name</Th>
                        {titles.map((title) =>
                            <Th key={title.key}>
                                {title.name}
                            </Th>
                        )}
                        <Th>Actions</Th>
                    </Tr>
                </thead>
                <tbody>
                    {datas.map((data) => (
                        <Tr key={data.id}>
                            <Td>
                                <div onClick={() => actions.handleShow(data.id)} style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
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
                            <Td>
                                <FaRegEdit size={30} cursor={'pointer'} onClick={() => actions.handleEdit(data.id)} />
                                <MdDeleteOutline size={30} style={{ cursor: 'pointer' }} onClick={() => dispatch(actions.handleDelete(data.id))}
                                />
                            </Td>
                        </Tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
