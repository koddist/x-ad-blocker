document.addEventListener("DOMNodeInserted", () => {
    const xposts = Array.from(document.querySelectorAll('[data-testid="cellInnerDiv"]'));

    xposts.forEach(xpost => {
        const xpostElements = Array.from(xpost.querySelectorAll('*'));
        const hasAd = xpostElements.find(el => el.textContent === 'Ad');
        if (hasAd) {
            xpost.style.display = "none";
        }
    })
});