import React from 'react';

const KPIContext = React.createContext();

export const getContextValue = () => {
    return [
        {
            title: 'Sales',
            tags: ['Sales Growth', 'Sales Target', 'Revenue', 'Customer Churn Rate', 'Lead Conversion Ratio'],
        },
        {
            title: 'Marketing',
            tags: ['Customer Segmentation', 'Web and Marketing Analytics', 'Campaign Performance', 'Lead Generation'],
        },
        {
            title: 'Finance',
            tags: ['Financial Planning and Analysis', 'Revenue Management', 'Expense Management', 'Cash Flow Management'],
        },
        {
            title: 'Development',
            tags: ['Enterprise Grade Reporting', 'Data Discovery ', 'Centeralized BI', 'IT Infrastructure'],
        },
        {
            title: 'Data',
            tags: ['Sales Growth', 'Sales Target', 'Revenue', 'Customer Churn Rate', 'Lead Conversion Ratio'],
        }
    ]
}

export const KPIContextProvider = KPIContext.Provider;

export default KPIContext;