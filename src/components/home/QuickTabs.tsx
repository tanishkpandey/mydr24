import React from 'react';

const services = [
    {
        image: '/path/to/ambulance-image.png', // Replace with actual image path
        title: 'Emergency Ambulance Care',
        subtitle: 'FIND STORE',
        backgroundColor: '#E3F2FD',
    },
    {
        image: '/path/to/medicine-image.png',
        title: 'Get 15% off on Medicines',
        subtitle: 'UPLOAD NOW',
        backgroundColor: '#E8F5E9',
    },
    {
        image: '/path/to/hospital-image.png',
        title: 'Hospital Visit',
        subtitle: 'PRE-BOOK',
        backgroundColor: '#E3F2FD',
    },
    {
        image: '/path/to/video-consult-image.png',
        title: 'Video Consult',
        subtitle: 'IN 15 MIN',
        backgroundColor: '#FFF9C4',
    },
    {
        image: '/path/to/lab-test-image.png',
        title: 'Lab Tests',
        subtitle: 'AT HOME',
        backgroundColor: '#FFEBEE',
    },
];

const QuickTabs: React.FC = () => {
    return (
        <section className="py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg flex items-center justify-between"
                        style={{ backgroundColor: service.backgroundColor }}
                    >
                        <div className="flex items-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="h-16 w-16 object-contain mr-4"
                            />
                            <div>
                                <h3 className="font-bold text-md">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.subtitle}</p>
                            </div>
                        </div>
                        <span className="text-lg font-bold text-gray-500">{'>'}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuickTabs;
