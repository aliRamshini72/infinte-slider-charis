import { useEffect, useRef } from "react";
import './style.css'
export interface InfiniteSliderProps {
    children: React.ReactNode;
}

export default function InfiniteSlider(props : InfiniteSliderProps ) {
    const { children } = props;
    const ref: any = useRef();
    useEffect(() => {
        if (ref && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const marqueeContent = Array.from(ref.current.children);
            marqueeContent.forEach((item: any) => {
                const clone = item.cloneNode(true);
                clone.setAttribute("aria-hidden", true);
                ref.current.appendChild(clone);
            })
        }
    }, [ref]);

    return <div className="scroller">
        <ul className="inner" ref={ref}>
            {children}
        </ul>
    </div>;
}