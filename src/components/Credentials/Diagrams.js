import React, { useEffect, useState } from 'react';
import { FlowRenderer } from 'react-flow-renderer';
import ReactFlow from 'reactflow';
const Diagram = (props) => {





    return (
        <div style={{ width: '100%', height: '400px' }}>
            {props?.xmlData && (
                <ReactFlow
                    elements={props?.xmlData} // Pass the diagram data to the FlowRenderer component
                //   nodeTypes={{ customNode: "mx" }} // If you have custom node types, define them here
                />
            )}
        </div>
    );
};

export default Diagram;