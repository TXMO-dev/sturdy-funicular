import { ReactNode } from "react";
import Bulleting from './../assets/bulleting.svg'
type AboutContentInfoSettings = {
    id: number;
    icon: ReactNode;
    value: string;
}

export const AboutContentInfo: AboutContentInfoSettings[] = [
{
    id: 0,
    icon: <img src={Bulleting} className="w-[1rem] h-[1rem]" />,
    value: 'Only pay when you accept'
},
{
    id: 1,
    icon: <img src={Bulleting} className="w-[1rem] h-[1rem]" />,
    value: 'Unlimited featured use'
},
{
    id: 2,
    icon: <img src={Bulleting} className="w-[1rem] h-[1rem]" />,
    value: '24/7 support'
}
]