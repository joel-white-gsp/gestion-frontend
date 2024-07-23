

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import leftArrow from 'assets/svg/red-left-arrow.svg'
import rightArrow from 'assets/svg/red-right-arrow.svg'

function Carousel({ children, show, infiniteLoop, handleCurrent }) {

    const [currentIndex, setCurrentIndex] = useState(3);
    const [length, setLength] = useState(children.length);

    const [isRepeating, setIsRepeating] = useState(
        infiniteLoop && children.length > show
    );
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        setLength(children.length);
        setIsRepeating(infiniteLoop && children.length > show);
    }, [children, infiniteLoop, show]);

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, show, length]);

    const next = () => {
        // if (isRepeating || currentIndex > 0) {
        setCurrentIndex((prevState) => prevState < length - 2 ? prevState + 1 : 0);
        handleCurrent(currentIndex)
        // }

        // if (isRepeating || currentIndex > 0) {
        //     setCurrentIndex((prevState) => prevState > 0 ? prevState - 1 : prevState);
        // }
    };

    const prev = () => {
        // if (isRepeating || currentIndex > 0) {
        setCurrentIndex((prevState) => prevState > 0 ? prevState - 1 : length - 2);
        handleCurrent(currentIndex)
        // }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    // const handleTransitionEnd = () => {
    //     if (isRepeating) {
    //         if (currentIndex === 0) {
    //             setTransitionEnabled(false);
    //             setCurrentIndex(length);
    //         } else if (currentIndex === length + show) {
    //             setTransitionEnabled(false);
    //             setCurrentIndex(show);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     setTransitionEnabled(false);
    //     handleTransitionEnd();
    // }, [currentIndex]);

    const renderExtraPrev = () => {
        const output = [];
        for (let index = 0; index < show; index += 1) {
            output.push(children[length - 1 - index]);
        }
        output.reverse();
        return output;
    };

    const renderExtraNext = () => {
        const output = [];
        for (let index = 0; index < show; index += 1) {
            output.push(children[index]);
        }
        return output;
    };

    return (
        <Wrapper>
            {currentIndex}
            <>
                <div className="carousel-wrapper">
                    {/* {(isRepeating || currentIndex > 0) && ( */}
                    <button type="button" onClick={prev} className="left-arrow">
                        <img src={leftArrow} />

                    </button>
                    {/* )} */}
                    <div
                        className="carousel-content-wrapper"
                        // @ts-ignore
                        onTouchStart={handleTouchStart}
                        // @ts-ignore
                        onTouchMove={handleTouchMove}
                        style={length > 1 ? {} : { display: 'flex', justifyContent: 'center' }}
                    >
                        <div
                            className={`carousel-content show-${show}`}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / show)}%)`,
                                transition: !transitionEnabled ? "none" : undefined,
                            }}
                        >
                            {length > show && isRepeating && renderExtraPrev()}
                            {children}
                            {length > show && isRepeating && renderExtraNext()}
                        </div>
                    </div>
                    {/* {(isRepeating || currentIndex < length - show) && ( */}
                    <button type="button" onClick={next} className="right-arrow">
                        <img src={rightArrow} />
                    </button>
                    {/* )} */}
                </div>

                {/* {
                    length?.toString?.map((el) => {
                        return (
                            <div className="pagination">{el}</div>
                        )
                    })
                } */}
            </>

        </Wrapper>

    );
}

export default Carousel;


const Wrapper = styled.div`
.carousel-content-wrapper{
    overflow-x: hidden;
}
.carousel-wrapper{
    position: relative;
}
.carousel-content{
    display: flex;
    gap: 20px;
    align-items: center;
 

}
.right-arrow, .left-arrow{
    position: absolute;
    top:50%
}
.right-arrow{
    right: 0px;
}
.left-arrow{
    left: 0px;
    z-index: 999;
}
.pagination{
    background-color: #ff2338;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`