const ratingButtons = document.querySelectorAll(".ratingButton");
const submitButton = document.querySelector(".submitButton");

ratingButtons.forEach(ratingBtn => {
    ratingBtn.addEventListener("click", () => {
        ratingButtons.forEach(button => button.classList.remove("actived"));
        ratingBtn.classList.add("actived");
    });
});

function handleRatingAction() {
    const selectedBtn = document.querySelector(".ratingButton.actived");

    if (!selectedBtn) {
        return;
    }

    const rateValue = selectedBtn.value;

    const ratingState = document.querySelector("#rating-state");
    const thankState = document.querySelector("#thank-you-state");
    const ratingNum = document.querySelector(".displayValue");

    ratingState.classList.add("remove");
    thankState.classList.add("display");
    ratingNum.textContent = rateValue;
}

submitButton.addEventListener("click", handleRatingAction);
