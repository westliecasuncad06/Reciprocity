const initSlider = () => {
    const imageList1 = document.querySelector(".slider-wrapper .image-list1");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".mainshop .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList1.scrollWidth - imageList1.clientWidth;

    // Handle Mouse Drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        //Update Thumb Position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft; 

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList1.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Event Listener
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList1.clientWidth * direction;
            imageList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList1.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList1.scrollLeft >= maxScrollLeft ? "none" : "block";

    }
    //Updated Scroll Bar position 
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList1.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList1.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
};

// Initialize the slider
initSlider();

// **********************  End  ******************************* //


// For Girls Function buttons //

const initSlider2 = () => {
    const imageList2 = document.querySelector(".slider-wrapper2 .image-list2");
    const slideButtons = document.querySelectorAll(".slider-wrapper2 .slide-button2");
    const sliderScrollbar2 = document.querySelector(".mainshop .slider-scrollbar2");
    const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;

        // Handle Mouse Drag
        scrollbarThumb2.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition2 = scrollbarThumb2.offsetLeft;
    
            //Update Thumb Position on mouse move
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition2 = thumbPosition2 + deltaX;
                const maxThumbPosition2 = sliderScrollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;
    
                const boundedPosition2 = Math.max(0, Math.min(maxThumbPosition2, newThumbPosition2));
                const scrollPosition2 = (boundedPosition2 / maxThumbPosition2) * maxScrollLeft2; 
    
                scrollbarThumb2.style.left = `${boundedPosition2}px`;
                imageList2.scrollLeft = scrollPosition2;
            }
    
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }
    
            // Event Listener
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });


    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount = imageList2.clientWidth * direction;
            imageList2.scrollBy({left : scrollAmount, behavior: "smooth" });
        })
    })

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons2 = () => {
        slideButtons[0].style.display = imageList2.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    }

    //Updated Scroll Bar position 
    const updateScrollThumbPosition2 = () => {
        const scrollPosition2 = imageList2.scrollLeft;
        const thumbPosition2 = (scrollPosition2 / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetWidth);
        scrollbarThumb2.style.left = `${thumbPosition2}px`;
    }

    imageList2.addEventListener("scroll", () => {
        handleSlideButtons2();
        updateScrollThumbPosition2();
    })
}

window.addEventListener("load", initSlider2);
 
// **********************  End  ******************************* //




// For Casual Wear Function Button //


const initSlider3 = () => {
    const imageList3 = document.querySelector(".slider-wrapper3 .image-list3");
    const slideButtons = document.querySelectorAll(".slider-wrapper3 .slide-button3");
    const sliderScrollbar3 = document.querySelector(".mainshop3 .slider-scrollbar3");
    const scrollbarThumb3 = sliderScrollbar3.querySelector(".scrollbar-thumb3");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;

    // Handle Mouse Drag
    scrollbarThumb3.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition3 = scrollbarThumb3.offsetLeft;

        //Update Thumb Position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition3 = thumbPosition3 + deltaX;
            const maxThumbPosition3 = sliderScrollbar3.getBoundingClientRect().width - scrollbarThumb3.offsetWidth;

            const boundedPosition3 = Math.max(0, Math.min(maxThumbPosition3, newThumbPosition3));
            const scrollPosition3= (boundedPosition3 / maxThumbPosition3) * maxScrollLeft3; 

            scrollbarThumb3.style.left = `${boundedPosition3}px`;
            imageList3.scrollLeft = scrollPosition3;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Event Listener
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });


    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide3" ? -1 : 1;
            const scrollAmount = imageList3.clientWidth * direction;
            imageList3.scrollBy({left : scrollAmount, behavior: "smooth" });
        })
    })

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons3 = () => {
        slideButtons[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "block"; 
        slideButtons[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "block";
    }

    //Updated Scroll Bar position 
    const updateScrollThumbPosition3 = () => {
        const scrollPosition3 = imageList3.scrollLeft;
        const thumbPosition3 = (scrollPosition3 / maxScrollLeft3) * (sliderScrollbar3.clientWidth - scrollbarThumb3.offsetWidth);
        scrollbarThumb3.style.left = `${thumbPosition3}px`;
    }

    imageList3.addEventListener("scroll", () => {
        handleSlideButtons3();
        updateScrollThumbPosition3();
    })
}

window.addEventListener("load", initSlider3);

// **********************  End  ******************************* //




// For Women Clothes Function buttons //

const initSlider4 = () => {
    const imageList4 = document.querySelector(".slider-wrapper4 .image-list4");
    const slideButtons = document.querySelectorAll(".slider-wrapper4 .slide-button4");
    const sliderScrollbar4 = document.querySelector(".mainshop4 .slider-scrollbar4");
    const scrollbarThumb4 = sliderScrollbar4.querySelector(".scrollbar-thumb4");
    const maxScrollLeft4 = imageList4.scrollWidth - imageList4.clientWidth;

    // Handle Mouse Drag
    scrollbarThumb4.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition4 = scrollbarThumb4.offsetLeft;

        //Update Thumb Position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition4 = thumbPosition4 + deltaX;
            const maxThumbPosition4 = sliderScrollbar4.getBoundingClientRect().width - scrollbarThumb4.offsetWidth;

            const boundedPosition4 = Math.max(0, Math.min(maxThumbPosition4, newThumbPosition4));
            const scrollPosition4 = (boundedPosition4 / maxThumbPosition4) * maxScrollLeft4; 

            scrollbarThumb4.style.left = `${boundedPosition4}px`;
            imageList4.scrollLeft = scrollPosition4;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Event Listener
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide4" ? -1 : 1;
            const scrollAmount = imageList4.clientWidth * direction;
            imageList4.scrollBy({left : scrollAmount, behavior: "smooth" });
        })
    })

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons4 = () => {
        slideButtons[0].style.display = imageList4.scrollLeft <= 0 ? "none" : "block"; 
        slideButtons[1].style.display = imageList4.scrollLeft >= maxScrollLeft4 ? "none" : "block";
    }

    //Updated Scroll Bar position 
    const updateScrollThumbPosition4 = () => {
        const scrollPosition4 = imageList4.scrollLeft;
        const thumbPosition4 = (scrollPosition4 / maxScrollLeft4) * (sliderScrollbar4.clientWidth - scrollbarThumb4.offsetWidth);
        scrollbarThumb4.style.left = `${thumbPosition4}px`;
    }

    imageList4.addEventListener("scroll", () => {
        handleSlideButtons4();
        updateScrollThumbPosition4();
    })
}

