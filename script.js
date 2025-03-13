document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const locationDisplay = document.querySelector(".location");

    button.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                },
                (error) => {
                    locationDisplay.textContent = `Error: ${error.message}`;
                }
            );
        } else {
            locationDisplay.textContent = "Geolocation is not supported by your browser.";
        }
    });
});
