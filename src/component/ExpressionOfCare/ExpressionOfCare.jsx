// This component is after the banner.

import { Container } from 'react-bootstrap';
import './ExpressionOfCare.css'
import { useEffect, useRef, useState } from 'react';


const ExpressionOfCare = ({ info, columnNumber, left, widthOfContainerComponent , widthOfSliderComponent }) => {
    const slider = useRef();//Container that will slide left to right or right to left
    const sliderControllingRightButton = useRef();//Right side button that control the slider movements
    const sliderControllingLeftButton = useRef();//Left side button that control the slider movements
    const [moveSteps, setMoveSteps] = useState(0);//This numer helps slider to move left or right side

    console.log(info[0]?.text_part?.upper_para)

    // sliding the slider....
    useEffect(() => {
        const sliderContent = slider.current;
        sliderContent.style.left = moveSteps + 'px';
        sliderContent.style.transition = '0.5s';
    }, [moveSteps])


    // make visible  the slider controlling button- right side button
    const sliderControllerForBtnVisible = () => {
        sliderControllingRightButton.current.style.left = '92vw';
        sliderControllingLeftButton.current.style.left = '0vw';
        sliderControllingLeftButton.current.style.transition = '0.5s';
        sliderControllingRightButton.current.style.transition = '0.5s';
    }


    // make hidden the slider controlling button- right side button
    const sliderControllerForBtnHidden = () => {
        sliderControllingRightButton.current.style.left = '102vw';
        sliderControllingLeftButton.current.style.left = '-10vw';
        sliderControllingLeftButton.current.style.transition = '0.5s';
        sliderControllingRightButton.current.style.transition = '0.5s';
    }


    // This function update the of movesteps of sliderContainer based on right side button
    const updateMoveStepsForRightBtn = () => {
        if (moveSteps > -600) {
            let newMoveSteps = moveSteps - 200;
            setMoveSteps(newMoveSteps);
            sliderControllingRightButton.current.style.display = 'inline-block';
            sliderControllingLeftButton.current.style.display = 'inline-block';
        }
        else if (moveSteps == -600) {
            sliderControllingRightButton.current.style.display = 'none';
            sliderControllingLeftButton.current.style.display = 'inline-block';
        }
    }



    // This function update the of movesteps of sliderContainer based on left side button
    const updateMoveStepsForLeftBtn = () => {
        console.log(123)
        if (moveSteps < 1) {
            let newMoveSteps = moveSteps + 200;
            setMoveSteps(newMoveSteps);
            sliderControllingLeftButton.current.style.display = 'inline-block';
            sliderControllingRightButton.current.style.display = 'inline-block';
        }
        else if (moveSteps >= 1) {
            sliderControllingLeftButton.current.style.display = 'none';
            sliderControllingRightButton.current.style.display = 'inline-block';
        }
    }






    // Styling the component. Because width of component may change to different place.
    const styleSheetOfContainer = {
        width: `${widthOfContainerComponent}vw`
    }
    // Width of the slider is also different in different places
    const styleSheetOfSlider = {
        width: `${widthOfSliderComponent}vw`,
        display: "grid",
        gridTemplateColumns: `repeat(${columnNumber},1fr)`,
        
        marginLeft: `${left}vw`
    }




    return (
        <div style={styleSheetOfContainer} onMouseEnter={sliderControllerForBtnVisible} onMouseLeave={sliderControllerForBtnHidden} className='expressionOfCareSection  mb-5 px-0' >
            {/* Slider controlling Right button. This button control the slider from the right side */}
            <div ref={sliderControllingRightButton} onClick={updateMoveStepsForRightBtn} className='right-arrow-box'></div>

            {/* Slider controlling left button. This button control the slider from the left side */}
            <div ref={sliderControllingLeftButton} onClick={updateMoveStepsForLeftBtn} className="left-arrow-box"></div>


            {/* This is the slider container */}
            <section ref={slider} style={styleSheetOfSlider} className='insideOfExpressionOfCoreSection'>
                {/* text */}
                <div>
                    <p>{info[0]?.text_part?.upper_para}</p>
                    <h1>{info[0]?.text_part?.heading}</h1>
                    <article>
                        {info[0]?.text_part?.main_para}
                    </article>
                    <a href="#">{info[0]?.text_part?.button_text}</a>

                </div>

                {/* image part start */}
                <div>
                    <img className='img-fluid' src={info[0]?.images_array[0]?.image} alt="" />
                    <p className='text-center fw-bold'>{info[0]?.images_array[0]?.image_heading}</p>
                    <p className='text-center '>{info[0]?.images_array[0]?.image_text}</p>

                </div>


                <div>
                    <img className='img-fluid' src={info[0]?.images_array[1]?.image} alt="" />
                    <p className='text-center fw-bold'>{info[0]?.images_array[1]?.image_heading}</p>
                    <p className='text-center '>{info[0]?.images_array[1]?.image_text}</p>
                </div>

                <div>
                    <img className='img-fluid' src={info[0]?.images_array[2]?.image} alt="" />
                    <p className='text-center fw-bold'>{info[0]?.images_array[2]?.image_heading}</p>
                    <p className='text-center '>{info[0]?.images_array[2]?.image_text}</p>
                </div>


            </section>
            <div className='scrollContainer '>
                <div className='scrollBar'></div>
            </div>
        </div>
    );
};

export default ExpressionOfCare;