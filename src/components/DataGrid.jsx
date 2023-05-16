import React from "react";

const DataGrid = ({ dataGrid, isData }) => {
    return (
        <>
            {dataGrid?.length &&
                isData === "users" &&
                dataGrid.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        {/* Add more cells */}
                    </tr>
                ))}
            {dataGrid?.length &&
                isData === "posts" &&
                dataGrid.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* Add more cells */}
                    </tr>
                ))}
            {dataGrid?.length &&
                isData === "comments" &&
                dataGrid.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                        {/* Add more cells */}
                    </tr>
                ))}
        </>
    );
};

export default DataGrid;
