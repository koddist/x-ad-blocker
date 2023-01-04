const hidePromoted = (promoted) => {
    promoted.forEach((el) => {
        if (el.closest('[data-testid="cellInnerDiv"]')) {
            el.closest('[data-testid="cellInnerDiv"]').style.display = "none";
        } else if (el.closest('[data-testid="UserCell"]')) {
            el.closest('[data-testid="UserCell"]').style.display = "none";
        }
    })
}

document.addEventListener("DOMNodeInserted", () => {
    const spanElements = document.querySelectorAll('path');
    const promotedElements = Array.from(spanElements).filter((element) => element.getAttribute('d') === "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z");

    hidePromoted(promotedElements);
})
