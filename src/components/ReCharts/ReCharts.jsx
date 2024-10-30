import { LineChart, Line, XAxis, YAxis } from 'recharts';

const ReCharts = () => {

    const students = [
        { id: 1, name: "Alice Johnson", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
        { id: 2, name: "Bob Smith", mathMarks: 78, physicsMarks: 82, chemistryMarks: 75 },
        { id: 3, name: "Charlie Brown", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
        { id: 4, name: "David Wilson", mathMarks: 67, physicsMarks: 70, chemistryMarks: 65 },
        { id: 5, name: "Emily Davis", mathMarks: 88, physicsMarks: 85, chemistryMarks: 87 },
        { id: 6, name: "Frank Miller", mathMarks: 75, physicsMarks: 76, chemistryMarks: 74 },
        { id: 7, name: "Grace Lee", mathMarks: 95, physicsMarks: 90, chemistryMarks: 93 },
        { id: 8, name: "Hannah Clark", mathMarks: 82, physicsMarks: 80, chemistryMarks: 78 },
        { id: 9, name: "Isaac Taylor", mathMarks: 90, physicsMarks: 92, chemistryMarks: 91 },
        { id: 10, name: "Jessica Moore", mathMarks: 72, physicsMarks: 68, chemistryMarks: 70 }
      ];
      
      


    return (
        <div className=''>
            <LineChart width={700} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke='red'></Line>;
            <Line dataKey={'physicsMarks'} stroke='yellow'></Line>;
            <Line dataKey={'chemistryMarks'}></Line>

            </LineChart>
            
        </div>
    );
};

export default ReCharts;