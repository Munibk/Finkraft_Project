

/**
 * Renders a pie chart component that displays the number of successful and failed missions.
 *
 * @component
 * @param {Object[]} data - The data array containing information about the missions..
 */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';


const Pichart = ({ data }) => {
  const [successCount, setSuccessCount] = useState(0);
  const [failureCount, setFailureCount] = useState(0);

    useEffect(() => {
        // Calculate the number of successful and failed missions
        const success = data.filter((mission) => mission.successful === true);
        const failure = data.filter((mission) => mission.successful === false);

        setSuccessCount(success.length);
        setFailureCount(failure.length);
    }, [data]); // Re-run the effect when the data changes

    return (
        <div>

            <PieChart width={400} height={400} >
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={[
                        { name: 'Success', value: successCount },
                        { name: 'Failure', value: failureCount },
                    ]}
                    cx="40%"
                    cy="75%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    <Cell fill="#82ca9d" />
                    <Cell fill="#ff0000" />
                </Pie>
                <Tooltip />
            </PieChart>
                <h1>Success vs Failure</h1>
        </div>
    );
}
export default Pichart;