window.addEventListener("load", initSlider4);

// **********************  End  ******************************* //



// For Women Casual  Function buttons //

const initSlider5 = () => {
    const imageList5 = document.querySelector(".slider-wrapper5 .image-list5");
    const slideButtons = document.querySelectorAll(".slider-wrapper5 .slide-button5");
    const sliderScrollbar5 = document.querySelector(".mainshop5 .slider-scrollbar5");
    const scrollbarThumb5 = sliderScrollbar5.querySelector(".scrollbar-thumb5");
    const maxScrollLeft5 = imageList5.scrollWidth - imageList5.clientWidth;

    // Handle Mouse Drag
    scrollbarThumb5.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition5 = scrollbarThumb5.offsetLeft;

        //Update Thumb Position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition5 = thumbPosition5 + deltaX;
            const maxThumbPosition5 = sliderScrollbar5.getBoundingClientRect().width - scrollbarThumb5.offsetWidth;

            const boundedPosition5 = Math.max(0, Math.min(maxThumbPosition5, newThumbPosition5));
            const scrollPosition5 = (boundedPosition5 / maxThumbPosition5) * maxScrollLeft5; 

            scrollbarThumb5.style.left = `${boundedPosition5}px`;
            imageList5.scrollLeft = scrollPosition5;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Event Listener
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide5" ? -1 : 1;
            const scrollAmount = imageList5.clientWidth * direction;
            imageList5.scrollBy({left : scrollAmount, behavior: "smooth" });
        })
    })

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons5 = () => {
        slideButtons[0].style.display = imageList5.scrollLeft <= 0 ? "none" : "block"; 
        slideButtons[1].style.display = imageList5.scrollLeft >= maxScrollLeft5 ? "none" : "block";
    }

     //Updated Scroll Bar position 
     const updateScrollThumbPosition5 = () => {
        const scrollPosition5 = imageList5.scrollLeft;
        const thumbPosition5 = (scrollPosition5 / maxScrollLeft5) * (sliderScrollbar5.clientWidth - scrollbarThumb5.offsetWidth);
        scrollbarThumb5.style.left = `${thumbPosition5}px`;
    }
    
    imageList5.addEventListener("scroll", () => {
        handleSlideButtons5();
        updateScrollThumbPosition5();
    })
}

window.addEventListener("load", initSlider5);

// **********************  End  ******************************* //



// For Accessories  Glasses Function buttons //

const initSlider6 = () => {
    const imageList6 = document.querySelector(".slider-wrapper6 .image-list6");
    const slideButtons = document.querySelectorAll(".slider-wrapper6 .slide-button6");
    const sliderScrollbar6 = document.querySelector(".mainshop6 .slider-scrollbar6");
    const scrollbarThumb6 = sliderScrollbar6.querySelector(".scrollbar-thumb6");
    const maxScrollLeft6 = imageList6.scrollWidth - imageList6.clientWidth;

    // Handle Mouse Drag
    scrollbarThumb6.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition6 = scrollbarThumb6.offsetLeft;

        //Update Thumb Position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition6 = thumbPosition6 + deltaX;
            const maxThumbPosition6 = sliderScrollbar6.getBoundingClientRect().width - scrollbarThumb6.offsetWidth;

            const boundedPosition6 = Math.max(0, Math.min(maxThumbPosition6, newThumbPosition6));
            const scrollPosition6 = (boundedPosition6 / maxThumbPosition6) * maxScrollLeft6; 

            scrollbarThumb6.style.left = `${boundedPosition6}px`;
            imageList6.scrollLeft = scrollPosition6;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Event Listener
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });


    // Slide Button to the slide button clicks
    slideButtons.forEach(button => {    
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide6" ? -1 : 1;
            const scrollAmount = imageList6.clientWidth * direction;
            imageList6.scrollBy({left : scrollAmount, behavior: "smooth" });
        })
    })

    // For Slide Button na naka hide kapag nag max scroll
    const handleSlideButtons6 = () => {
        slideButtons[0].style.display = imageList6.scrollLeft <= 0 ? "none" : "block"; 
        slideButtons[1].style.display = imageList6.scrollLeft >= maxScrollLeft6 ? "none" : "block";
    }

    //Updated Scroll Bar position 
    const updateScrollThumbPosition6 = () => {
        const scrollPosition6 = imageList6.scrollLeft;
        const thumbPosition6 = (scrollPosition6 / maxScrollLeft6) * (sliderScrollbar6.clientWidth - scrollbarThumb6.offsetWidth);
        scrollbarThumb6.style.left = `${thumbPosition6}px`;
    }
    
    imageList6.addEventListener("scroll", () => {
        handleSlideButtons6();
        updateScrollThumbPosition6();
    })
}

window.addEventListener("load", initSlider6);

// end //

