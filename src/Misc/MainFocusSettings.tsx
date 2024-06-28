export type FocusSettings = {
    id: number;
    stage: string;
    title: string;
    subText: string
}

export const Focus: FocusSettings[] = [
    {
        id: 0,
        stage: '01',
        title: 'Property Valuation and Listing',
        subText: 'We accurately price and create compelling listings with high-quality photos and detailed descriptions to attract buyers.'
    },
    {
        id: 1,
        stage: '02',
        title: 'Negotiation and Offer Management',
        subText: 'We handle negotiations to secure the best terms, ensuring clear communication between buyers and sellers.'
    },
    {
        id: 2,
        stage: '03',
        title: 'Closing and Transaction Coordination',
        subText: 'We manage all closing steps, coordinating with professionals to ensure a seamless transaction.'
    }
];