import React from 'react';
import {ColumnDirective, ColumnsDirective, KanbanComponent} from '@syncfusion/ej2-react-kanban';

import {kanbanData, kanbanGrid} from '../data/dummy';
import {Header} from '../components';

const ToDo = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="ToDo"/>
        <KanbanComponent
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{contentField: 'Summary', headerField: 'Id'}}
        >
            <ColumnsDirective>
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
        </KanbanComponent>
    </div>
);

export default ToDo;
