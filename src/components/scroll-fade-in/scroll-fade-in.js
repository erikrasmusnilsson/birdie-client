import react, { useState, useEffect } from 'react';
import styles from './scroll-fade-in.module.scss';

const ScrollFadeIn = ({ children, offset, direction }) => {
    const [showing, setShowing] = useState(false);
    
    let hidingVariant = styles.ToLeft;
    switch (direction) {
        case 'to-left':
            hidingVariant = styles.ToLeft;
            break;
        case 'to-right':
            hidingVariant = styles.ToRight;
            break;
        case 'to-bottom':
            hidingVariant = styles.ToBottom;
            break;
        case 'to-top':
            hidingVariant = styles.ToTop;
            break;
    }
    
    const element = react.createRef();

    const inViewport = (element) => {
        if (!element || !element.current) return false;

        const bounds = element.current.getBoundingClientRect();
        const windowBottom = window.innerHeight;
        
        return (bounds.top + offset >= 0 && bounds.top - offset <= windowBottom);
    }

    const onscroll = () => {
        const shouldShow = inViewport(element);
        if (showing === shouldShow) return;
        else setShowing(shouldShow);    
    };

    if (!showing) window.addEventListener('scroll', event => onscroll());

    useEffect(() => {
        onscroll();
    }, []);

    return (
        <div ref={ element } className={ [styles.Wrapper, showing ? null : hidingVariant].join(' ') }>
            { children }
        </div>
    );
};

export default ScrollFadeIn;